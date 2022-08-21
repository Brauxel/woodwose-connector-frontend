import { Route, Routes } from 'react-router-dom'
import { Home } from './Home'

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
  </Routes>
)
