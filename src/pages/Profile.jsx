import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useStore } from '../store'
import { Field, btn, btnGhost, Wrap, PageTitle, ProductImage } from '../components'
import { money } from '../data'

export function Profile() {
  const { session, updateProfile, orders } = useStore()
  const [f, setF] = useState({ name: session.name, phone: session.phone || '', address: session.address || '', city: session.city || '', zip: session.zip || '' })
  const [err, setErr] = useState({})
  const [saved, setSaved] = useState(false)
  const submit = (e) => {
    e.preventDefault()
    const v = {}
    if (f.name.trim().length < 2) v.name = 'Enter your full name.'
    if (f.phone && !/^\d{10}$/.test(f.phone.replace(/\s/g, ''))) v.phone = 'Enter a 10-digit phone number.'
    if (f.zip && !/^\d{6}$/.test(f.zip)) v.zip = 'Enter a 6-digit PIN code.'
    setErr(v)
    if (!Object.keys(v).length) { updateProfile({ name: f.name.trim(), phone: f.phone, address: f.address.trim(), city: f.city.trim(), zip: f.zip }); setSaved(true); setTimeout(() => setSaved(false), 1500) }
  }
  const mine = orders.filter((o) => o.userId === session.id)
  return (
    <Wrap className="max-w-2xl">
      <PageTitle sub={`${session.email} · ${session.role === 'admin' ? 'Administrator' : 'Customer'}`}>My profile</PageTitle>
      <form onSubmit={submit} noValidate className="space-y-4 rounded-2xl border border-stone-200 bg-white p-5">
        <Field label="Full name" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} error={err.name} />
        <Field label="Phone" value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value })} error={err.phone} />
        <Field label="Address" value={f.address} onChange={(e) => setF({ ...f, address: e.target.value })} />
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="City" value={f.city} onChange={(e) => setF({ ...f, city: e.target.value })} />
          <Field label="PIN code" value={f.zip} onChange={(e) => setF({ ...f, zip: e.target.value })} error={err.zip} />
        </div>
        <button className={btn}>{saved ? 'Saved' : 'Save changes'}</button>
      </form>
      <p className="mt-5 text-sm text-stone-600">You have placed {mine.length} order{mine.length === 1 ? '' : 's'}. <Link to="/orders" className="font-medium text-brand-600">View order history</Link></p>
    </Wrap>
  )
}

export function Orders() {
  const { orders, session } = useStore()
  const { state } = useLocation()
  const mine = orders.filter((o) => o.userId === session.id)
  return (
    <Wrap className="max-w-3xl">
      <PageTitle>Order history</PageTitle>
      {state?.placed && <p className="mb-4 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800">Order {state.placed} placed. Thank you for shopping with us.</p>}
      {!mine.length ? (
        <div className="rounded-2xl border border-dashed border-stone-300 p-10 text-center text-stone-500">You have no orders yet. <Link className="text-brand-600 underline" to="/products">Start shopping</Link></div>
      ) : (
        <div className="space-y-4">
          {mine.map((o) => (
            <div key={o.id} className="rounded-2xl border border-stone-200 bg-white p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div><p className="font-display font-bold">{o.id}</p><p className="text-sm text-stone-500">{new Date(o.date).toLocaleDateString()} · {o.info.payment}</p></div>
                <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">{o.status}</span>
              </div>
              <ul className="mt-3 divide-y divide-stone-100">
                {o.items.map((i) => (
                  <li key={i.id} className="flex items-center gap-3 py-2 text-sm">
                    <ProductImage p={i} className="h-10 w-10" /><span className="flex-1">{i.name} × {i.qty}</span><span>{money(i.price * i.qty)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-2 flex flex-wrap justify-between gap-2 text-sm text-stone-500">
                <span>Ship to: {o.info.address}, {o.info.city} - {o.info.zip}</span><span className="font-bold text-stone-900">Total {money(o.total)}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </Wrap>
  )
}
