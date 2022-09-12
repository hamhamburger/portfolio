import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';


const Header = ():JSX.Element => {


  return (
    <AppBar position="static" sx={{backgroundColor:"transparent",}}>
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        News
      </Typography>
      <Button color="inherit">Works</Button>
      <Button color="inherit">Skills</Button>
    </Toolbar>
  </AppBar>
  );
};
export default Header;
