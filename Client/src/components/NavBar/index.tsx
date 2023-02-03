import * as React from 'react';

// components mui
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import Badge from '@mui/material/Badge';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';

// icons
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import TableChartIcon from '@mui/icons-material/TableChart';
import logo from '../../assets/images/enviexpress.png'

// react-router-dom
import { useNavigate } from 'react-router-dom';

// img
import userIcon from '../../assets/images/userIcon.jpg'

// css
import './navbar.css'
import Avatar from '@mui/material/Avatar';



export default function MenuAppBar() {
  // navigation 
  const navigate = useNavigate();

  // toggle badgeNotifications
  const [countNotification , setCountNotification] = React.useState(5)
  const increaseNotificationsDB = () => {setCountNotification(countNotification + 1)}
  const toggleBadgeNotification = () => {setCountNotification(0)}

  // image logo
  const settings = [
    {
      name:'Radicacion', 
      // logo: <TableChartIcon/>, 
      navigate: '/admin'
    }, 
    {
      name:'Cerrar Sesion', 
      // logo: <LogoutIcon/>, 
      navigate: '/login'
    },
  ];

  // open & close menu user avatar
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const name = 'santiago';

  return (
    <Box sx={{ flexGrow: 1,  }}>
      <AppBar position="static" style={{backgroundColor:"white", color:"#000"}}>
        <Toolbar>
          
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display:{xs:"flex", sm:"none"} }}
          >
            <MenuIcon />
          </IconButton>
          <img src={logo} className="mx-2"/>
          
          <Typography variant="h6" 
            component="div" 
            sx={{ flexGrow: 1, display:'flex' }}
            style={{fontWeight: "bold"}}>
            Enviexpress
          </Typography>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display:{xs:"none", sm:"flex"} }} className="cursor-pointer">
            Administracion
          </Typography>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display:{xs:"none", sm:"flex"} }} className="cursor-pointer">
            Historial
          </Typography>

          
          {/* image */}
          <Box sx={{ flexGrow: 0, display: 'flex' }}>
            <Tooltip title="nuevos radicados">
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                onClick={()=> toggleBadgeNotification()}
              >
                <Badge badgeContent={countNotification}  color="primary">
                  <NotificationsNoneRoundedIcon sx={{color:"#6b7280"}} />
                </Badge>
              </IconButton>
            </Tooltip>
            <Typography sx={{ mx:3 ,my:1, display:{xs:"none", sm:"none", md:"flex"} }}>santiago sierra <br/> desarrollador </Typography>
            <Tooltip title="Abrir Menu">
              <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenUserMenu}
              color="inherit"
              >
                <Avatar alt="Remy Sharp" src={userIcon} style={{objectFit:"fill" }} />
              </IconButton>
            </Tooltip>
            {/* menu avatar */}
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, index) => (
                <MenuItem key={index} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick={()=> navigate(setting.navigate)}>{setting.name} </Typography>
                </MenuItem>
              ))}
            </Menu>
            {/* menu notifications */}
            <Menu
              sx={{ mt: '45px' }}
              id="notification-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, index) => (
                <MenuItem key={index} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick={()=> navigate(setting.navigate)}>{setting.name} </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}