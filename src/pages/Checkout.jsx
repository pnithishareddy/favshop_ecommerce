// import { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { useStore } from '../store'
// import { Field, btn, Wrap, PageTitle } from '../components'
// import { Summary } from './Cart'
// import { money, payLabel } from '../data'

// const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// export function validateCheckout(f) {
//   const e = {}
//   if (f.name.trim().length < 2) e.name = 'Enter your full name.'
//   if (!EMAIL.test(f.email)) e.email = 'Enter a valid email address.'
//   if (!/^\d{10}$/.test(f.phone.replace(/\s/g, ''))) e.phone = 'Enter a 10-digit phone number.'
//   if (f.address.trim().length < 5) e.address = 'Enter your street address.'
//   if (f.city.trim().length < 2) e.city = 'Enter your city.'
//   if (!/^\d{6}$/.test(f.zip)) e.zip = 'Enter a 6-digit PIN code.'
//   return e
// }

// export default function Checkout() {
//   const { items, session, placeOrder, myPayments } = useStore()
//   const nav = useNavigate()
//   const [f, setF] = useState({ name: session.name, email: session.email, phone: session.phone || '', address: session.address || '', city: session.city || '', zip: session.zip || '', payment: myPayments.find((p) => p.isDefault) ? payLabel(myPayments.find((p) => p.isDefault)) : 'Cash on delivery' })
//   const [err, setErr] = useState({})
//   const on = (k) => (e) => setF({ ...f, [k]: e.target.value })
//   if (!items.length) return <Wrap className="text-center"><PageTitle>Nothing to check out</PageTitle><Link to="/products" className={btn}>Browse products</Link></Wrap>
//   const submit = (e) => {
//     e.preventDefault()
//     const v = validateCheckout(f); setErr(v)
//     if (Object.keys(v).length) return
//     const o = placeOrder(f); nav('/orders', { state: { placed: o.id } })
//   }
//   return (
//     <Wrap>
//       <PageTitle>Checkout</PageTitle>
//       <form onSubmit={submit} noValidate className="grid gap-6 lg:grid-cols-[1fr_360px]">
//         <div className="space-y-6">
//           <section className="space-y-4 rounded-2xl border border-stone-200 bg-white p-5">
//             <h2 className="text-lg font-bold">Customer details</h2>
//             <div className="grid gap-4 sm:grid-cols-2">
//               <Field label="Full name" value={f.name} onChange={on('name')} error={err.name} />
//               <Field label="Email" type="email" value={f.email} onChange={on('email')} error={err.email} />
//               <Field label="Phone" value={f.phone} onChange={on('phone')} error={err.phone} placeholder="10-digit mobile number" />
//             </div>
//           </section>
//           <section className="space-y-4 rounded-2xl border border-stone-200 bg-white p-5">
//             <h2 className="text-lg font-bold">Delivery address</h2>
//             <Field label="Street address" value={f.address} onChange={on('address')} error={err.address} />
//             <div className="grid gap-4 sm:grid-cols-2">
//               <Field label="City" value={f.city} onChange={on('city')} error={err.city} />
//               <Field label="PIN code" value={f.zip} onChange={on('zip')} error={err.zip} />
//             </div>
//             <p className="text-xs text-stone-500">Save cards or UPI IDs for faster checkout in <Link to="/settings" className="font-medium text-brand-600">Settings</Link>.</p>
//             <Field as="select" label="Payment method" value={f.payment} onChange={on('payment')}>
//               <option>Cash on delivery</option>{myPayments.map((p) => <option key={p.id}>{payLabel(p)}</option>)}
//             </Field>
//           </section>
//         </div>
//         <aside className="h-fit rounded-2xl border border-stone-200 bg-white p-5">
//           <h2 className="mb-3 text-lg font-bold">Order summary</h2>
//           <ul className="mb-4 space-y-2 text-sm">
//             {items.map((i) => <li key={i.id} className="flex justify-between gap-2"><span>{i.name} × {i.qty}</span><span>{money(i.price * i.qty)}</span></li>)}
//           </ul>
//           <Summary />
//           <button className={btn + ' mt-5 w-full'}>Place order</button>
//         </aside>
//       </form>
//     </Wrap>
//   )
// }


















// import { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { useStore } from '../store'
// import { Field, btn, Wrap, PageTitle } from '../components'
// import { Summary } from './Cart'
// import { money, payLabel } from '../data'

// const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// export function validateCheckout(f) {
//   const e = {}
//   if (f.name.trim().length < 2) e.name = 'Enter your full name.'
//   if (!EMAIL.test(f.email)) e.email = 'Enter a valid email address.'
//   if (!/^\d{10}$/.test(f.phone.replace(/\s/g, ''))) e.phone = 'Enter a 10-digit phone number.'
//   if (f.address.trim().length < 5) e.address = 'Enter your street address.'
//   if (f.city.trim().length < 2) e.city = 'Enter your city.'
//   if (!/^\d{6}$/.test(f.zip)) e.zip = 'Enter a 6-digit PIN code.'
//   return e
// }

// export default function Checkout() {
//   const { items, session, placeOrder, myPayments } = useStore()
//   const nav = useNavigate()
//   const [f, setF] = useState({ name: session.name, email: session.email, phone: session.phone || '', address: session.address || '', city: session.city || '', zip: session.zip || '', payment: myPayments.find((p) => p.isDefault) ? payLabel(myPayments.find((p) => p.isDefault)) : 'Cash on delivery' })
//   const [err, setErr] = useState({})
//   const on = (k) => (e) => setF({ ...f, [k]: e.target.value })
//   if (!items.length) return <Wrap className="text-center"><PageTitle>Nothing to check out</PageTitle><Link to="/products" className={btn}>Browse products</Link></Wrap>
//   const submit = (e) => {
//     e.preventDefault()
//     const v = validateCheckout(f); setErr(v)
//     if (Object.keys(v).length) return
//     const o = placeOrder(f); nav('/orders', { state: { placed: o.id } })
//   }
//   return (
//     <Wrap>
//       <PageTitle>Checkout</PageTitle>
//       <form onSubmit={submit} noValidate className="grid gap-6 lg:grid-cols-[1fr_360px]">
//         <div className="space-y-6">
//           <section className="space-y-4 rounded-2xl border border-stone-200 bg-white p-5">
//             <h2 className="text-lg font-bold">Customer details</h2>
//             <div className="grid gap-4 sm:grid-cols-2">
//               <Field label="Full name" value={f.name} onChange={on('name')} error={err.name} />
//               <Field label="Email" type="email" value={f.email} onChange={on('email')} error={err.email} />
//               <Field label="Phone" value={f.phone} onChange={on('phone')} error={err.phone} placeholder="10-digit mobile number" />
//             </div>
//           </section>
//           <section className="space-y-4 rounded-2xl border border-stone-200 bg-white p-5">
//             <h2 className="text-lg font-bold">Delivery address</h2>
//             <Field label="Street address" value={f.address} onChange={on('address')} error={err.address} />
//             <div className="grid gap-4 sm:grid-cols-2">
//               <Field label="City" value={f.city} onChange={on('city')} error={err.city} />
//               <Field label="PIN code" value={f.zip} onChange={on('zip')} error={err.zip} />
//             </div>
//             <p className="text-xs text-stone-500">Save cards or UPI IDs for faster checkout in <Link to="/settings" className="font-medium text-brand-600">Settings</Link>.</p>
//             <Field as="select" label="Payment method" value={f.payment} onChange={on('payment')}>
//               <option>Cash on delivery</option>{myPayments.map((p) => <option key={p.id}>{payLabel(p)}</option>)}
//             </Field>
//           </section>
//         </div>
//         <aside className="h-fit rounded-2xl border border-stone-200 bg-white p-5">
//           <h2 className="mb-3 text-lg font-bold">Order summary</h2>
//           <ul className="mb-4 space-y-2 text-sm">
//             {items.map((i) => <li key={i.id} className="flex justify-between gap-2"><span>{i.name} × {i.qty}</span><span>{money(i.price * i.qty)}</span></li>)}
//           </ul>
//           <Summary />
//           <button className={btn + ' mt-5 w-full'}>Place order</button>
//         </aside>
//       </form>
//     </Wrap>
//   )
// }
















import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useStore } from '../store'
import { Field, btn, Wrap, PageTitle } from '../components'
import { Summary } from './Cart'
import { money, payLabel } from '../data'

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateCheckout(f) {
  const e = {}
  if (f.name.trim().length < 2) e.name = 'Enter your full name.'
  if (!EMAIL.test(f.email)) e.email = 'Enter a valid email address.'
  if (!/^\d{10}$/.test(f.phone.replace(/\s/g, ''))) e.phone = 'Enter a 10-digit phone number.'
  if (f.address.trim().length < 5) e.address = 'Enter your street address.'
  if (f.city.trim().length < 2) e.city = 'Enter your city.'
  if (!/^\d{6}$/.test(f.zip)) e.zip = 'Enter a 6-digit PIN code.'
  return e
}

export default function Checkout() {
  const { items, session, placeOrder, myPayments } = useStore()
  const nav = useNavigate()
  const [f, setF] = useState({ name: session.name, email: session.email, phone: session.phone || '', address: session.address || '', city: session.city || '', zip: session.zip || '', payment: myPayments.find((p) => p.isDefault) ? payLabel(myPayments.find((p) => p.isDefault)) : 'Cash on delivery' })
  const [err, setErr] = useState({})
  const on = (k) => (e) => setF({ ...f, [k]: e.target.value })
  if (!items.length) return <Wrap className="text-center"><PageTitle>Nothing to check out</PageTitle><Link to="/products" className={btn}>Browse products</Link></Wrap>
  const submit = (e) => {
    e.preventDefault()
    const v = validateCheckout(f); setErr(v)
    if (Object.keys(v).length) return
    const o = placeOrder(f); nav('/orders', { state: { placed: o.id } })
  }
  return (
    <Wrap>
      <PageTitle>Checkout</PageTitle>
      <form onSubmit={submit} noValidate className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="space-y-6">
          <section className="space-y-4 rounded-2xl border border-stone-200 bg-white p-5">
            <h2 className="text-lg font-bold">Customer details</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full name" value={f.name} onChange={on('name')} error={err.name} />
              <Field label="Email" type="email" value={f.email} onChange={on('email')} error={err.email} />
              <Field label="Phone" value={f.phone} onChange={on('phone')} error={err.phone} placeholder="10-digit mobile number" />
            </div>
          </section>
          <section className="space-y-4 rounded-2xl border border-stone-200 bg-white p-5">
            <h2 className="text-lg font-bold">Delivery address</h2>
            <Field label="Street address" value={f.address} onChange={on('address')} error={err.address} />
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="City" value={f.city} onChange={on('city')} error={err.city} />
              <Field label="PIN code" value={f.zip} onChange={on('zip')} error={err.zip} />
            </div>
            <p className="text-xs text-stone-500">Save cards or UPI IDs for faster checkout in <Link to="/settings" className="font-medium text-brand-600">Settings</Link>.</p>
            <Field as="select" label="Payment method" value={f.payment} onChange={on('payment')}>
              <option>Cash on delivery</option>{myPayments.map((p) => <option key={p.id}>{payLabel(p)}</option>)}
            </Field>
          </section>
        </div>
        <aside className="h-fit lg:sticky lg:top-28 rounded-2xl border border-stone-200 bg-white p-5">
          <h2 className="mb-3 text-lg font-bold">Order summary</h2>
          <ul className="mb-4 space-y-2 text-sm">
            {items.map((i) => <li key={i.id} className="flex justify-between gap-2"><span>{i.name} × {i.qty}</span><span>{money(i.price * i.qty)}</span></li>)}
          </ul>
          <Summary />
          <button className={btn + ' mt-5 w-full'}>Place order</button>
        </aside>
      </form>
    </Wrap>
  )
}