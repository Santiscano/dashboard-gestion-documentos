import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import NavBar from '../../components/common/NavBar'
import SideBar from '../../components/common/SideBar';
import { useNavigate, Outlet } from 'react-router-dom';
import './admin.css'
import Loading from '../../components/common/Loading';

// width drawer desplegable
const drawerWidth = 240;

// info main "layout"
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

// NAVBAR "appbar"
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

// SIDEBAR "drawer"
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

// METODOS
function index() {
  const [open, setOpen] = React.useState(true);
  const [loading, setLoading] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  // open & close menu user avatar
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  React.useEffect(()=>{
    setTimeout(() => {
      setLoading(false);
    }, 1500)
  },[])

  return (
    <>
    <Box sx={{ display: 'flex', height:"100vh", width:"100vw" }}>
      <CssBaseline />

      {loading ?
      <div className="bg-sky-600 w-screen h-screen">
        <Loading/>
      </div>
      :
      <>
        <NavBar
        handleDrawerOpen={handleDrawerOpen}
        open={open}
        />

        <SideBar
        open={open}
        handleDrawerClose={handleDrawerClose}
        />

        <Main open={open} sx={{ padding: 0 }}>
          <DrawerHeader />
          <Outlet/>
        </Main>
      </>
      }

    </Box>
    </>
  );
}

export default index
