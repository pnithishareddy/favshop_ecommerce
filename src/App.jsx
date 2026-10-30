// import { Routes, Route, Navigate } from 'react-router-dom'
// import { Navbar, Footer, Protected } from './components'
// import Home from './pages/Home'
// import Products from './pages/Products'
// import ProductDetail from './pages/ProductDetail'
// import Cart from './pages/Cart'
// import Checkout from './pages/Checkout'
// import { Login, Register } from './pages/Auth'
// import { Profile, Orders } from './pages/Profile'
// import Admin from './pages/Admin'
// import Settings from './pages/Settings'

// export default function App() {
//   return (
//     <div className="flex min-h-screen flex-col">
//       <Navbar />
//       <div className="flex-1">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/product/:id" element={<ProductDetail />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/checkout" element={<Protected><Checkout /></Protected>} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/profile" element={<Protected><Profile /></Protected>} />
//           <Route path="/orders" element={<Protected><Orders /></Protected>} />
//           <Route path="/settings" element={<Protected><Settings /></Protected>} />
//           <Route path="/admin" element={<Protected admin><Admin /></Protected>} />
//           <Route path="*" element={<Navigate to="/" replace />} />
//         </Routes>
//       </div>
//       <Footer />
//     </div>
//   )
// }























import { Routes, Route, Navigate } from 'react-router-dom'
import { Navbar, Footer, Protected } from './components'
import { useStore } from './store'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import { Login, Register } from './pages/Auth'
import { Profile, Orders } from './pages/Profile'
import Admin from './pages/Admin'
import Settings from './pages/Settings'

export default function App() {
  const { toast } = useStore()
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Protected><Checkout /></Protected>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Protected><Profile /></Protected>} />
          <Route path="/orders" element={<Protected><Orders /></Protected>} />
          <Route path="/settings" element={<Protected><Settings /></Protected>} />
          <Route path="/admin" element={<Protected admin><Admin /></Protected>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      {toast && <div role="status" className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-sm rounded-xl bg-black px-4 py-3 text-sm text-white shadow-xl">{toast}</div>}
      <Footer />
    </div>
  )
}