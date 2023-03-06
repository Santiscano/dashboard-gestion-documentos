import DataTableAllFiles from '../../components/common/DataTableAllFiles';
import { useEffect } from 'react';

function AllFilesTable() {
  const rows = async () => {
    const response = await
  };

  useEffect(() => {
    rows();
  },[])
  return (
    <div className='layout'>
      <section className='layout-section'>
          <div className='layout-left'>
            <h3 className='container__createFiling createFiling'>Todos los archivos</h3>
            <div className='filing'>
              <section className='viewTableEdit'>
                <DataTableAllFiles/>
              </section>
            </div>
          </div>
        </section>
    </div>
  )
}

export default AllFilesTable;
