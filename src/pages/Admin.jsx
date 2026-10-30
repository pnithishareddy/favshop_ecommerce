// import { useState } from 'react'
// import { useStore } from '../store'
// import { Field, btn, btnGhost, Wrap, PageTitle, ProductImage } from '../components'
// import { CATEGORIES, CAT_COLORS, money } from '../data'

// const EMPTY = { name: '', category: 'Electronics', price: '', stock: '', rating: '4', emoji: '📦', desc: '', featured: false }

// export default function Admin() {
//   const { products, saveProduct, deleteProduct, resetProducts } = useStore()
//   const [f, setF] = useState(null)
//   const [err, setErr] = useState({})
//   const on = (k) => (e) => setF({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value })
//   const open = (p) => { setErr({}); setF(p ? { ...p } : { ...EMPTY }) }

//   const submit = (e) => {
//     e.preventDefault()
//     const v = {}
//     if (f.name.trim().length < 2) v.name = 'Enter a product name.'
//     if (f.price === '' || +f.price <= 0) v.price = 'Price must be greater than 0.'
//     if (f.stock === '' || +f.stock < 0 || !Number.isInteger(+f.stock)) v.stock = 'Stock must be a whole number, 0 or more.'
//     if (+f.rating < 0 || +f.rating > 5) v.rating = 'Rating must be between 0 and 5.'
//     if (f.desc.trim().length < 10) v.desc = 'Write a description of at least 10 characters.'
//     setErr(v)
//     if (Object.keys(v).length) return
//     const [c1, c2] = f.c1 ? [f.c1, f.c2] : CAT_COLORS[f.category]
//     saveProduct({ reviews: 0, ...f, id: f.id || Math.max(0, ...products.map((p) => p.id)) + 1, name: f.name.trim(), price: +f.price, stock: +f.stock, rating: +f.rating, c1, c2, emoji: f.emoji || '📦' })
//     setF(null)
//   }
//   const del = (p) => { if (window.confirm(`Delete “${p.name}”?`)) deleteProduct(p.id) }

//   return (
//     <Wrap>
//       <PageTitle sub="Add, edit or delete products. Changes are saved in this browser.">Product management</PageTitle>
//       <div className="mb-4 flex gap-2">
//         <button onClick={() => open()} className={btn}>Add product</button>
//         <button onClick={() => window.confirm('Restore the original sample products?') && resetProducts()} className={btnGhost}>Reset sample data</button>
//       </div>

//       {f && (
//         <form onSubmit={submit} noValidate className="mb-6 space-y-4 rounded-2xl border border-brand-600 bg-white p-5">
//           <h2 className="text-lg font-bold">{f.id ? 'Edit product' : 'New product'}</h2>
//           <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//             <Field label="Name" value={f.name} onChange={on('name')} error={err.name} />
//             <Field as="select" label="Category" value={f.category} onChange={on('category')}>{CATEGORIES.map((c) => <option key={c}>{c}</option>)}</Field>
//             <Field label="Emoji icon" value={f.emoji} onChange={on('emoji')} maxLength={4} />
//             <Field label="Price (₹)" type="number" step="1" value={f.price} onChange={on('price')} error={err.price} />
//             <Field label="Stock" type="number" value={f.stock} onChange={on('stock')} error={err.stock} />
//             <Field label="Rating (0–5)" type="number" step="0.1" value={f.rating} onChange={on('rating')} error={err.rating} />
//           </div>
//           <Field as="textarea" rows={3} label="Description" value={f.desc} onChange={on('desc')} error={err.desc} />
//           <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={f.featured} onChange={on('featured')} /> Show on home page as featured</label>
//           <div className="flex gap-2"><button className={btn}>Save product</button><button type="button" onClick={() => setF(null)} className={btnGhost}>Cancel</button></div>
//         </form>
//       )}

//       <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white">
//         <table className="w-full min-w-[640px] text-left text-sm">
//           <thead className="border-b border-stone-200 bg-stone-100 text-stone-600"><tr><th className="p-3">Product</th><th className="p-3">Category</th><th className="p-3">Price</th><th className="p-3">Stock</th><th className="p-3 text-right">Actions</th></tr></thead>
//           <tbody className="divide-y divide-stone-100">
//             {products.map((p) => (
//               <tr key={p.id}>
//                 <td className="p-3"><div className="flex items-center gap-3"><ProductImage p={p} className="h-10 w-10" /><span className="font-medium">{p.name}{p.featured && <span className="ml-2 rounded bg-brand-50 px-1.5 py-0.5 text-xs text-brand-700">Featured</span>}</span></div></td>
//                 <td className="p-3">{p.category}</td><td className="p-3">{money(p.price)}</td><td className="p-3">{p.stock}</td>
//                 <td className="p-3 text-right"><button onClick={() => open(p)} className="mr-3 font-medium text-brand-600 hover:underline">Edit</button><button onClick={() => del(p)} className="font-medium text-red-600 hover:underline">Delete</button></td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </Wrap>
//   )
// }




















import { useState } from 'react'
import { useStore } from '../store'
import { Field, btn, btnGhost, Wrap, PageTitle, ProductImage } from '../components'
import { CATEGORIES, CAT_COLORS, money } from '../data'

const EMPTY = { name: '', category: 'Electronics', price: '', stock: '', rating: '4', emoji: '📦', desc: '', featured: false, image: '' }

export default function Admin() {
  const { products, saveProduct, deleteProduct, resetProducts } = useStore()
  const [f, setF] = useState(null)
  const [err, setErr] = useState({})
  const on = (k) => (e) => setF({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value })
  const open = (p) => { setErr({}); setF(p ? { ...p, image: p.images?.[0] || '' } : { ...EMPTY }) }

  const submit = (e) => {
    e.preventDefault()
    const v = {}
    if (f.name.trim().length < 2) v.name = 'Enter a product name.'
    if (f.price === '' || +f.price <= 0) v.price = 'Price must be greater than 0.'
    if (f.stock === '' || +f.stock < 0 || !Number.isInteger(+f.stock)) v.stock = 'Stock must be a whole number, 0 or more.'
    if (+f.rating < 0 || +f.rating > 5) v.rating = 'Rating must be between 0 and 5.'
    if (f.desc.trim().length < 10) v.desc = 'Write a description of at least 10 characters.'
    if (f.image.trim() && !/^(https?:\/\/|\/).+/.test(f.image.trim())) v.image = 'Enter a full image URL (https://...) or a /path from the public folder.'
    setErr(v)
    if (Object.keys(v).length) return
    const [c1, c2] = f.c1 ? [f.c1, f.c2] : CAT_COLORS[f.category]
    saveProduct({ reviews: 0, ...f, images: f.image.trim() ? [f.image.trim(), ...(f.images || []).slice(1)] : [], id: f.id || Math.max(0, ...products.map((p) => p.id)) + 1, name: f.name.trim(), price: +f.price, stock: +f.stock, rating: +f.rating, c1, c2, emoji: f.emoji || '📦' })
    setF(null)
  }
  const del = (p) => { if (window.confirm(`Delete “${p.name}”?`)) deleteProduct(p.id) }

  return (
    <Wrap>
      <PageTitle sub="Add, edit or delete products. Changes are saved in this browser.">Product management</PageTitle>
      <div className="mb-4 flex flex-wrap gap-2">
        <button onClick={() => open()} className={btn}>Add product</button>
        <button onClick={() => window.confirm('Restore the original sample products?') && resetProducts()} className={btnGhost}>Reset sample data</button>
      </div>

      {f && (
        <form onSubmit={submit} noValidate className="mb-6 space-y-4 rounded-2xl border border-brand-600 bg-white p-5">
          <h2 className="text-lg font-bold">{f.id ? 'Edit product' : 'New product'}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Field label="Name" value={f.name} onChange={on('name')} error={err.name} />
            <Field as="select" label="Category" value={f.category} onChange={on('category')}>{CATEGORIES.map((c) => <option key={c}>{c}</option>)}</Field>
            <Field label="Emoji icon" value={f.emoji} onChange={on('emoji')} maxLength={4} />
            <Field label="Price (₹)" type="number" step="1" value={f.price} onChange={on('price')} error={err.price} />
            <Field label="Stock" type="number" value={f.stock} onChange={on('stock')} error={err.stock} />
            <Field label="Rating (0–5)" type="number" step="0.1" value={f.rating} onChange={on('rating')} error={err.rating} />
          </div>
          <Field label="Image URL (optional)" value={f.image} onChange={on('image')} error={err.image} placeholder="https://... or /images/photo.jpg" />
          <Field as="textarea" rows={3} label="Description" value={f.desc} onChange={on('desc')} error={err.desc} />
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={f.featured} onChange={on('featured')} /> Show on home page as featured</label>
          <div className="flex gap-2"><button className={btn}>Save product</button><button type="button" onClick={() => setF(null)} className={btnGhost}>Cancel</button></div>
        </form>
      )}

      <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="border-b border-stone-200 bg-stone-100 text-stone-600"><tr><th className="p-3">Product</th><th className="p-3">Category</th><th className="p-3">Price</th><th className="p-3">Stock</th><th className="p-3 text-right">Actions</th></tr></thead>
          <tbody className="divide-y divide-stone-100">
            {products.map((p) => (
              <tr key={p.id}>
                <td className="p-3"><div className="flex items-center gap-3"><ProductImage p={p} className="h-10 w-10" /><span className="font-medium">{p.name}{p.featured && <span className="ml-2 rounded bg-brand-50 px-1.5 py-0.5 text-xs text-brand-700">Featured</span>}</span></div></td>
                <td className="p-3">{p.category}</td><td className="p-3">{money(p.price)}</td><td className="p-3">{p.stock}</td>
                <td className="p-3 text-right"><button onClick={() => open(p)} className="mr-3 font-medium text-brand-600 hover:underline">Edit</button><button onClick={() => del(p)} className="font-medium text-red-600 hover:underline">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Wrap>
  )
}