import { NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

export default function Navbar() {
  // El badge lee directamente del estado global: se actualiza solo.
  const { totalItems } = useCart()

  const claseLink = ({ isActive }) => (isActive ? 'nav-link activo' : 'nav-link')

  return (
    <nav className="navbar">
      <span className="brand">🛒 Tienda SPA</span>
      <div className="nav-links">
        <NavLink to="/" end className={claseLink}>
          Inicio
        </NavLink>
        <NavLink to="/productos" className={claseLink}>
          Productos
        </NavLink>
        <NavLink to="/carrito" className={claseLink}>
          Carrito
          <span
            className="badge"
            aria-label={`${totalItems} artículos en el carrito`}
            data-testid="cart-badge"
          >
            {totalItems}
          </span>
        </NavLink>
      </div>
    </nav>
  )
}
