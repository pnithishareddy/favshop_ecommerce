import { createContext, useContext, useEffect, useState } from 'react'
import { SEED } from './data'

const Ctx = createContext()
export const useStore = () => useContext(Ctx)

function useLS(key, init) {
  const [v, setV] = useState(() => {
    try { const s = localStorage.getItem(key); return s ? JSON.parse(s) : init } catch { return init }
  })
  useEffect(() => { try { localStorage.setItem(key, JSON.stringify(v)) } catch {} }, [key, v])
  return [v, setV]
}

const ADMIN = { id: 1, name: 'Store Admin', email: 'admin@shop.com', password: 'admin123', role: 'admin', phone: '' }
const DEMO = { id: 2, name: 'Nithisha', email: 'nithisha@favshop.com', password: 'demo123', role: 'user', phone: '9876543210', address: '12 MG Road', city: 'Bengaluru', zip: '560001' }
const safe = ({ password, ...u }) => u

export function StoreProvider({ children }) {
  const [products, setProducts] = useLS('fav_products', SEED)
  const [cart, setCart] = useLS('fav_cart', [])
  const [users, setUsers] = useLS('fav_users', [ADMIN, DEMO])
  const [session, setSession] = useLS('fav_session', null)
  const [orders, setOrders] = useLS('fav_orders', [])

  const [settings, setSettingsRaw] = useLS('fav_settings', { theme: 'light', orders: true, offers: false })
  const [payments, setPayments] = useLS('fav_payments', [])
  const [sysDark, setSysDark] = useState(() => { try { return window.matchMedia('(prefers-color-scheme: dark)').matches } catch { return false } })
  useEffect(() => {
    try { const m = window.matchMedia('(prefers-color-scheme: dark)'); const h = (e) => setSysDark(e.matches); m.addEventListener('change', h); return () => m.removeEventListener('change', h) } catch {}
  }, [])
  const dark = settings.theme === 'dark' || (settings.theme === 'system' && sysDark)
  useEffect(() => { document.documentElement.classList.toggle('dark', dark) }, [dark])
  const setSettings = (patch) => setSettingsRaw((s) => ({ ...s, ...patch }))
  const myPayments = session ? payments.filter((p) => p.userId === session.id) : []
  const addPayment = (p) => setPayments((l) => [...l, { ...p, id: Date.now(), userId: session.id, isDefault: !l.some((x) => x.userId === session.id) }])
  const removePayment = (id) => setPayments((l) => {
    const gone = l.find((x) => x.id === id); const rest = l.filter((x) => x.id !== id)
    const first = gone?.isDefault && rest.find((x) => x.userId === gone.userId)
    return first ? rest.map((x) => (x.id === first.id ? { ...x, isDefault: true } : x)) : rest
  })
  const setDefaultPayment = (id) => setPayments((l) => l.map((x) => (x.userId === session.id ? { ...x, isDefault: x.id === id } : x)))
  const changePassword = (cur, next) => {
    const u = users.find((x) => x.id === session.id)
    if (!u || u.password !== cur) return 'Current password is incorrect.'
    setUsers((us) => us.map((x) => (x.id === u.id ? { ...x, password: next } : x))); return null
  }

  const items = cart.map((c) => ({ ...products.find((p) => p.id === c.id), qty: c.qty })).filter((i) => i.name)
  const count = items.reduce((s, i) => s + i.qty, 0)
  const subtotal = items.reduce((s, i) => s + i.qty * i.price, 0)
  const shipping = subtotal === 0 || subtotal >= 999 ? 0 : 99
  const tax = Math.round(subtotal * 0.18)
  const total = subtotal + shipping + tax

  const addToCart = (id, q = 1) => setCart((c) => {
    const e = c.find((x) => x.id === id)
    return e ? c.map((x) => (x.id === id ? { ...x, qty: Math.min(99, x.qty + q) } : x)) : [...c, { id, qty: q }]
  })
  const setQty = (id, q) => setCart((c) => c.map((x) => (x.id === id ? { ...x, qty: Math.max(1, Math.min(99, q)) } : x)))
  const removeItem = (id) => setCart((c) => c.filter((x) => x.id !== id))
  const clearCart = () => setCart([])

  const register = (name, email, password) => {
    if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) return 'An account with this email already exists.'
    const u = { id: Date.now(), name, email, password, role: 'user', phone: '' }
    setUsers((x) => [...x, u]); setSession(safe(u)); return null
  }
  const login = (email, password) => {
    const u = users.find((x) => x.email.toLowerCase() === email.toLowerCase() && x.password === password)
    if (!u) return 'Email or password is incorrect.'
    setSession(safe(u)); return null
  }
  const logout = () => setSession(null)
  const demoLogin = (admin) => {
    const d = admin ? ADMIN : DEMO
    const u = users.find((x) => x.id === d.id) || d
    if (!users.some((x) => x.id === d.id)) setUsers((us) => [...us, d])
    setSession(safe(u))
  }
  const updateProfile = (patch) => {
    setUsers((us) => us.map((u) => (u.id === session.id ? { ...u, ...patch } : u)))
    setSession((s) => ({ ...s, ...patch }))
  }

  const placeOrder = (info) => {
    const order = {
      id: 'ORD-' + Date.now().toString().slice(-6), userId: session.id, date: new Date().toISOString(),
      items: items.map(({ id, name, price, qty, emoji, c1, c2 }) => ({ id, name, price, qty, emoji, c1, c2 })),
      subtotal, shipping, tax, total, info, status: 'Processing',
    }
    setOrders((o) => [order, ...o]); clearCart(); return order
  }

  const saveProduct = (p) => setProducts((list) => (list.some((x) => x.id === p.id) ? list.map((x) => (x.id === p.id ? p : x)) : [...list, p]))
  const deleteProduct = (id) => { setProducts((l) => l.filter((x) => x.id !== id)); removeItem(id) }
  const resetProducts = () => setProducts(SEED)

  return (
    <Ctx.Provider value={{ products, items, count, subtotal, shipping, tax, total, addToCart, setQty, removeItem, clearCart,
      session, register, login, demoLogin, logout, updateProfile, settings, setSettings, dark, myPayments, addPayment, removePayment, setDefaultPayment, changePassword, orders, placeOrder, saveProduct, deleteProduct, resetProducts }}>
      {children}
    </Ctx.Provider>
  )
}
