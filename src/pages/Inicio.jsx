import { Link } from 'react-router-dom'

export default function Inicio() {
  return (
    <section className="hero">
      <h1>¡Bienvenido a la Tienda SPA!</h1>
      <p>
        Una tienda básica construida con React, React Router y Context API.
        Navega entre vistas sin recargar la página y mira cómo el contador del
        carrito se actualiza en tiempo real desde cualquier lugar.
      </p>
      <Link to="/productos" className="btn btn-primary">
        Ver productos
      </Link>
    </section>
  )
}
