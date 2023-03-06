import DataTableAllFiles from '../../components/common/DataTableAllFiles';
import { useEffect, useState } from 'react';
import { showTableAllFiles } from '../../services/showTable.routes';

function AllFilesTable() {
  const [row, setRow] = useState([]);

  const handleGetTableData = async () => {
    const table = await showTableAllFiles();
    const rows = await table?.data.dataInfo;
    setRow(rows ? rows : []);
    console.log('row table--: ', rows);
  };

  useEffect(() => {
    handleGetTableData();
  },[])
  return (
    <div className='layout'>
      <section className='layout-section'>
          <div className='layout-left'>
            <h3 className='container__createFiling createFiling'>Todos los archivos</h3>
            <div className='filing'>
              <section className='viewTableEdit'>
                <DataTableAllFiles
                  row={row}
                />
              </section>
            </div>
          </div>
        </section>
    </div>
  )
}

export default AllFilesTable;
