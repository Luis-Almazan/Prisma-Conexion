import { useState } from 'react';

export default function ActualizarProducto() {
  const [codigo, setCodigo] = useState('');
  const [formData, setFormData] = useState({ nombre: '', descripcion: '', precio: 0, stock: 0 });

  const handleActualizar = async (e) => {
    e.preventDefault();
    console.log('Datos enviados:', { codigo, ...formData });

    const response = await fetch(`/api/productos/update`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ codigo, ...formData }),
    });

    if (response.ok) {
      const updatedProduct = await response.json();
      console.log('Producto actualizado:', updatedProduct);
      alert('Producto actualizado con éxito');
    } else {
      const errorData = await response.json();
      console.error('Error al actualizar el producto:', errorData);
      alert('Error al actualizar el producto: ' + errorData.error);
    }
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    margin: '50px auto',
  };

  const headerStyle = {
    color: '#003366',
    marginBottom: '20px',
  };

  const labelStyle = {
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: '5px',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
  };

  const buttonStyle = {
    backgroundColor: '#007bbd',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    padding: '12px 20px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s',
    width: '100%',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Actualización de Producto</h2>
      <form onSubmit={handleActualizar} style={{ width: '100%' }}>
        <label style={labelStyle}>Código</label>
        <input
          type="text"
          placeholder="Código"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
          required
          style={inputStyle}
        />
        
        <label style={labelStyle}>Nombre</label>
        <input
          type="text"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
          required
          style={inputStyle}
        />
        
        <label style={labelStyle}>Descripción</label>
        <input
          type="text"
          placeholder="Descripción"
          value={formData.descripcion}
          onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
          required
          style={inputStyle}
        />
        
        <label style={labelStyle}>Precio</label>
        <input
          type="number"
          placeholder="Precio"
          value={formData.precio}
          onChange={(e) => setFormData({ ...formData, precio: parseFloat(e.target.value) })}
          required
          style={inputStyle}
        />
        
        <label style={labelStyle}>Stock</label>
        <input
          type="number"
          placeholder="Stock"
          value={formData.stock}
          onChange={(e) => setFormData({ ...formData, stock: parseInt(e.target.value) })}
          required
          style={inputStyle}
        />
        
        <button type="submit" style={buttonStyle}>Actualizar Producto</button>
      </form>
    </div>
  );
}
