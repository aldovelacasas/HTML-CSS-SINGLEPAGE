import { Link, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Navbar = () => {

  const location = useLocation()
  return (
    <AppBar 
     style={{width: '100%', top: '0', borderRadius: '10px', backgroundColor: 'violet'}}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, }}>
          <Link to="/" style={{textDecoration: 'none', color: location.pathname === '/' ? 'black' : 'white'}}>Home</Link>
        </Typography>
        <Typography variant="h6" component="div" sx={{ marginRight: '20px' }}>
          <Link to="/RegisterPage" style={{textDecoration: 'none', color: location.pathname === '/RegisterPage' ? 'black' : 'white'}}>Registrar</Link>
        </Typography>
        <Typography variant="h6" component="div" sx={{ marginRight: '20px' }}>
          <Link to="/BlogPage"  style={{textDecoration: 'none', color: location.pathname === '/BlogPage' ? 'black' : 'white'}}>Blog</Link>
        </Typography>
        <Typography variant="h6" component="div">
          <Link to="/About"  style={{textDecoration: 'none', color: location.pathname === '/About' ? 'black' : 'white'}}>About</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
