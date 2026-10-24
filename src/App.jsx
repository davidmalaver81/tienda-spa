import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Inicio from './pages/Inicio.jsx'
import Productos from './pages/Productos.jsx'
import Carrito from './pages/Carrito.jsx'

export default function App() {
  return (
    <>
      {/* La Navbar está fuera de <Routes>, por eso se ve en todas las vistas */}
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="*" element={<Inicio />} />
        </Routes>
      </main>
    </>
  )
}
