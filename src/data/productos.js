// Datos "quemados": no hay base de datos, solo un arreglo.
export const productos = [
  { id: 1, nombre: 'Teclado mecánico', descripcion: 'Switches rojos, retroiluminado RGB.', precio: 189000, emoji: '⌨️' },
  { id: 2, nombre: 'Mouse inalámbrico', descripcion: 'Ergonómico, 1600 DPI, batería de 12 meses.', precio: 79000, emoji: '🖱️' },
  { id: 3, nombre: 'Audífonos con micrófono', descripcion: 'Cancelación de ruido y sonido envolvente.', precio: 249000, emoji: '🎧' },
  { id: 4, nombre: 'Monitor 24"', descripcion: 'Full HD, panel IPS, 75 Hz.', precio: 599000, emoji: '🖥️' },
  { id: 5, nombre: 'Webcam HD', descripcion: '1080p con enfoque automático.', precio: 129000, emoji: '📷' },
  { id: 6, nombre: 'Memoria USB 64 GB', descripcion: 'USB 3.0, lectura hasta 120 MB/s.', precio: 35000, emoji: '💾' },
]

export const formatoCOP = (valor) =>
  new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(valor)
