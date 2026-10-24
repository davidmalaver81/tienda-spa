import { productos, formatoCOP } from '../data/productos.js'
import { useCart } from '../context/CartContext.jsx'

export default function Productos() {
  const { agregarAlCarrito } = useCart()

  return (
    <section>
      <h1>Productos</h1>
      <div className="grid">
        {productos.map((producto) => (
          <article key={producto.id} className="card">
            <div className="card-emoji" aria-hidden="true">
              {producto.emoji}
            </div>
            <h2>{producto.nombre}</h2>
            <p className="muted">{producto.descripcion}</p>
            <p className="precio">{formatoCOP(producto.precio)}</p>
            <button
              className="btn btn-primary"
              onClick={() => agregarAlCarrito(producto)}
            >
              Agregar
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}
