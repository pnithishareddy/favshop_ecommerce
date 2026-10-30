// import { useState } from 'react'
// import { Link, useParams } from 'react-router-dom'
// import { useStore } from '../store'
// import { ProductImage, ProductCard, Stars, btn, btnGhost, Wrap } from '../components'
// import { money, mrp } from '../data'

// export default function ProductDetail() {
//   const { id } = useParams()
//   const { products, addToCart } = useStore()
//   const p = products.find((x) => x.id === +id)
//   const [view, setView] = useState(0)
//   const [qty, setQty] = useState(1)
//   const [added, setAdded] = useState(false)
//   if (!p) return <Wrap><p>Product not found. <Link className="text-brand-600 underline" to="/products">Back to shop</Link></p></Wrap>
//   const related = products.filter((x) => x.category === p.category && x.id !== p.id).slice(0, 4)
//   const add = () => { addToCart(p.id, qty); setAdded(true); setTimeout(() => setAdded(false), 1500) }
//   return (
//     <Wrap>
//       <Link to="/products" className="text-sm text-stone-500 hover:text-stone-900">‹ Back to shop</Link>
//       <div className="mt-4 grid gap-8 md:grid-cols-2">
//         <div>
//           <ProductImage p={p} view={view} className="h-80 sm:h-96" />
//           <div className="mt-3 flex gap-3">
//             {[0, 1, 2].map((v) => (
//               <button key={v} onClick={() => setView(v)} className={`w-24 rounded-xl border-2 ${view === v ? 'border-brand-600' : 'border-transparent'}`}><ProductImage p={p} view={v} className="h-20" /></button>
//             ))}
//           </div>
//         </div>
//         <div>
//           <span className="text-sm text-stone-500">{p.category}</span>
//           <h1 className="text-3xl font-bold">{p.name}</h1>
//           <div className="mt-2 flex items-center gap-2"><Stars value={p.rating} /><span className="text-sm text-stone-500">{p.rating} · {p.reviews} reviews</span></div>
//           <div className="mt-4 flex flex-wrap items-baseline gap-3"><span className="text-4xl font-extrabold text-brand-700">{money(p.price)}</span><span className="text-lg text-stone-400 line-through">{money(mrp(p))}</span><span className="rounded-full bg-emerald-600 px-2.5 py-0.5 text-xs font-bold text-white">20% off</span></div><p className="text-xs text-stone-500">Inclusive of GST. Free delivery above ₹999.</p>
//           <p className="mt-4 text-stone-600">{p.desc}</p>
//           <p className={`mt-3 text-sm font-medium ${p.stock > 0 ? 'text-emerald-700' : 'text-red-600'}`}>{p.stock > 0 ? `In stock (${p.stock} available)` : 'Out of stock'}</p>
//           <div className="mt-6 flex flex-wrap items-center gap-3">
//             <div className="flex items-center rounded-lg border border-stone-300 bg-white">
//               <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-3 py-2" aria-label="Decrease">−</button>
//               <span className="w-10 text-center font-medium">{qty}</span>
//               <button onClick={() => setQty(Math.min(p.stock || 1, qty + 1))} className="px-3 py-2" aria-label="Increase">+</button>
//             </div>
//             <button onClick={add} disabled={p.stock < 1} className={btn}>{added ? 'Added to cart' : 'Add to cart'}</button>
//             <Link to="/cart" className={btnGhost}>View cart</Link>
//           </div>
//         </div>
//       </div>
//       {related.length > 0 && (
//         <section className="mt-14">
//           <h2 className="mb-4 text-xl font-bold">More in {p.category}</h2>
//           <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">{related.map((r) => <ProductCard key={r.id} p={r} />)}</div>
//         </section>
//       )}
//     </Wrap>
//   )
// }
























import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useStore } from '../store'
import { ProductImage, ProductCard, Stars, btn, btnGhost, Wrap } from '../components'
import { money, mrp } from '../data'

export default function ProductDetail() {
  const { id } = useParams()
  const { products, addToCart } = useStore()
  const p = products.find((x) => x.id === +id)
  const [view, setView] = useState(0)
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)
  if (!p) return <Wrap><p>Product not found. <Link className="text-brand-600 underline" to="/products">Back to shop</Link></p></Wrap>
  const related = products.filter((x) => x.category === p.category && x.id !== p.id).slice(0, 4)
  const add = () => { addToCart(p.id, qty); setAdded(true); setTimeout(() => setAdded(false), 1500) }
  return (
    <Wrap>
      <Link to="/products" className="text-sm text-stone-500 hover:text-stone-900">‹ Back to shop</Link>
      <div className="mt-4 grid gap-8 md:grid-cols-2">
        <div>
          <ProductImage p={p} view={view} className="h-80 sm:h-96" />
          <div className="mt-3 flex gap-3 overflow-x-auto">
            {Array.from({ length: Math.min(4, p.images?.length || 3) }, (_, v) => v).map((v) => (
              <button key={v} onClick={() => setView(v)} className={`w-24 rounded-xl border-2 ${view === v ? 'border-brand-600' : 'border-transparent'}`}><ProductImage p={p} view={v} className="h-20" /></button>
            ))}
          </div>
        </div>
        <div>
          <span className="text-sm text-stone-500">{p.category}</span>
          <h1 className="text-3xl font-bold">{p.name}</h1>
          <div className="mt-2 flex items-center gap-2"><Stars value={p.rating} /><span className="text-sm text-stone-500">{p.rating} · {p.reviews} reviews</span></div>
          <div className="mt-4 flex flex-wrap items-baseline gap-3"><span className="text-4xl font-extrabold text-brand-700">{money(p.price)}</span><span className="text-lg text-stone-400 line-through">{money(mrp(p))}</span><span className="rounded-full bg-emerald-600 px-2.5 py-0.5 text-xs font-bold text-white">20% off</span></div><p className="text-xs text-stone-500">Inclusive of GST. Free delivery above ₹999.</p>
          <p className="mt-4 text-stone-600">{p.desc}</p>
          <p className={`mt-3 text-sm font-medium ${p.stock > 0 ? 'text-emerald-700' : 'text-red-600'}`}>{p.stock > 0 ? `In stock (${p.stock} available)` : 'Out of stock'}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="flex items-center rounded-lg border border-stone-300 bg-white">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-3 py-2" aria-label="Decrease">−</button>
              <span className="w-10 text-center font-medium">{qty}</span>
              <button onClick={() => setQty(Math.min(p.stock || 1, qty + 1))} className="px-3 py-2" aria-label="Increase">+</button>
            </div>
            <button onClick={add} disabled={p.stock < 1} className={btn}>{added ? 'Added to cart' : 'Add to cart'}</button>
            <Link to="/cart" className={btnGhost}>View cart</Link>
          </div>
        </div>
      </div>
      {related.length > 0 && (
        <section className="mt-14">
          <h2 className="mb-4 text-xl font-bold">More in {p.category}</h2>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">{related.map((r) => <ProductCard key={r.id} p={r} />)}</div>
        </section>
      )}
    </Wrap>
  )
}