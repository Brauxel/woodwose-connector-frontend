import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { WooCommerceInventory } from './pages/WooCommerceInventory'

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/woocommerce-inventory" element={<WooCommerceInventory />} />
  </Routes>
)
