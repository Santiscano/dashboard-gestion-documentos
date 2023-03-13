import HistoryEduRoundedIcon from '@mui/icons-material/HistoryEduRounded';
import PendingActionsRoundedIcon from '@mui/icons-material/PendingActionsRounded';
import ScreenSearchDesktopRoundedIcon from '@mui/icons-material/ScreenSearchDesktopRounded';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import TopicRoundedIcon from '@mui/icons-material/TopicRounded';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';


export default {
  online: {
    settling: [
      {
        name: "Generar",
        url: "/dashboard/settled",
        icon: <HistoryEduRoundedIcon sx={{color:"#293184"}} />,
      },
      {
        name: "Adjuntar",
        url: "/dashboard/attach",
        icon: <AttachEmailIcon sx={{color:"#293184"}} />,
      },
    ],
    auth: [
      {
        name: "Pendientes",
        url: "/dashboard/pendding",
        icon: <PendingActionsRoundedIcon sx={{color:"#293184"}}/>,
      },
      {
        name: "Todos los archivos",
        url: "/dashboard/all-files",
        icon: <TopicRoundedIcon sx={{color:"#293184"}}/>,
      },
    ],
    ti: [
      {
        name: "Administracion TI",
        url: "/dashboard/ti",
        icon: <LogoDevIcon sx={{color:"#293184"}} />,
      }
    ],
    digitalizacion: [
      {
        name: "Digitalizacion",
        url: "jsx",
        icon: <LogoDevIcon sx={{color:"#293184"}} />,
      },
    ],


  },
  offline: [

  ]
};
