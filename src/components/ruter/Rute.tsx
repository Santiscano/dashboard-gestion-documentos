import BackupTableIcon from '@mui/icons-material/BackupTable';
import EditIcon from '@mui/icons-material/Edit';

export default {
  online: {
    admin: [
      {
        name: "provedores",
        url: "/",
        icon: <BackupTableIcon />,
      },
      {
        name: "Agregar/Editar Adjuntos",
        navigate: "/agregar-adjuntos",
        icon: <EditIcon />,
      },
    ],
  },
};
