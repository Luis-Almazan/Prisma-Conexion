import { useState } from 'react';

export default function CrearProducto() {
  const [formData, setFormData] = useState({ codigo: '', nombre: '', descripcion: '', precio: 0, stock: 0 });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/productos/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (!response.ok) {
      alert('Se Produjo un Error: ' + data.error);
    } else {
      alert('Producto Creado');
      setFormData({ codigo: '', nombre: '', descripcion: '', precio: 0, stock: 0 }); // Resetea el formulario
    }
  };

  return (
    <div style={{
      textAlign: 'center',
      padding: '40px',
      backgroundColor: '#f9f9f9', // Fondo claro similar al formulario de actualización
      borderRadius: '8px',
      maxWidth: '500px',
      margin: '50px auto',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    }}>
      <h2 style={{
        color: '#003366', // Azul oscuro para el encabezado
        marginBottom: '20px',
        fontSize: '24px',
        fontWeight: 'bold'
      }}>Creación de Producto</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'left' }}>
        
        <label style={{ fontWeight: 'bold', color: '#003366' }}>Código</label>
        <input
          type="text"
          placeholder="Código"
          value={formData.codigo}
          onChange={(e) => setFormData({ ...formData, codigo: e.target.value })}
          required
          style={{
            padding: '10px',
            border: '1px solid #d0d0d0',
            borderRadius: '4px',
            fontSize: '16px',
          }}
        />

        <label style={{ fontWeight: 'bold', color: '#003366' }}>Nombre</label>
        <input
          type="text"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
          required
          style={{
            padding: '10px',
            border: '1px solid #d0d0d0',
            borderRadius: '4px',
            fontSize: '16px',
          }}
        />

        <label style={{ fontWeight: 'bold', color: '#003366' }}>Descripción</label>
        <input
          type="text"
          placeholder="Descripción"
          value={formData.descripcion}
          onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
          required
          style={{
            padding: '10px',
            border: '1px solid #d0d0d0',
            borderRadius: '4px',
            fontSize: '16px',
          }}
        />

        <label style={{ fontWeight: 'bold', color: '#003366' }}>Precio</label>
        <input
          type="number"
          placeholder="Ingrese el precio"
          value={formData.precio}
          onChange={(e) => setFormData({ ...formData, precio: parseFloat(e.target.value) })}
          required
          style={{
            padding: '10px',
            border: '1px solid #d0d0d0',
            borderRadius: '4px',
            fontSize: '16px',
          }}
        />

        <label style={{ fontWeight: 'bold', color: '#003366' }}>Stock</label>
        <input
          type="number"
          placeholder="Cantidad en stock"
          value={formData.stock}
          onChange={(e) => setFormData({ ...formData, stock: parseInt(e.target.value) })}
          required
          style={{
            padding: '10px',
            border: '1px solid #d0d0d0',
            borderRadius: '4px',
            fontSize: '16px',
          }}
        />

        <button type="submit" style={{
          backgroundColor: '#007bbd', // Azul similar al botón de actualización
          color: '#ffffff',
          border: 'none',
          borderRadius: '4px',
          padding: '12px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          marginTop: '10px',
        }}>
          Crear Producto
        </button>
      </form>
    </div>
  );
}
