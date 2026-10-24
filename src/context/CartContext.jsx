import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  // Cada ítem: { ...producto, cantidad }
  const [items, setItems] = useState([])

  // Agregar un producto: si ya existe suma 1 a la cantidad, si no lo añade.
  const agregarAlCarrito = (producto) => {
    setItems((prev) => {
      const existe = prev.find((p) => p.id === producto.id)
      if (existe) {
        return prev.map((p) =>
          p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
        )
      }
      return [...prev, { ...producto, cantidad: 1 }]
    })
  }

  // Eliminar un producto del carrito (quita toda su línea).
  const eliminarDelCarrito = (id) => {
    setItems((prev) => prev.filter((p) => p.id !== id))
  }

  // Valores derivados del estado: se recalculan solos cuando cambia `items`.
  const totalItems = useMemo(
    () => items.reduce((acc, p) => acc + p.cantidad, 0),
    [items]
  )
  const totalPrecio = useMemo(
    () => items.reduce((acc, p) => acc + p.precio * p.cantidad, 0),
    [items]
  )

  const value = {
    items,
    totalItems,
    totalPrecio,
    agregarAlCarrito,
    eliminarDelCarrito,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

// Hook personalizado para consumir el estado global desde cualquier componente.
export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) {
    throw new Error('useCart debe usarse dentro de un <CartProvider>')
  }
  return ctx
}
