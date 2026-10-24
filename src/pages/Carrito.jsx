import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { formatoCOP } from '../data/productos.js'

export default function Carrito() {
  const { items, totalPrecio, eliminarDelCarrito } = useCart()

  if (items.length === 0) {
    return (
      <section>
        <h1>Carrito</h1>
        <p className="muted">Tu carrito está vacío.</p>
        <Link to="/productos" className="btn btn-primary">
          Ir a productos
        </Link>
      </section>
    )
  }

  return (
    <section>
      <h1>Carrito</h1>
      <ul className="lista-carrito">
        {items.map((item) => (
          <li key={item.id} className="fila-carrito">
            <span className="card-emoji small" aria-hidden="true">
              {item.emoji}
            </span>
            <div className="info">
              <strong>{item.nombre}</strong>
              <span className="muted">
                {formatoCOP(item.precio)} × {item.cantidad}
              </span>
            </div>
            <span className="subtotal">
              {formatoCOP(item.precio * item.cantidad)}
            </span>
            <button
              className="btn btn-danger"
              onClick={() => eliminarDelCarrito(item.id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <p className="total">
        Total: <strong>{formatoCOP(totalPrecio)}</strong>
      </p>
    </section>
  )
}
