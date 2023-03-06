import DataTablePending from '../../components/common/DataTablePending';

function PendingFilesTable() {
  return (
    <div className='layout'>
      <section className='layout-section'>
          <div className='layout-left'>
            <h3 className='container__createFiling createFiling'>Pendientes por Autorizar</h3>
            <div className='filing'>
              <section className='viewTableEdit'>
                <DataTablePending/>
              </section>
            </div>
          </div>
        </section>
    </div>
  )
}

export default PendingFilesTable;
