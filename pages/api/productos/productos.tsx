// pages/productos.tsx
import { useEffect, useState } from 'react';

interface Producto {
  id: number;
  codigo: string;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
}

export default function Productos() {
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    const fetchProductos = async () => {
      const response = await fetch('/api/productos');
      const data = await response.json();
      setProductos(data);
    };

    fetchProductos();
  }, []);

  return (
    <div>
      <h1>Listado de Productos</h1>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            {producto.nombre} - {producto.precio} USD
          </li>
        ))}
      </ul>
    </div>
  );
}
