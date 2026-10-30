// import { useState } from 'react'
// import { Link, useLocation, useNavigate } from 'react-router-dom'
// import { useStore } from '../store'
// import { Field, btn, btnGhost, Wrap } from '../components'

// const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// function Shell({ title, sub, children, foot }) {
//   return (
//     <Wrap className="max-w-md">
//       <div className="rounded-2xl border border-stone-200 bg-white p-6">
//         <h1 className="text-2xl font-bold">{title}</h1><p className="mb-5 mt-1 text-sm text-stone-500">{sub}</p>
//         {children}<p className="mt-5 text-center text-sm text-stone-600">{foot}</p>
//       </div>
//     </Wrap>
//   )
// }

// export function Login() {
//   const { login, demoLogin } = useStore()
//   const nav = useNavigate()
//   const loc = useLocation()
//   const [f, setF] = useState({ email: '', password: '' })
//   const [err, setErr] = useState({})
//   const submit = (e) => {
//     e.preventDefault()
//     const v = {}
//     if (!EMAIL.test(f.email)) v.email = 'Enter a valid email address.'
//     if (!f.password) v.password = 'Enter your password.'
//     if (!Object.keys(v).length) { const m = login(f.email, f.password); if (m) v.form = m; else return nav(loc.state?.from || '/') }
//     setErr(v)
//   }
//   return (
//     <Shell title="Welcome back" sub="Log in to check out and see your orders." foot={<>New here? <Link className="font-medium text-brand-600" to="/register">Create an account</Link></>}>
//       <form onSubmit={submit} noValidate className="space-y-4">
//         {err.form && <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{err.form}</p>}
//         <Field label="Email" type="email" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} error={err.email} />
//         <Field label="Password" type="password" value={f.password} onChange={(e) => setF({ ...f, password: e.target.value })} error={err.password} />
//         <button className={btn + ' w-full'}>Log in</button>
//       </form>
//       <div className="mt-5 space-y-2 border-t border-stone-200 pt-5">
//         <button type="button" onClick={() => { demoLogin(false); nav(loc.state?.from || '/') }} className={btnGhost + ' w-full'}>⚡ Demo login as Nithisha (1 click)</button>
//         <button type="button" onClick={() => { demoLogin(true); nav('/admin') }} className={btnGhost + ' w-full'}>🛠️ Demo login as Admin (1 click)</button>
//         <p className="text-center text-xs text-stone-500">Demo user: nithisha@favshop.com / demo123. Admin: admin@shop.com / admin123.</p>
//       </div>
//     </Shell>
//   )
// }

// export function Register() {
//   const { register } = useStore()
//   const nav = useNavigate()
//   const [f, setF] = useState({ name: '', email: '', password: '', confirm: '' })
//   const [err, setErr] = useState({})
//   const on = (k) => (e) => setF({ ...f, [k]: e.target.value })
//   const submit = (e) => {
//     e.preventDefault()
//     const v = {}
//     if (f.name.trim().length < 2) v.name = 'Enter your full name.'
//     if (!EMAIL.test(f.email)) v.email = 'Enter a valid email address.'
//     if (f.password.length < 6) v.password = 'Use at least 6 characters.'
//     if (f.confirm !== f.password) v.confirm = 'Passwords do not match.'
//     if (!Object.keys(v).length) { const m = register(f.name.trim(), f.email, f.password); if (m) v.email = m; else return nav('/') }
//     setErr(v)
//   }
//   return (
//     <Shell title="Create your account" sub="It takes under a minute." foot={<>Already registered? <Link className="font-medium text-brand-600" to="/login">Log in</Link></>}>
//       <form onSubmit={submit} noValidate className="space-y-4">
//         <Field label="Full name" value={f.name} onChange={on('name')} error={err.name} />
//         <Field label="Email" type="email" value={f.email} onChange={on('email')} error={err.email} />
//         <Field label="Password" type="password" value={f.password} onChange={on('password')} error={err.password} />
//         <Field label="Confirm password" type="password" value={f.confirm} onChange={on('confirm')} error={err.confirm} />
//         <button className={btn + ' w-full'}>Create account</button>
//       </form>
//     </Shell>
//   )
// }











// import { useState } from 'react'
// import { Link, useLocation, useNavigate } from 'react-router-dom'
// import { useStore } from '../store'
// import { Field, btn, btnGhost, Wrap } from '../components'

// const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// function Shell({ title, sub, children, foot }) {
//   return (
//     <Wrap className="max-w-md">
//       <div className="rounded-2xl border border-stone-200 bg-white p-6">
//         <h1 className="text-2xl font-bold">{title}</h1><p className="mb-5 mt-1 text-sm text-stone-500">{sub}</p>
//         {children}<p className="mt-5 text-center text-sm text-stone-600">{foot}</p>
//       </div>
//     </Wrap>
//   )
// }

// export function Login() {
//   const { login, demoLogin } = useStore()
//   const nav = useNavigate()
//   const loc = useLocation()
//   const [f, setF] = useState({ email: '', password: '' })
//   const [err, setErr] = useState({})
//   const submit = (e) => {
//     e.preventDefault()
//     const v = {}
//     if (!EMAIL.test(f.email)) v.email = 'Enter a valid email address.'
//     if (!f.password) v.password = 'Enter your password.'
//     if (!Object.keys(v).length) { const m = login(f.email, f.password); if (m) v.form = m; else return nav(loc.state?.from || '/') }
//     setErr(v)
//   }
//   return (
//     <Shell title="Welcome back" sub="Log in to check out and see your orders." foot={<>New here? <Link className="font-medium text-brand-600" to="/register">Create an account</Link></>}>
//       <form onSubmit={submit} noValidate className="space-y-4">
//         {err.form && <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{err.form}</p>}
//         <Field label="Email" type="email" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} error={err.email} />
//         <Field label="Password" type="password" value={f.password} onChange={(e) => setF({ ...f, password: e.target.value })} error={err.password} />
//         <button className={btn + ' w-full'}>Log in</button>
//       </form>
//       <div className="mt-5 space-y-2 border-t border-stone-200 pt-5">
//         <button type="button" onClick={() => { demoLogin(false); nav(loc.state?.from || '/') }} className={btnGhost + ' w-full'}>⚡ Demo login as Nithisha (1 click)</button>
//         <button type="button" onClick={() => { demoLogin(true); nav('/admin') }} className={btnGhost + ' w-full'}>🛠️ Demo login as Admin (1 click)</button>
//         <p className="text-center text-xs text-stone-500">Demo user: nithisha@favshop.com / demo123. Admin: admin@shop.com / admin123.</p>
//       </div>
//     </Shell>
//   )
// }

// export function Register() {
//   const { register } = useStore()
//   const nav = useNavigate()
//   const [f, setF] = useState({ name: '', email: '', password: '', confirm: '' })
//   const [err, setErr] = useState({})
//   const on = (k) => (e) => setF({ ...f, [k]: e.target.value })
//   const submit = (e) => {
//     e.preventDefault()
//     const v = {}
//     if (f.name.trim().length < 2) v.name = 'Enter your full name.'
//     if (!EMAIL.test(f.email)) v.email = 'Enter a valid email address.'
//     if (f.password.length < 6) v.password = 'Use at least 6 characters.'
//     if (f.confirm !== f.password) v.confirm = 'Passwords do not match.'
//     if (!Object.keys(v).length) { const m = register(f.name.trim(), f.email, f.password); if (m) v.email = m; else return nav('/') }
//     setErr(v)
//   }
//   return (
//     <Shell title="Create your account" sub="It takes under a minute." foot={<>Already registered? <Link className="font-medium text-brand-600" to="/login">Log in</Link></>}>
//       <form onSubmit={submit} noValidate className="space-y-4">
//         <Field label="Full name" value={f.name} onChange={on('name')} error={err.name} />
//         <Field label="Email" type="email" value={f.email} onChange={on('email')} error={err.email} />
//         <Field label="Password" type="password" value={f.password} onChange={on('password')} error={err.password} />
//         <Field label="Confirm password" type="password" value={f.confirm} onChange={on('confirm')} error={err.confirm} />
//         <button className={btn + ' w-full'}>Create account</button>
//       </form>
//     </Shell>
//   )
// }




















import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useStore } from '../store'
import { Field, btn, btnGhost, Wrap } from '../components'

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function Shell({ title, sub, children, foot }) {
  return (
    <Wrap className="max-w-md">
      <div className="rounded-2xl border border-stone-200 bg-white p-6">
        <h1 className="text-2xl font-bold">{title}</h1><p className="mb-5 mt-1 text-sm text-stone-500">{sub}</p>
        {children}<p className="mt-5 text-center text-sm text-stone-600">{foot}</p>
      </div>
    </Wrap>
  )
}

export function Login() {
  const { login, demoLogin } = useStore()
  const nav = useNavigate()
  const loc = useLocation()
  const [f, setF] = useState({ email: '', password: '' })
  const [err, setErr] = useState({})
  const submit = async (e) => {
    e.preventDefault()
    const v = {}
    if (!EMAIL.test(f.email)) v.email = 'Enter a valid email address.'
    if (!f.password) v.password = 'Enter your password.'
    if (!Object.keys(v).length) { const m = await login(f.email, f.password); if (m) v.form = m; else return nav(loc.state?.from || '/') }
    setErr(v)
  }
  return (
    <Shell title="Welcome back" sub="Log in to check out and see your orders." foot={<>New here? <Link className="font-medium text-brand-600" to="/register">Create an account</Link></>}>
      <form onSubmit={submit} noValidate className="space-y-4">
        {err.form && <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{err.form}</p>}
        <Field label="Email" type="email" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} error={err.email} />
        <Field label="Password" type="password" value={f.password} onChange={(e) => setF({ ...f, password: e.target.value })} error={err.password} />
        <button className={btn + ' w-full'}>Log in</button>
      </form>
      <div className="mt-5 space-y-2 border-t border-stone-200 pt-5">
        <button type="button" onClick={() => { demoLogin(false); nav(loc.state?.from || '/') }} className={btnGhost + ' w-full'}>⚡ Demo login as Nithisha (1 click)</button>
        <button type="button" onClick={() => { demoLogin(true); nav('/admin') }} className={btnGhost + ' w-full'}>🛠️ Demo login as Admin (1 click)</button>
        <p className="text-center text-xs text-stone-500">Demo user: nithisha@favshop.com / demo123. Admin: admin@shop.com / admin123.</p>
      </div>
    </Shell>
  )
}

export function Register() {
  const { register } = useStore()
  const nav = useNavigate()
  const [f, setF] = useState({ name: '', email: '', password: '', confirm: '' })
  const [err, setErr] = useState({})
  const on = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const submit = async (e) => {
    e.preventDefault()
    const v = {}
    if (f.name.trim().length < 2) v.name = 'Enter your full name.'
    if (!EMAIL.test(f.email)) v.email = 'Enter a valid email address.'
    if (f.password.length < 6) v.password = 'Use at least 6 characters.'
    if (f.confirm !== f.password) v.confirm = 'Passwords do not match.'
    if (!Object.keys(v).length) { const m = await register(f.name.trim(), f.email, f.password); if (m) v.email = m; else return nav('/') }
    setErr(v)
  }
  return (
    <Shell title="Create your account" sub="It takes under a minute." foot={<>Already registered? <Link className="font-medium text-brand-600" to="/login">Log in</Link></>}>
      <form onSubmit={submit} noValidate className="space-y-4">
        <Field label="Full name" value={f.name} onChange={on('name')} error={err.name} />
        <Field label="Email" type="email" value={f.email} onChange={on('email')} error={err.email} />
        <Field label="Password" type="password" value={f.password} onChange={on('password')} error={err.password} />
        <Field label="Confirm password" type="password" value={f.confirm} onChange={on('confirm')} error={err.confirm} />
        <button className={btn + ' w-full'}>Create account</button>
      </form>
    </Shell>
  )
}