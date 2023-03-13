import { useState } from 'react';
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

import rutero from "../../../routes/Rute";
import { Link, useNavigate } from "react-router-dom";
import enviexpress from '../../../assets/images/LOGOTIPO_ENVIEXPRESS_horizontal_150x50.png'
import working from '../../../assets/icons/data-analysis-case-study.png'
import { Collapse } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import { session } from '../../tools/SesionSettings';


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

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const handleRouteValidate = (nav:any) => {
    console.log('session', session());
    !!session() ? navigate(`${nav.url}`) : navigate("/login")
  };

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
      open={props.open}
    >
      <DrawerHeader>
        <Link to="/dashboard/home">
          <img src={enviexpress} width={160} className="inline " />
        </Link>
        <IconButton onClick={props.handleDrawerClose}>
          <CloseIcon/>
        </IconButton>
      </DrawerHeader>

      <Divider />

      <List>
        {rutero.online.settling.map((list, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={ ()=> handleRouteValidate(list) } >
              <ListItemIcon>
                {list.icon}
              </ListItemIcon>
              <ListItemText primary={list.name} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItemButton onClick={handleOpen}>
          <ListItemIcon>
          <VerifiedRoundedIcon sx={{color:"#293184"}} />
          </ListItemIcon>
          <ListItemText primary="Autorizaciones" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {rutero.online.auth.map((list, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                    sx={{pl: 4 }}
                    onClick={ ()=> navigate(`${list.url}`) }
                  >
                  <ListItemIcon>
                    {list.icon}
                  </ListItemIcon>
                  <ListItemText primary={list.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Collapse>
      </List>

      <Divider />

      <List>
        {rutero.online.ti.map((list, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => navigate(`${list.url}`)}>
              <ListItemIcon>
                {list.icon}
              </ListItemIcon>
              <ListItemText primary={list.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider/>

      <List>
        {rutero.online.digitalizacion.map((list, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => navigate(`${list.url}`)}>
              <ListItemIcon>
                {list.icon}
              </ListItemIcon>
              <ListItemText primary={list.name}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <img src={working} alt="image working" style={{backgroundColor:"#e4e4e7", width:230 }}/>
    </Drawer>
  )
}

export default index
