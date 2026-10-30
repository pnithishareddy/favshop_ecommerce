import { useState } from 'react'
import { Link, NavLink, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useStore } from './store'
import { money, mrp } from './data'

export const btn = 'inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-amber-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-600/25 transition hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 disabled:opacity-50 disabled:hover:translate-y-0'
export const btnGhost = 'inline-flex items-center justify-center rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-sm font-semibold text-stone-800 transition hover:border-brand-600 hover:text-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600'
export const inputCls = (err) => `mt-1 w-full rounded-lg border bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-600 ${err ? 'border-red-500' : 'border-stone-300'}`

export function Field({ label, error, as = 'input', children, ...p }) {
  const Tag = as
  return (
    <label className="block">
      <span className="text-sm font-medium text-stone-700">{label}</span>
      <Tag {...p} className={inputCls(error)}>{children}</Tag>
      {error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
    </label>
  )
}

export function Stars({ value, n }) {
  const r = Math.round(value)
  return (
    <span className="inline-flex items-center text-sm text-amber-500" aria-label={`${value} out of 5`}>
      {'★'.repeat(r)}<span className="text-stone-300">{'★'.repeat(5 - r)}</span>
      {n != null && <span className="ml-1 text-xs text-stone-500">({n})</span>}
    </span>
  )
}

export function ProductImage({ p, view = 0, className = 'h-44' }) {
  const [a, b] = view % 2 ? [p.c2, p.c1] : [p.c1, p.c2]
  const rot = [0, -12, 14][view % 3], sc = [1, 1.25, 0.8][view % 3]
  return (
    <div className={`flex items-center justify-center overflow-hidden rounded-xl ${className}`} style={{ background: `radial-gradient(circle at 28% 18%, rgba(255,255,255,.45), transparent 55%), linear-gradient(135deg, ${a}, ${b})` }}>
      <span className="select-none text-6xl drop-shadow-md" style={{ transform: `rotate(${rot}deg) scale(${sc})`, fontSize: '4.5rem' }}>{p.emoji}</span>
    </div>
  )
}

export function ProductCard({ p }) {
  const { addToCart } = useStore()
  const [added, setAdded] = useState(false)
  const add = () => { addToCart(p.id); setAdded(true); setTimeout(() => setAdded(false), 1200) }
  return (
    <div className="group flex flex-col rounded-2xl border border-stone-200 bg-white p-3 transition duration-200 hover:-translate-y-1 hover:border-brand-600/40 hover:shadow-xl hover:shadow-brand-600/10">
      <Link to={`/product/${p.id}`} className="relative block overflow-hidden rounded-xl">
        <ProductImage p={p} className="h-44 transition duration-300 group-hover:scale-105" />
        <span className="absolute left-2 top-2 rounded-full bg-emerald-600 px-2 py-0.5 text-xs font-bold text-white">20% off</span>
        {p.stock < 15 && <span className="absolute right-2 top-2 rounded-full bg-white/95 px-2 py-0.5 text-xs font-semibold text-red-600">Only {p.stock} left</span>}
      </Link>
      <div className="flex flex-1 flex-col px-1 pb-1 pt-3">
        <span className="text-xs font-medium text-brand-600">{p.category}</span>
        <Link to={`/product/${p.id}`} className="font-display text-base font-semibold leading-snug hover:text-brand-600">{p.name}</Link>
        <Stars value={p.rating} n={p.reviews} />
        <div className="mt-auto flex items-end justify-between gap-2 pt-3">
          <div className="leading-tight"><span className="block text-xs text-stone-400 line-through">{money(mrp(p))}</span><span className="text-lg font-extrabold">{money(p.price)}</span></div>
          <button onClick={add} className={btn + ' !px-3 !py-1.5'}>{added ? 'Added ✓' : 'Add'}</button>
        </div>
      </div>
    </div>
  )
}

export function Navbar() {
  const { count, session, logout, dark, setSettings } = useStore()
  const nav = useNavigate()
  const [open, setOpen] = useState(false)
  const [q, setQ] = useState('')
  const link = ({ isActive }) => `rounded-md px-3 py-2 text-sm font-medium ${isActive ? 'bg-brand-50 text-brand-700' : 'text-stone-600 hover:text-stone-900'}`
  const go = () => setOpen(false)
  const search = (e) => { e.preventDefault(); nav(`/products?q=${encodeURIComponent(q)}`); setOpen(false) }
  return (
    <>
    <div className="bg-black px-4 py-1.5 text-center text-xs text-stone-200">Free delivery on orders above ₹999. Cash on delivery available across India.</div>
    <header className="sticky top-0 z-20 border-b border-stone-200 bg-white/90 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-extrabold text-stone-900"><span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-600 text-white">F</span>FavShop</Link>
        <nav className="ml-4 hidden items-center gap-1 md:flex">
          <NavLink to="/" end className={link}>Home</NavLink>
          <NavLink to="/products" className={link}>Shop</NavLink>
          {session?.role === 'admin' && <NavLink to="/admin" className={link}>Admin</NavLink>}
        </nav>
        <form onSubmit={search} className="ml-auto hidden flex-1 max-w-xs md:block">
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search products" className={inputCls(false) + ' !mt-0'} />
        </form>
        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <button onClick={() => setSettings({ theme: dark ? 'light' : 'dark' })} className={btnGhost + ' !px-3'} aria-label="Toggle light or dark mode">{dark ? '☀️' : '🌙'}</button>
          <Link to="/cart" className={btnGhost + ' relative'}>Cart{count > 0 && <span className="ml-2 rounded-full bg-brand-600 px-2 text-xs text-white">{count}</span>}</Link>
          <div className="hidden items-center gap-1 md:flex">
            {session ? (<>
              <NavLink to="/profile" className={link}>{session.name.split(' ')[0]}</NavLink>
              <NavLink to="/settings" className={link}>Settings</NavLink>
              <button onClick={() => { logout(); nav('/') }} className="px-2 text-sm text-stone-600 hover:text-stone-900">Log out</button>
            </>) : <NavLink to="/login" className={link}>Log in</NavLink>}
          </div>
          <button onClick={() => setOpen(!open)} className={btnGhost + ' md:hidden'} aria-label="Menu">{open ? '✕' : '☰'}</button>
        </div>
      </div>
      {open && (
        <div className="space-y-1 border-t border-stone-200 px-4 py-3 md:hidden">
          <form onSubmit={search}><input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search products" className={inputCls(false) + ' mb-2'} /></form>
          <NavLink onClick={go} to="/" end className={link}>Home</NavLink>
          <NavLink onClick={go} to="/products" className={link}>Shop</NavLink>
          {session && <NavLink onClick={go} to="/profile" className={link}>Profile</NavLink>}
          {session && <NavLink onClick={go} to="/orders" className={link}>Orders</NavLink>}
          {session && <NavLink onClick={go} to="/settings" className={link}>Settings</NavLink>}
          {session?.role === 'admin' && <NavLink onClick={go} to="/admin" className={link}>Admin</NavLink>}
          {session ? <button onClick={() => { logout(); go(); nav('/') }} className="px-3 py-2 text-sm text-stone-600">Log out</button> : <NavLink onClick={go} to="/login" className={link}>Log in</NavLink>}
        </div>
      )}
    </header>
    </>
  )
}

export function Footer() {
  const cats = ['Electronics', 'Fashion', 'Home', 'Sports']
  return (
    <footer className="mt-16 bg-black text-stone-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3">
        <div><p className="font-display text-xl font-extrabold text-white">FavShop</p><p className="mt-2 text-sm text-stone-400">Everyday essentials, delivered across India. All prices in Indian rupees (₹), inclusive of GST.</p></div>
        <div className="text-sm"><p className="mb-2 font-semibold text-white">Shop by category</p><ul className="space-y-1">{cats.map((c) => <li key={c}><Link className="text-stone-400 hover:text-white" to={`/products?cat=${c}`}>{c}</Link></li>)}</ul></div>
        <div className="text-sm"><p className="mb-2 font-semibold text-white">Your account</p><ul className="space-y-1 text-stone-400"><li><Link className="hover:text-white" to="/orders">Order history</Link></li><li><Link className="hover:text-white" to="/profile">Profile</Link></li><li><Link className="hover:text-white" to="/cart">Cart</Link></li></ul></div>
      </div>
      <p className="border-t border-stone-800 py-4 text-center text-xs text-stone-500">Demo store. Your data is saved in this browser only.</p>
    </footer>
  )
}

export function Protected({ children, admin }) {
  const { session } = useStore()
  const loc = useLocation()
  if (!session) return <Navigate to="/login" state={{ from: loc.pathname }} replace />
  if (admin && session.role !== 'admin') return <Navigate to="/" replace />
  return children
}

export const PageTitle = ({ children, sub }) => (
  <div className="mb-6"><h1 className="text-3xl font-bold">{children}</h1>{sub && <p className="mt-1 text-stone-500">{sub}</p>}</div>
)
export const Wrap = ({ children, className = '' }) => <main className={`mx-auto max-w-6xl px-4 py-8 ${className}`}>{children}</main>
