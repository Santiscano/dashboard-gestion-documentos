import BackupTableIcon from '@mui/icons-material/BackupTable';
import EditIcon from '@mui/icons-material/Edit';
import LogoDevIcon from '@mui/icons-material/LogoDev';

export default {
  online: {
    admin: [
      {
        name: "Provedores",
        url: "/admin/provider",
        icon: <BackupTableIcon />,
      },
    ],
    ti: [
      {
        name: "Administracion TI",
        url: "/admin/ti",
        icon: <LogoDevIcon/>,
      }
    ]
  },
};
