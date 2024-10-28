'use client';

import { useEffect, useState } from 'react';

export default function ListadoPage() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function fetchProductos() {
      const response = await fetch('/api/productos');
      const data = await response.json();
      setProductos(data);
    }
    fetchProductos();
  }, []);

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Listado de Productos</h2>
      <div style={tableContainerStyle}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={headerCellStyle}>Código</th>
              <th style={headerCellStyle}>Nombre</th>
              <th style={headerCellStyle}>Descripción</th>
              <th style={headerCellStyle}>Precio</th>
              <th style={headerCellStyle}>Stock</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto.codigo}>
                <td style={cellStyle}>{producto.codigo}</td>
                <td style={cellStyle}>{producto.nombre}</td>
                <td style={cellStyle}>{producto.descripcion}</td>
                <td style={cellStyle}>${producto.precio}</td>
                <td style={cellStyle}>{producto.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const containerStyle = {
  textAlign: 'center',
  padding: '40px',
  backgroundColor: '#ffffff', // Fondo blanco
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const headerStyle = {
  color: '#003366', // Azul oscuro similar al título de "Creación de Producto"
  marginBottom: '20px',
  fontSize: '24px',
  fontWeight: '600',
};

const tableContainerStyle = {
  width: '100%',
  maxWidth: '800px',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', // Sombra ligera para la tabla
  overflowX: 'auto',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
};

const headerCellStyle = {
  backgroundColor: '#007bbd', // Azul similar al botón de "CREAR PRODUCTO"
  color: '#ffffff',
  padding: '12px',
  fontWeight: 'bold',
  textAlign: 'left',
};

const cellStyle = {
  padding: '10px',
  borderBottom: '1px solid #ddd',
  color: '#333333', // Texto en tono oscuro para contraste
};
