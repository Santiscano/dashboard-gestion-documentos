import DataTablePending from "../../components/common/DataTablePending";
import { useEffect, useState } from "react";
import { showTablePending } from "../../services/showTable.routes";
import { get } from "../../components/tools/SesionSettings";

function PendingFilesTable() {
  const [row, setRow] = useState([]);

  const handleGetTableData = async () => {
    try {
      const table = await showTablePending();
      const rows = await table?.data.dataInfo;
      setRow(rows ? rows : []);
      console.log("row table--: ", rows);
    } catch (error) {
      console.log("error: ", error);
    } finally {
    }
  };

  useEffect(() => {
    handleGetTableData();
  }, []);

  return (
    <div className="layout">
      <section className="layout-section">
        <div className="layout-left">
          <h3 className="container__createFiling createFiling">
            Pendientes por Autorizar
          </h3>
          <h3 className="container__createFiling createFiling">
            el boton de abrir aun no muestra la info necesaria
          </h3>
          <div className="filing">
            <section className="viewTableEdit">
              <DataTablePending row={row} />
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PendingFilesTable;
