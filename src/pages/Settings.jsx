import { useState } from 'react'
import { useStore } from '../store'
import { Field, btn, btnGhost, Wrap, PageTitle } from '../components'
import { payLabel } from '../data'

const luhn = (n) => { let s = 0; [...n].reverse().forEach((d, i) => { let x = +d; if (i % 2) { x *= 2; if (x > 9) x -= 9 } s += x }); return s % 10 === 0 }
const brandOf = (n) => (n[0] === '4' ? 'Visa' : /^5[1-5]/.test(n) ? 'Mastercard' : n[0] === '6' ? 'RuPay' : 'Card')

function Section({ title, sub, children }) {
  return (
    <section className="rounded-2xl border border-stone-200 bg-white p-5">
      <h2 className="text-lg font-bold">{title}</h2>{sub && <p className="mb-4 text-sm text-stone-500">{sub}</p>}{children}
    </section>
  )
}

function Toggle({ label, desc, on, set }) {
  return (
    <div className="flex items-center justify-between gap-4 py-2">
      <div><p className="text-sm font-medium">{label}</p><p className="text-xs text-stone-500">{desc}</p></div>
      <button role="switch" aria-checked={on} aria-label={label} onClick={() => set(!on)} className={`relative h-6 w-11 shrink-0 rounded-full transition ${on ? 'bg-brand-600' : 'bg-stone-300'}`}>
        <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-[#ffffff] shadow transition-all ${on ? 'left-5' : 'left-0.5'}`} />
      </button>
    </div>
  )
}

function Payments() {
  const { myPayments, addPayment, removePayment, setDefaultPayment } = useStore()
  const [show, setShow] = useState(false)
  const [type, setType] = useState('card')
  const [f, setF] = useState({ name: '', number: '', exp: '', upi: '' })
  const [err, setErr] = useState({})
  const on = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    const v = {}
    if (type === 'card') {
      const n = f.number.replace(/\s/g, '')
      const m = f.exp.match(/^(\d{2})\/(\d{2})$/)
      const now = new Date()
      if (f.name.trim().length < 2) v.name = 'Enter the name on the card.'
      if (!/^\d{16}$/.test(n) || !luhn(n)) v.number = 'Enter a valid 16-digit card number.'
      if (!m || +m[1] < 1 || +m[1] > 12 || 2000 + +m[2] < now.getFullYear() || (2000 + +m[2] === now.getFullYear() && +m[1] < now.getMonth() + 1)) v.exp = 'Enter a valid future expiry (MM/YY).'
      setErr(v); if (Object.keys(v).length) return
      addPayment({ type: 'card', brand: brandOf(n), last4: n.slice(-4), name: f.name.trim(), exp: f.exp })
    } else {
      if (!/^[\w.\-]{2,}@[a-zA-Z]{2,}$/.test(f.upi.trim())) v.upi = 'Enter a valid UPI ID, for example name@upi.'
      setErr(v); if (Object.keys(v).length) return
      addPayment({ type: 'upi', upi: f.upi.trim() })
    }
    setF({ name: '', number: '', exp: '', upi: '' }); setShow(false)
  }
  return (
    <Section title="Saved payment methods" sub="Only the card brand and last 4 digits are saved. The CVV is never stored.">
      {myPayments.length === 0 && <p className="mb-3 text-sm text-stone-500">No saved methods yet.</p>}
      <ul className="mb-3 space-y-2">
        {myPayments.map((p) => (
          <li key={p.id} className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-stone-200 p-3">
            <div>
              <p className="text-sm font-semibold">{p.type === 'card' ? '💳 ' : '📲 '}{payLabel(p)}{p.isDefault && <span className="ml-2 rounded-full bg-brand-50 px-2 py-0.5 text-xs font-medium text-brand-700">Default</span>}</p>
              {p.type === 'card' && <p className="text-xs text-stone-500">{p.name} · expires {p.exp}</p>}
            </div>
            <div className="flex gap-3 text-sm font-medium">
              {!p.isDefault && <button onClick={() => setDefaultPayment(p.id)} className="text-brand-600 hover:underline">Make default</button>}
              <button onClick={() => removePayment(p.id)} className="text-red-600 hover:underline">Remove</button>
            </div>
          </li>
        ))}
      </ul>
      {!show ? <button onClick={() => setShow(true)} className={btnGhost}>Add payment method</button> : (
        <form onSubmit={submit} noValidate className="space-y-4 rounded-xl border border-brand-600 p-4">
          <div className="flex gap-2">
            {[['card', 'Card'], ['upi', 'UPI']].map(([k, l]) => <button type="button" key={k} onClick={() => { setType(k); setErr({}) }} className={type === k ? btn : btnGhost}>{l}</button>)}
          </div>
          {type === 'card' ? (<>
            <Field label="Name on card" value={f.name} onChange={on('name')} error={err.name} />
            <Field label="Card number" inputMode="numeric" maxLength={19} value={f.number} onChange={on('number')} error={err.number} placeholder="4242 4242 4242 4242" />
            <Field label="Expiry (MM/YY)" maxLength={5} value={f.exp} onChange={on('exp')} error={err.exp} placeholder="08/29" />
          </>) : <Field label="UPI ID" value={f.upi} onChange={on('upi')} error={err.upi} placeholder="name@upi" />}
          <div className="flex gap-2"><button className={btn}>Save method</button><button type="button" onClick={() => { setShow(false); setErr({}) }} className={btnGhost}>Cancel</button></div>
        </form>
      )}
    </Section>
  )
}

function Password() {
  const { changePassword } = useStore()
  const [f, setF] = useState({ cur: '', next: '', confirm: '' })
  const [err, setErr] = useState({})
  const [ok, setOk] = useState(false)
  const on = (k) => (e) => { setOk(false); setF({ ...f, [k]: e.target.value }) }
  const submit = (e) => {
    e.preventDefault()
    const v = {}
    if (!f.cur) v.cur = 'Enter your current password.'
    if (f.next.length < 6) v.next = 'Use at least 6 characters.'
    if (f.confirm !== f.next) v.confirm = 'Passwords do not match.'
    if (!Object.keys(v).length) { const m = changePassword(f.cur, f.next); if (m) v.cur = m }
    setErr(v)
    if (!Object.keys(v).length) { setOk(true); setF({ cur: '', next: '', confirm: '' }) }
  }
  return (
    <Section title="Change password">
      <form onSubmit={submit} noValidate className="space-y-4">
        <Field label="Current password" type="password" value={f.cur} onChange={on('cur')} error={err.cur} />
        <Field label="New password" type="password" value={f.next} onChange={on('next')} error={err.next} />
        <Field label="Confirm new password" type="password" value={f.confirm} onChange={on('confirm')} error={err.confirm} />
        <button className={btn}>{ok ? 'Password updated ✓' : 'Update password'}</button>
      </form>
    </Section>
  )
}

export default function Settings() {
  const { settings, setSettings } = useStore()
  const reset = () => {
    if (!window.confirm('Clear all FavShop data saved in this browser (cart, orders, accounts, payments)?')) return
    try { Object.keys(localStorage).filter((k) => k.startsWith('fav_')).forEach((k) => localStorage.removeItem(k)) } catch {}
    window.location.reload()
  }
  return (
    <Wrap className="max-w-3xl space-y-6">
      <PageTitle sub="Manage appearance, payments, notifications and security.">Settings</PageTitle>
      <Section title="Appearance" sub="Choose how FavShop looks. System follows your device.">
        <div className="flex flex-wrap gap-2">
          {[['light', '☀️ Light'], ['dark', '🌙 Dark'], ['system', '💻 System']].map(([k, l]) => (
            <button key={k} onClick={() => setSettings({ theme: k })} aria-pressed={settings.theme === k} className={settings.theme === k ? btn : btnGhost}>{l}</button>
          ))}
        </div>
      </Section>
      <Payments />
      <Section title="Notifications">
        <Toggle label="Order updates" desc="Get notified when your order status changes." on={settings.orders} set={(v) => setSettings({ orders: v })} />
        <Toggle label="Offers and deals" desc="Hear about sales and new arrivals." on={settings.offers} set={(v) => setSettings({ offers: v })} />
      </Section>
      <Password />
      <Section title="Data" sub="Everything is stored in this browser only.">
        <button onClick={reset} className="rounded-xl border border-red-300 px-4 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50">Clear all saved data</button>
      </Section>
    </Wrap>
  )
}
