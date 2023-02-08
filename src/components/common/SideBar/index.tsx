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

import rutero from "../ruter/Rute";
import LogoDevIcon from '@mui/icons-material/LogoDev';
<<<<<<< HEAD:src/components/SideBar/index.tsx
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import enviexpress from '../../assets/images/LOGOTIPO_ENVIEXPRESS_horizontal_150x50.png'
import working from '../../assets/icons/data-analysis-case-study.png'
=======

// components propios
 
// navigate react router
import { useNavigate } from 'react-router-dom';

// images
import enviexpress from '../../../assets/images/LOGOTIPO_ENVIEXPRESS_horizontal_150x50.png'
import working from '../../../assets/icons/data-analysis-case-study.png'
>>>>>>> fd2fcf36f5b37791ba0734f13af3fca1c6d93d8a:src/components/common/SideBar/index.tsx

const drawerWidth = 240;
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),

  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
  backgroundColor: "#e4e4e7",

}));

// ROLES
const rolTI = true;

function index(props: any) {
  const theme = useTheme();
  const navigate = useNavigate();

  const menuTI = [
    {
      name: 'Administracion TI',
     url:"/jamas",
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
        {rutero.online.admin.map((list, index) => (
          <ListItem key={index} disablePadding>
          <ListItemButton  onClick={ ()=> navigate(`${list.url}`)}>
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
