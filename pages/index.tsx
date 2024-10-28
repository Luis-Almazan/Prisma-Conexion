import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Gestión de Productos</h1>
      <div style={buttonContainerStyle}>
        <Link href="/listado">
          <button style={buttonStyle}>Generar Listado</button>
        </Link>
        <Link href="/consulta">
          <button style={buttonStyle}>Consulta por Código</button>
        </Link>
        <Link href="/creacion">
          <button style={buttonStyle}>Creación de Producto</button>
        </Link>
        <Link href="/actualizacion">
          <button style={buttonStyle}>Actualización de Producto</button>
        </Link>
      </div>
    </div>
  );
}

const containerStyle = {
  textAlign: 'center',
  padding: '20px',
  backgroundColor: '#f0f8ff',
  minHeight: '80vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const headerStyle = {
  color: '#003366',
  marginBottom: '20px',
  fontSize: '2.5rem',
  fontWeight: 'bold',
};

const buttonContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20px',
};

const buttonStyle = {
  backgroundColor: '#007bbd',
  color: '#ffffff',
  border: 'none',
  borderRadius: '5px',
  padding: '15px 30px',
  cursor: 'pointer',
  fontSize: '16px',
  textAlign: 'center',
  width: '220px', // Ancho fijo para todos los botones
  height: '60px', // Altura fija para todos los botones
  transition: 'background-color 0.3s, transform 0.2s',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
};

// Efecto de hover para los botones
buttonStyle[':hover'] = {
  backgroundColor: '#005fa3',
  transform: 'scale(1.05)',
};
