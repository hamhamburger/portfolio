import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';

// 本来ボタンの名前とリンクのリストを受け取ってmapで生成するべきかもしれないが時間もないし追加する予定もないので略
const Header = ():JSX.Element => {


  return (
    <AppBar position='static' sx={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          Navigation
        </Typography>
        <a href='#works' style={{ textDecoration: 'none', color: 'white' }}>
          <Button color='inherit'>Works</Button>
        </a>
        <a href='#skills' style={{ textDecoration: 'none', color: 'white' }}>
          <Button color='inherit'>Skills</Button>
        </a>
        <a
          href='https://github.com/hamhamburger'
          rel='noreferrer'
          target='_blank'
          style={{ textDecoration: 'none', color: 'white' }}
        >
          <Button color='inherit'>GitHub</Button>
        </a>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
