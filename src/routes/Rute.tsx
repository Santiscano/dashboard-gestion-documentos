import BackupTableIcon from '@mui/icons-material/BackupTable';
import EditIcon from '@mui/icons-material/Edit';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import ReceiptRoundedIcon from '@mui/icons-material/ReceiptRounded';
import ScreenSearchDesktopRoundedIcon from '@mui/icons-material/ScreenSearchDesktopRounded';

export default {
  online: {
    settling: [
      {
        name: "Generar Radicado",
        url: "/dashboard/radicados",
        icon: <ReceiptRoundedIcon sx={{color:"#293184"}} />,
      },
      {
        name: "Provedores",
        url: "/dashboard/radicados",
        icon: <LocalShippingRoundedIcon sx={{color:"#293184"}} />,
      },

      {
        name: "Auditar Radicado",
        url: "/dashboard/updates",
        icon: <ScreenSearchDesktopRoundedIcon sx={{color:"#293184"}} />,
      },
    ],
    ti: [
      {
        name: "Administracion TI",
        url: "/dashboard/ti",
        icon: <LogoDevIcon sx={{color:"#293184"}} />,
      }
    ],
    provider: [],
    auditor: [],
    manager: [],
    accounting: [],
    treasury: [],

  },
  offline: [

  ]
};
