# Tienda SPA — Estado Global y Enrutamiento

SPA con **React + Vite**, **react-router-dom** y **Context API**.

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

Abre la URL que muestra la terminal (normalmente http://localhost:5173).

Para generar la versión de producción: `npm run build`.

## Estructura

```
src/
├── main.jsx                 # BrowserRouter + CartProvider envolviendo la app
├── App.jsx                  # Navbar fija + definición de rutas
├── context/CartContext.jsx  # Estado global del carrito (Context API)
├── components/Navbar.jsx    # Enlaces con NavLink + badge del carrito
├── data/productos.js        # 6 productos "quemados"
└── pages/
    ├── Inicio.jsx           # /
    ├── Productos.jsx        # /productos
    └── Carrito.jsx          # /carrito
```

## Cómo funciona el estado global

- `CartProvider` (en `main.jsx`) envuelve toda la aplicación y guarda el arreglo `items`.
- Expone `agregarAlCarrito(producto)`, `eliminarDelCarrito(id)`, `totalItems` y `totalPrecio`.
- Cualquier componente accede con el hook `useCart()`.
- La **Navbar** usa `totalItems` para pintar el badge. Como lee del mismo contexto que
  `Productos` y `Carrito`, el número cambia al instante en cualquier vista, sin recargar.

## Rutas

| Ruta         | Vista                                          |
| ------------ | ---------------------------------------------- |
| `/`          | Bienvenida                                     |
| `/productos` | Lista de 6 productos con botón "Agregar"       |
| `/carrito`   | Productos agregados con botón "Eliminar"       |

La navegación usa `<Link>` / `<NavLink>`, por lo que no hay recargas de página.
