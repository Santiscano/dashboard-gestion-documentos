import { Button } from "@mui/material";
import { useContext, useState } from "react";
import { editFile } from "../../../../services/Files.routes";
import InputsSelectCenterCost from "../common/InputsSelectCenterCost";
import { GeneralValuesContext } from "./../../../../Context/GeneralValuesContext";

function Approve({
  user,
  newAssigned,
  setRedirectTo,
  activitySelect,
  setActivitySelect,
}: any) {
  console.log("user: ", user);
  const [state, setState] = useState<any>();
  const [area, setArea] = useState<any>();
  const [subArea, setSubArea] = useState<any>();
  const [centerCost, setCenterCost] = useState("");
  const [comments, setComments] = useState("");

  const {
    setPreLoad,
    handleOpenModalAuth,
    handleCloseModalAuth,
    rows,
    setRows,
    handleUpdateRows,
  } = useContext(GeneralValuesContext);

  const handleState = (e: any) => setState(e.target.value);
  const handleArea = (e: any) => {
    setArea(e.target.value);
    setSubArea("");
    setCenterCost("");
  };
  const handleSubArea = (e: any) => {
    setSubArea(e.target.value);
    setCenterCost("");
  };
  const handleCenter = (e: any) => setCenterCost(e.target.value);
  const handleComments = (e: any) => setComments(e.target.value);

  const handleClear = () => {
    setActivitySelect("");
    setRedirectTo("");
    setArea("");
    setComments("");
    setPreLoad(false);
    handleOpenModalAuth();
  };

  const handleSubmit = async (e: any) => {
    try {
      setPreLoad(true);
      e.preventDefault();
      const response = await editFile(
        user.idfiles,
        user.idproviders,
        newAssigned,
        activitySelect,
        user.files_type,
        user.files_registered,
        user.files_cost_center == null
          ? `${area}${subArea}${centerCost}`
          : user.files_cost_center,
        user.files_code_accounting,
        user.files_code_treasury,
        user.files_price,
        user.files_account_type,
        user.files_account_type_number,
        comments
      );
      if (response?.status == 200) {
        handleClear();
        handleUpdateRows();
      }
    } catch (error) {
      console.log("error: ", error);
    } finally {
    }
  };

  return (
    <section className="flex flex-wrap w-full items-center justify-between ">
      <form className="w-full my-0" onSubmit={handleSubmit}>
        {user.files_cost_center == null && (
          <InputsSelectCenterCost
            valueArea={area}
            onChangeArea={handleArea}
            valueSubArea={subArea}
            onChangeSubArea={handleSubArea}
            valueCostCenter={centerCost}
            onChangeCostCenter={handleCenter}
          />
        )}
        <div className="flex mt-4 w-full">
          <textarea
            name="Comentario"
            id="comentary"
            placeholder="Es necesario dejar alguna observacion"
            className="border-neutral-300 border-2 resize-none w-full my-1 h-24"
            required
            value={comments}
            onChange={handleComments}
          ></textarea>
        </div>

        <div className="flex mt-1 w-full">
          <Button
            type="submit"
            variant="contained"
            color="success"
            sx={{ mx: 2, my: 1 }}
          >
            Aprobar
          </Button>
        </div>
      </form>
    </section>
  );
}

export default Approve;
