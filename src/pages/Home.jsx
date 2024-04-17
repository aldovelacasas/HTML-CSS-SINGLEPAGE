import  { useState } from 'react';
import { Typography, Button } from '@mui/material';

export const Home = () => {
  // Estado local para controlar la visibilidad del contenido adicional
  const [mostrarContenidoAdicional, setMostrarContenidoAdicional] = useState(false);

  // Función para alternar la visibilidad del contenido adicional
  const toggleContenidoAdicional = () => {
    setMostrarContenidoAdicional(!mostrarContenidoAdicional);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center', marginTop: '60px' }}>
      <Typography variant="h3" gutterBottom>
        ¡Bienvenido a [Nombre de la Empresa]!
      </Typography>
      <Typography variant="h5" paragraph>
        Somos una empresa dedicada a [Breve descripción de la empresa].
        Fundada en [Año de Fundación], nos enorgullece [algo que destaque de la
        empresa, como su enfoque en la calidad, innovación, servicio al
        cliente, etc.].
      </Typography>
      <img src="/imagen.jpg" alt="Imagen 1" style={{ maxWidth: '100%', marginBottom: '20px' }} />
      <Typography variant="h5" paragraph>
        Nuestra misión es [Breve declaración de la misión de la empresa, es
        decir, lo que la empresa se esfuerza por lograr].
      </Typography>
      <img src="/imagen2.jpg" alt="Imagen 2" style={{ maxWidth: '100%', marginBottom: '20px' }} />
      <Typography variant="h5" paragraph>
        Nos esforzamos por ser [descripción de la posición deseada o el estado
        futuro de la empresa].
      </Typography>
      <Button variant="contained" color="primary" onClick={toggleContenidoAdicional}>
        {mostrarContenidoAdicional ? 'Mostrar menos' : 'Mostrar Más'}
      </Button>

      {/* Contenido adicional */}
      {mostrarContenidoAdicional && (
        <div style={{ textAlign: 'left' }}>
          <Typography variant="body1" paragraph>
            <strong>Información Adicional:</strong>
          </Typography>
          <Typography variant="body1" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum
            eros ut risus pretium aliquet. Pellentesque ac eros ultricies,
            sollicitudin ante id, aliquet velit. Nulla facilisi. Vestibulum nec
            ex felis. Integer vehicula odio sit amet nisi aliquet, eget rutrum
            elit volutpat.
          </Typography>

          {/* Sección de ubicación */}
          <Typography variant="h4" style={{ marginTop: '20px' }}>Nuestra Ubicación</Typography>
          <Typography variant="body1" paragraph>
            <strong>Dirección:</strong> [Dirección de la Empresa]
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Teléfono:</strong> [Número de Teléfono]
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Email:</strong> [Correo Electrónico]
          </Typography>
        </div>
      )}
    </div>
  );
};