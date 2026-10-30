import { Link } from 'react-router-dom'
import { useStore } from '../store'
import { ProductImage, btn, btnGhost, Wrap, PageTitle } from '../components'
import { money } from '../data'

export function Summary() {
  const { subtotal, shipping, tax, total } = useStore()
  const row = (l, v, b) => <div className={`flex justify-between ${b ? 'border-t border-stone-200 pt-3 text-lg font-bold' : 'text-sm text-stone-600'}`}><span>{l}</span><span>{v}</span></div>
  return <div className="space-y-2">{row('Subtotal', money(subtotal))}{row('Shipping', shipping ? money(shipping) : 'Free')}{row('GST (18%)', money(tax))}{row('Total', money(total), true)}</div>
}

export default function Cart() {
  const { items, setQty, removeItem, clearCart } = useStore()
  if (!items.length) return (
    <Wrap className="text-center"><PageTitle>Your cart is empty</PageTitle><p className="mb-6 text-stone-500">Add something you like and it will show up here.</p><Link to="/products" className={btn}>Browse products</Link></Wrap>
  )
  return (
    <Wrap>
      <PageTitle>Shopping cart</PageTitle>
      <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
        <div className="space-y-3">
          {items.map((i) => (
            <div key={i.id} className="flex gap-4 rounded-2xl border border-stone-200 bg-white p-3">
              <Link to={`/product/${i.id}`} className="w-24 shrink-0"><ProductImage p={i} className="h-24" /></Link>
              <div className="flex flex-1 flex-col">
                <Link to={`/product/${i.id}`} className="font-display font-semibold hover:text-brand-600">{i.name}</Link>
                <span className="text-sm text-stone-500">{money(i.price)} each</span>
                <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-2">
                  <div className="flex items-center rounded-lg border border-stone-300">
                    <button onClick={() => setQty(i.id, i.qty - 1)} className="px-3 py-1" aria-label="Decrease">−</button>
                    <span className="w-8 text-center text-sm">{i.qty}</span>
                    <button onClick={() => setQty(i.id, i.qty + 1)} className="px-3 py-1" aria-label="Increase">+</button>
                  </div>
                  <span className="font-bold">{money(i.price * i.qty)}</span>
                  <button onClick={() => removeItem(i.id)} className="text-sm text-red-600 hover:underline">Remove</button>
                </div>
              </div>
            </div>
          ))}
          <button onClick={clearCart} className="text-sm text-stone-500 hover:underline">Clear cart</button>
        </div>
        <aside className="h-fit rounded-2xl border border-stone-200 bg-white p-5">
          <h2 className="mb-4 text-lg font-bold">Order summary</h2>
          <Summary />
          <Link to="/checkout" className={btn + ' mt-5 w-full'}>Go to checkout</Link>
          <Link to="/products" className={btnGhost + ' mt-2 w-full'}>Keep shopping</Link>
        </aside>
      </div>
    </Wrap>
  )
}
