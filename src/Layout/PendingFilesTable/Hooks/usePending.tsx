import { useContext, useEffect, useState } from "react";
import { GeneralValuesContext } from "../../../Context/GeneralValuesContext";
import { showTablePending } from "../../../services/showTable.routes";

export const usePending = () => {
  const [row, setRow] = useState([]);
  const { setPreLoad, handleCloseModalAuth } = useContext(GeneralValuesContext);

  const handleGetTableData = async () => {
    try {
      setPreLoad(true);
      const table = await showTablePending();
      const rows = await table?.data.dataInfo;
      setRow(rows ? rows : []);
      // console.log("row table--: ", rows);
    } catch (error) {
      console.log("error: ", error);
    } finally {
      setPreLoad(false);
    }
  };

  useEffect(() => {
    handleGetTableData();
  }, [handleCloseModalAuth]);

  useEffect(() => {
    handleGetTableData();
  }, []);

  return {
    row,
  };
};
