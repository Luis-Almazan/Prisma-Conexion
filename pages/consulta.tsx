// app/consulta/page.tsx
'use client';

import { useState } from 'react';

export default function ConsultaPage() {
  const [codigo, setCodigo] = useState('');
  const [producto, setProducto] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch(`/api/productos/${codigo}`);
    const data = await response.json();
    setProducto(data);
  }

  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h2 style={{ color: '#003366', marginBottom: '20px' }}>Consulta por Código</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <input
          type="text"
          placeholder="Ingrese el código del producto"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
          style={{
            padding: '10px',
            width: '280px',
            border: '1px solid #007bbd',
            borderRadius: '5px',
          }}
        />
        <button type="submit" style={{
          backgroundColor: '#007bbd',
          color: '#ffffff',
          border: 'none',
          borderRadius: '5px',
          padding: '10px 20px',
          cursor: 'pointer',
          fontSize: '16px',
        }}>
          Consultar
        </button>
      </form>
      {producto && (
        <div style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        }}>
          <h3>Detalles del Producto</h3>
          <p><strong>Nombre:</strong> {producto.nombre}</p>
          <p><strong>Descripción:</strong> {producto.descripcion}</p>
          <p><strong>Precio:</strong> ${producto.precio}</p>
          <p><strong>Stock:</strong> {producto.stock}</p>
        </div>
      )}
    </div>
  );
}
