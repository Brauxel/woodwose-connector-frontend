import { Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { WooCommerceInventory } from './WooCommerceInventory'

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/woocommerce-inventory" element={<WooCommerceInventory />} />
  </Routes>
)
