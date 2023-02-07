import * as React from 'react';
import Drawer from '@mui/material/Drawer';
// components mui
import { styled, useTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
// icons mui
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import CloseIcon from '@mui/icons-material/Close';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import EditIcon from '@mui/icons-material/Edit';
import LogoDevIcon from '@mui/icons-material/LogoDev';

// components propios
 
// navigate react router
import { useNavigate } from 'react-router-dom';

// images
import enviexpress from '../../../assets/images/LOGOTIPO_ENVIEXPRESS_horizontal_150x50.png'
import working from '../../../assets/icons/data-analysis-case-study.png'

// width drawer desplegable
const drawerWidth = 240;

// SIDEBAR "drawer"
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
  backgroundColor: "#e4e4e7",

}));

// ROLES
const rolTI = true;

function index(props: any) {
  const theme = useTheme();

  const menuAdmin = [
    {
      name: 'Pago Proveedores',
      navigate: '',
      icon: <BackupTableIcon/>
    },
    {
      name:'Agregar/Editar Adjuntos',
      navigate:'',
      icon: <EditIcon/>
    },
  ];

  const menuTI = [
    {
      name: 'Administracion TI',
      navigate: '',
      icon: <LogoDevIcon/>
    },
  ];

  return (
    <Drawer
      sx={{
        backgroundColor: "#e4e4e7",
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: "#e4e4e7"
        },
      }}
      variant="persistent"
      anchor="left"
      open={props.open}>
      <DrawerHeader>
        <img src={enviexpress} width={160} className="inline " />
        <IconButton onClick={props.handleDrawerClose}>
          <CloseIcon/>
        </IconButton>
      </DrawerHeader>
      
      <Divider />
        
      <List>
        {menuAdmin.map((list, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {list.icon}
              </ListItemIcon>
              <ListItemText primary={list.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      
      {rolTI && <List>
        {menuTI.map((list, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {list.icon}
              </ListItemIcon>
              <ListItemText primary={list.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>}
      {rolTI && <Divider/>}

      <img src={working} alt="image working" style={{backgroundColor:"#e4e4e7", width:230 }}/>
    </Drawer>
  )
}

export default index
