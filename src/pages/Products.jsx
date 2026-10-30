// import { useMemo, useState } from 'react'
// import { useSearchParams } from 'react-router-dom'
// import { useStore } from '../store'
// import { ProductCard, Field, Wrap, PageTitle, btnGhost } from '../components'
// import { CATEGORIES } from '../data'

// const SORTS = {
//   'price-asc': (a, b) => a.price - b.price,
//   'price-desc': (a, b) => b.price - a.price,
//   rating: (a, b) => b.rating - a.rating,
//   name: (a, b) => a.name.localeCompare(b.name),
// }

// export default function Products() {
//   const { products } = useStore()
//   const [sp, setSp] = useSearchParams()
//   const q = sp.get('q') || ''
//   const cat = sp.get('cat') || 'All'
//   const [min, setMin] = useState('')
//   const [max, setMax] = useState('')
//   const [sort, setSort] = useState('featured')
//   const set = (k, v) => { const n = new URLSearchParams(sp); v && v !== 'All' ? n.set(k, v) : n.delete(k); setSp(n) }

//   const list = useMemo(() => {
//     const t = q.toLowerCase().trim()
//     const l = products.filter((p) =>
//       (cat === 'All' || p.category === cat) &&
//       (!t || p.name.toLowerCase().includes(t) || p.desc.toLowerCase().includes(t)) &&
//       (min === '' || p.price >= +min) && (max === '' || p.price <= +max))
//     return SORTS[sort] ? [...l].sort(SORTS[sort]) : l
//   }, [products, q, cat, min, max, sort])

//   const reset = () => { setSp({}); setMin(''); setMax(''); setSort('featured') }
//   return (
//     <Wrap>
//       <PageTitle sub={`${list.length} product${list.length === 1 ? '' : 's'} found`}>Shop</PageTitle>
//       <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
//         <aside className="h-fit space-y-4 rounded-2xl border border-stone-200 bg-white p-4">
//           <Field label="Search" value={q} onChange={(e) => set('q', e.target.value)} placeholder="Product name" />
//           <Field as="select" label="Category" value={cat} onChange={(e) => set('cat', e.target.value)}>
//             <option>All</option>{CATEGORIES.map((c) => <option key={c}>{c}</option>)}
//           </Field>
//           <div className="grid grid-cols-2 gap-2">
//             <Field label="Min price (₹)" type="number" min="0" value={min} onChange={(e) => setMin(e.target.value)} placeholder="0" />
//             <Field label="Max price (₹)" type="number" min="0" value={max} onChange={(e) => setMax(e.target.value)} placeholder="5000" />
//           </div>
//           <Field as="select" label="Sort by" value={sort} onChange={(e) => setSort(e.target.value)}>
//             <option value="featured">Featured</option><option value="price-asc">Price: low to high</option>
//             <option value="price-desc">Price: high to low</option><option value="rating">Top rated</option><option value="name">Name A–Z</option>
//           </Field>
//           <button onClick={reset} className={btnGhost + ' w-full'}>Clear filters</button>
//         </aside>
//         {list.length ? (
//           <div className="grid grid-cols-2 gap-4 xl:grid-cols-3">{list.map((p) => <ProductCard key={p.id} p={p} />)}</div>
//         ) : (
//           <div className="rounded-2xl border border-dashed border-stone-300 p-12 text-center text-stone-500">No products match these filters. Try widening the price range or clearing the search.</div>
//         )}
//       </div>
//     </Wrap>
//   )
// }














// import { useMemo, useState } from 'react'
// import { useSearchParams } from 'react-router-dom'
// import { useStore } from '../store'
// import { ProductCard, Field, Wrap, PageTitle, btnGhost } from '../components'
// import { CATEGORIES } from '../data'

// const SORTS = {
//   'price-asc': (a, b) => a.price - b.price,
//   'price-desc': (a, b) => b.price - a.price,
//   rating: (a, b) => b.rating - a.rating,
//   name: (a, b) => a.name.localeCompare(b.name),
// }

// export default function Products() {
//   const { products } = useStore()
//   const [sp, setSp] = useSearchParams()
//   const q = sp.get('q') || ''
//   const cat = sp.get('cat') || 'All'
//   const [min, setMin] = useState('')
//   const [max, setMax] = useState('')
//   const [sort, setSort] = useState('featured')
//   const set = (k, v) => { const n = new URLSearchParams(sp); v && v !== 'All' ? n.set(k, v) : n.delete(k); setSp(n) }

//   const list = useMemo(() => {
//     const t = q.toLowerCase().trim()
//     const l = products.filter((p) =>
//       (cat === 'All' || p.category === cat) &&
//       (!t || p.name.toLowerCase().includes(t) || p.desc.toLowerCase().includes(t)) &&
//       (min === '' || p.price >= +min) && (max === '' || p.price <= +max))
//     return SORTS[sort] ? [...l].sort(SORTS[sort]) : l
//   }, [products, q, cat, min, max, sort])

//   const reset = () => { setSp({}); setMin(''); setMax(''); setSort('featured') }
//   return (
//     <Wrap>
//       <PageTitle sub={`${list.length} product${list.length === 1 ? '' : 's'} found`}>Shop</PageTitle>
//       <div className="-mx-4 mb-6 flex gap-2 overflow-x-auto px-4 pb-1" role="tablist" aria-label="Categories">
//         {['All', ...CATEGORIES].map((c) => (
//           <button key={c} role="tab" aria-selected={cat === c} onClick={() => set('cat', c)}
//             className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition ${cat === c ? 'border-brand-600 bg-brand-600 text-white shadow-md shadow-brand-600/25' : 'border-stone-300 bg-white text-stone-700 hover:border-brand-600 hover:text-brand-700'}`}>
//             {c} <span className={cat === c ? 'text-white/80' : 'text-stone-400'}>({c === 'All' ? products.length : products.filter((p) => p.category === c).length})</span>
//           </button>
//         ))}
//       </div>
//       <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
//         <aside className="h-fit space-y-4 rounded-2xl border border-stone-200 bg-white p-4">
//           <Field label="Search" value={q} onChange={(e) => set('q', e.target.value)} placeholder="Product name" />
//           <Field as="select" label="Category" value={cat} onChange={(e) => set('cat', e.target.value)}>
//             <option>All</option>{CATEGORIES.map((c) => <option key={c}>{c}</option>)}
//           </Field>
//           <div className="grid grid-cols-2 gap-2">
//             <Field label="Min price (₹)" type="number" min="0" value={min} onChange={(e) => setMin(e.target.value)} placeholder="0" />
//             <Field label="Max price (₹)" type="number" min="0" value={max} onChange={(e) => setMax(e.target.value)} placeholder="5000" />
//           </div>
//           <Field as="select" label="Sort by" value={sort} onChange={(e) => setSort(e.target.value)}>
//             <option value="featured">Featured</option><option value="price-asc">Price: low to high</option>
//             <option value="price-desc">Price: high to low</option><option value="rating">Top rated</option><option value="name">Name A–Z</option>
//           </Field>
//           <button onClick={reset} className={btnGhost + ' w-full'}>Clear filters</button>
//         </aside>
//         {list.length ? (
//           <div className="grid grid-cols-2 gap-4 xl:grid-cols-3">{list.map((p) => <ProductCard key={p.id} p={p} />)}</div>
//         ) : (
//           <div className="rounded-2xl border border-dashed border-stone-300 p-12 text-center text-stone-500">No products match these filters. Try widening the price range or clearing the search.</div>
//         )}
//       </div>
//     </Wrap>
//   )
// }


















import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useStore } from '../store'
import { ProductCard, Field, Wrap, PageTitle, btnGhost } from '../components'
import { CATEGORIES } from '../data'

const SORTS = {
  'price-asc': (a, b) => a.price - b.price,
  'price-desc': (a, b) => b.price - a.price,
  rating: (a, b) => b.rating - a.rating,
  name: (a, b) => a.name.localeCompare(b.name),
}

export default function Products() {
  const { products } = useStore()
  const [sp, setSp] = useSearchParams()
  const q = sp.get('q') || ''
  const cat = sp.get('cat') || 'All'
  const [min, setMin] = useState('')
  const [max, setMax] = useState('')
  const [sort, setSort] = useState('featured')
  const [open, setOpen] = useState(false)
  const set = (k, v) => { const n = new URLSearchParams(sp); v && v !== 'All' ? n.set(k, v) : n.delete(k); setSp(n) }

  const list = useMemo(() => {
    const t = q.toLowerCase().trim()
    const l = products.filter((p) =>
      (cat === 'All' || p.category === cat) &&
      (!t || p.name.toLowerCase().includes(t) || p.desc.toLowerCase().includes(t)) &&
      (min === '' || p.price >= +min) && (max === '' || p.price <= +max))
    return SORTS[sort] ? [...l].sort(SORTS[sort]) : l
  }, [products, q, cat, min, max, sort])

  const reset = () => { setSp({}); setMin(''); setMax(''); setSort('featured') }
  return (
    <Wrap>
      <PageTitle sub={`${list.length} product${list.length === 1 ? '' : 's'} found`}>Shop</PageTitle>
      <div className="-mx-4 mb-6 flex gap-2 overflow-x-auto px-4 pb-1" role="tablist" aria-label="Categories">
        {['All', ...CATEGORIES].map((c) => (
          <button key={c} role="tab" aria-selected={cat === c} onClick={() => set('cat', c)}
            className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition ${cat === c ? 'border-brand-600 bg-brand-600 text-white shadow-md shadow-brand-600/25' : 'border-stone-300 bg-white text-stone-700 hover:border-brand-600 hover:text-brand-700'}`}>
            {c} <span className={cat === c ? 'text-white/80' : 'text-stone-400'}>({c === 'All' ? products.length : products.filter((p) => p.category === c).length})</span>
          </button>
        ))}
      </div>
      <button onClick={() => setOpen(!open)} className={btnGhost + ' mb-4 w-full lg:hidden'}>{open ? 'Hide filters' : 'Show filters and sort'}</button>
      <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
        <aside className={`h-fit space-y-4 rounded-2xl border border-stone-200 bg-white p-4 lg:block ${open ? '' : 'hidden'}`}>
          <Field label="Search" value={q} onChange={(e) => set('q', e.target.value)} placeholder="Product name" />
          <Field as="select" label="Category" value={cat} onChange={(e) => set('cat', e.target.value)}>
            <option>All</option>{CATEGORIES.map((c) => <option key={c}>{c}</option>)}
          </Field>
          <div className="grid grid-cols-2 gap-2">
            <Field label="Min price (₹)" type="number" min="0" value={min} onChange={(e) => setMin(e.target.value)} placeholder="0" />
            <Field label="Max price (₹)" type="number" min="0" value={max} onChange={(e) => setMax(e.target.value)} placeholder="5000" />
          </div>
          <Field as="select" label="Sort by" value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="featured">Featured</option><option value="price-asc">Price: low to high</option>
            <option value="price-desc">Price: high to low</option><option value="rating">Top rated</option><option value="name">Name A–Z</option>
          </Field>
          <button onClick={reset} className={btnGhost + ' w-full'}>Clear filters</button>
        </aside>
        {list.length ? (
          <div className="grid grid-cols-2 gap-4 xl:grid-cols-3">{list.map((p) => <ProductCard key={p.id} p={p} />)}</div>
        ) : (
          <div className="rounded-2xl border border-dashed border-stone-300 p-12 text-center text-stone-500">No products match these filters. Try widening the price range or clearing the search.</div>
        )}
      </div>
    </Wrap>
  )
}