import { Typography, Button } from '@mui/material';

const About = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0', marginTop: '60px' }}>
      <Typography variant="h4" gutterBottom>
        ¡Bienvenido a [Nombre de la Empresa]!
      </Typography>
      <Typography variant="body1" paragraph>
        Somos <strong>[Breve descripción de la empresa]</strong>. En{' '}
        <strong>[Año de Fundación]</strong>, comenzamos nuestra travesía con el
        objetivo de <strong>[misión de la empresa]</strong>.
      </Typography>
      <Typography variant="body1" paragraph>
        En <strong>[Nombre de la Empresa]</strong>, nos apasiona{' '}
        <strong>[Breve descripción de lo que impulsa a la empresa, como la
        innovación, la excelencia, etc.]</strong>.
      </Typography>
      <Typography variant="body1" paragraph>
        Nos comprometemos a{' '}
        <strong>[Breve declaración sobre el compromiso de la empresa con la
        calidad, el servicio al cliente, etc.]</strong>.
      </Typography>
      <Button variant="contained" color="primary" style={{ marginRight: '10px' }}>
        Explora
      </Button>
      <Button variant="outlined" color="primary">
        Únete a Nosotros
      </Button>
      <Typography variant="body2" style={{ marginTop: '20px' }}>
        ¿Listo para Conectar? Contáctanos en{' '}
        <a href="mailto:info@empresa.com">info@empresa.com</a> o síguenos en{' '}
        <a href="https://www.instagram.com/empresa">@empresa</a>.
      </Typography>
    </div>
  );
};

export default About;
