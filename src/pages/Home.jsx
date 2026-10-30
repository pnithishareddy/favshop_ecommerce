// import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { useStore } from '../store'
// import { ProductCard, btn, Wrap } from '../components'
// import { CATEGORIES, CAT_COLORS } from '../data'
// a
// const BANNERS = [
//   { t: 'Festive sale: up to 30% off tech', s: 'Headphones, smart watches and keyboards at their lowest prices this season.', cta: 'Shop electronics', to: '/products?cat=Electronics', bg: 'from-orange-500 via-orange-800 to-black', icon: '🎧' },
//   { t: 'Free delivery on orders over ₹999', s: 'Fill your cart and shipping is on us, with cash on delivery across India.', cta: 'Start shopping', to: '/products', bg: 'from-neutral-700 via-neutral-900 to-black', icon: '🚚' },
//   { t: 'Move more with new sports gear', s: 'Yoga mats, bottles and more to keep you going, from ₹699.', cta: 'Shop sports', to: '/products?cat=Sports', bg: 'from-amber-500 via-orange-700 to-black', icon: '🧘' },
// ]
// const CAT_EMOJI = { Electronics: '🎧', Fashion: '👗', Home: '🏠', Sports: '🏃' }
// const TRUST = [['🚚', 'Free delivery', 'On orders above ₹999'], ['↩️', 'Easy returns', '7-day return window'], ['🔒', 'Secure payments', 'UPI, cards and COD'], ['⭐', 'Top rated', 'Loved by 5,000+ buyers']]

// export default function Home() {
//   const { products } = useStore()
//   const [i, setI] = useState(0)
//   useEffect(() => { const id = setInterval(() => setI((x) => (x + 1) % BANNERS.length), 5000); return () => clearInterval(id) }, [])
//   const b = BANNERS[i]
//   const featured = products.filter((p) => p.featured).slice(0, 8)
//   return (
//     <Wrap>
//       <section className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${b.bg} p-8 text-white shadow-xl sm:p-14 md:pr-60`}>
//         <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-2xl" />
//         <div className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
//         <div className="relative z-10 max-w-xl">
//           <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">{b.t}</h1>
//           <p className="mt-3 text-white/80">{b.s}</p>
//           <Link to={b.to} className={btn + ' mt-6 !bg-none !bg-white !text-stone-900 !shadow-black/20'}>{b.cta}</Link>
//           <div className="mt-8 flex gap-2">
//             {BANNERS.map((_, n) => <button key={n} onClick={() => setI(n)} aria-label={`Banner ${n + 1}`} className={`h-2 rounded-full transition-all ${n === i ? 'w-8 bg-white' : 'w-2 bg-white/50'}`} />)}
//           </div>
//         </div>
//         <div className="pointer-events-none absolute right-10 top-1/2 z-0 hidden -translate-y-1/2 select-none text-[8rem] leading-none lg:text-[10rem] drop-shadow-2xl md:block">{b.icon}</div>
//       </section>

//       <section className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
//         {TRUST.map(([e, t, s]) => (
//           <div key={t} className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-white p-3">
//             <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-xl">{e}</span>
//             <div className="leading-tight"><p className="text-sm font-semibold">{t}</p><p className="text-xs text-stone-500">{s}</p></div>
//           </div>
//         ))}
//       </section>

//       <section className="mt-10">
//         <h2 className="mb-4 text-2xl font-bold">Shop by category</h2>
//         <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
//           {CATEGORIES.map((c) => (
//             <Link key={c} to={`/products?cat=${c}`} style={{ background: `linear-gradient(135deg, ${CAT_COLORS[c][0]}, ${CAT_COLORS[c][1]})` }}
//               className="flex items-center justify-between rounded-2xl p-4 text-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
//               <span className="font-display text-lg font-bold">{c}</span><span className="text-4xl drop-shadow">{CAT_EMOJI[c]}</span>
//             </Link>
//           ))}
//         </div>
//       </section>

//       <section className="mt-12">
//         <div className="mb-5 flex items-end justify-between">
//           <h2 className="text-2xl font-bold">Featured products</h2>
//           <Link to="/products" className="text-sm font-semibold text-brand-600 hover:underline">View all</Link>
//         </div>
//         <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">{featured.map((p) => <ProductCard key={p.id} p={p} />)}</div>
//       </section>
//     </Wrap>
//   )
// }


















import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../store'
import { ProductCard, btn, Wrap } from '../components'
import { CATEGORIES, CAT_COLORS } from '../data'

const BANNERS = [
  { t: 'Festive sale: up to 30% off tech', s: 'Headphones, smart watches and keyboards at their lowest prices this season.', cta: 'Shop electronics', to: '/products?cat=Electronics', bg: 'from-orange-500 via-orange-800 to-black', icon: '🎧' },
  { t: 'Free delivery on orders over ₹999', s: 'Fill your cart and shipping is on us, with cash on delivery across India.', cta: 'Start shopping', to: '/products', bg: 'from-neutral-700 via-neutral-900 to-black', icon: '🚚' },
  { t: 'Move more with new sports gear', s: 'Yoga mats, bottles and more to keep you going, from ₹699.', cta: 'Shop sports', to: '/products?cat=Sports', bg: 'from-amber-500 via-orange-700 to-black', icon: '🧘' },
]
const CAT_EMOJI = { Electronics: '🎧', Fashion: '👗', Home: '🏠', Sports: '🏃' }
const TRUST = [['🚚', 'Free delivery', 'On orders above ₹999'], ['↩️', 'Easy returns', '7-day return window'], ['🔒', 'Secure payments', 'UPI, cards and COD'], ['⭐', 'Top rated', 'Loved by 5,000+ buyers']]

export default function Home() {
  const { products } = useStore()
  const [i, setI] = useState(0)
  useEffect(() => { const id = setInterval(() => setI((x) => (x + 1) % BANNERS.length), 5000); return () => clearInterval(id) }, [])
  const b = BANNERS[i]
  const featured = products.filter((p) => p.featured).slice(0, 8)
  return (
    <Wrap>
      <section className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${b.bg} p-6 text-white shadow-xl sm:p-10 md:p-12 md:pr-60`}>
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="relative z-10 max-w-xl">
          <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">{b.t}</h1>
          <p className="mt-3 text-white/80">{b.s}</p>
          <Link to={b.to} className={btn + ' mt-6 !bg-none !bg-white !text-stone-900 !shadow-black/20'}>{b.cta}</Link>
          <div className="mt-8 flex gap-2">
            {BANNERS.map((_, n) => <button key={n} onClick={() => setI(n)} aria-label={`Banner ${n + 1}`} className={`h-2 rounded-full transition-all ${n === i ? 'w-8 bg-white' : 'w-2 bg-white/50'}`} />)}
          </div>
        </div>
        <div className="pointer-events-none absolute right-10 top-1/2 z-0 hidden -translate-y-1/2 select-none text-[8rem] leading-none lg:text-[10rem] drop-shadow-2xl md:block">{b.icon}</div>
      </section>

      <section className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {TRUST.map(([e, t, s]) => (
          <div key={t} className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-white p-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-xl">{e}</span>
            <div className="leading-tight"><p className="text-sm font-semibold">{t}</p><p className="text-xs text-stone-500">{s}</p></div>
          </div>
        ))}
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold">Shop by category</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {CATEGORIES.map((c) => (
            <Link key={c} to={`/products?cat=${c}`} style={{ background: `linear-gradient(135deg, ${CAT_COLORS[c][0]}, ${CAT_COLORS[c][1]})` }}
              className="flex items-center justify-between rounded-2xl p-4 text-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
              <span className="font-display text-base font-bold sm:text-lg">{c}</span><span className="text-3xl drop-shadow sm:text-4xl">{CAT_EMOJI[c]}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <div className="mb-5 flex items-end justify-between">
          <h2 className="text-2xl font-bold">Featured products</h2>
          <Link to="/products" className="text-sm font-semibold text-brand-600 hover:underline">View all</Link>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">{featured.map((p) => <ProductCard key={p.id} p={p} />)}</div>
      </section>
    </Wrap>
  )
}