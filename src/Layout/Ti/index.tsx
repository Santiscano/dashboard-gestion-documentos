import { useState } from 'react';
import './TI.css';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { createUser } from '../../services/Firebase.routes'
import { TabPanelProps } from '../../interfaces/TabPanel';
import { createRol } from '../../services/Roles.routes';
import TextFieldOutlined from '../../components/common/TextFieldOutline';
import Button from '../../components/common/Button';
import { handleSubmitCreateRol } from './Submits';

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function TI() {
  const [showValue, setShowValue] = useState(0);
  const [rolName, setRolName] = useState('');
  const [rolDescription, setRolDescription] = useState('')

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setShowValue(newValue);
  };

  return (
    <div className='layout'>
      <section className='layout-section'>
        <div className='layout-left'>
          <div className='container__createFiling'>
            <h3 className='createFiling'>Administracion & Gestion de Plataforma TI</h3>
          </div>
          <article className='filing-ti'>
            <Box sx={{ width: '100%'}}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                  value={showValue}
                  onChange={handleChange}
                  aria-label="Area TI"
                  variant='scrollable'
                >
                  <Tab label="Crear Rol" {...a11yProps(0)} />
                  <Tab label="Crear Cedi" {...a11yProps(1)} />
                  <Tab label="Crear Usuario" {...a11yProps(2)} />
                  <Tab label="Crear Area" {...a11yProps(3)} />
                  <Tab label="Crear sub Area" {...a11yProps(4)} />
                  <Tab label="Crear Centro de costos" {...a11yProps(5)} />
                </Tabs>
              </Box>
              <TabPanel value={showValue} index={0}>
                <form onSubmit={() => handleSubmitCreateRol(event, rolName, setRolName, rolDescription, setRolDescription)}>
                <div className='md:flex md:flex-wrap'>
                  <article className='md:w-1/2' >
                    <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white"
                      >Nombre del Rol</label>
                      <TextFieldOutlined
                        type={"text"}
                        label={"Nombre Rol"}
                        value={rolName}
                        setValue={setRolName}
                        required
                        // iconEnd={}
                      />
                  </article>
                  <article className='md:w-1/2' >
                    <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white"
                      >Descripcion del rol</label>
                      <TextFieldOutlined
                        type={"text"}
                        label={"Descripcion del Rol"}
                        value={rolDescription}
                        setValue={setRolDescription}
                        required
                        // iconEnd={}
                      />
                  </article>
                </div>
                <Button name="Crear Rol"/>
                </form>
              </TabPanel>
              <TabPanel value={showValue} index={1}>
                formulario Cedi
              </TabPanel>
              <TabPanel value={showValue} index={2}>
                formulario Usuario
              </TabPanel>
              <TabPanel value={showValue} index={3}>
                formulario Area
              </TabPanel>
              <TabPanel value={showValue} index={4}>
                formulario SubArea
              </TabPanel>
              <TabPanel value={showValue} index={5}>
                formulario Centro de costos
              </TabPanel>
            </Box>
          </article>
        </div>
      </section>
    </div>
  )
}

export default TI;
