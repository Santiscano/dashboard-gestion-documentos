import { Button } from "@mui/material";
import { useState } from "react";
import { get } from "../../../../components/tools/SesionSettings";
import { editFile } from "../../../../services/Files.routes";
import InputsSelectCenterCost from "../InputsSelectCenterCost";

function Approve(user: any) {
  const [state, setState] = useState<any>();
  const [area, setArea] = useState<any>();
  const [subArea, setSubArea] = useState<any>();
  const [centerCost, setCenterCost] = useState("");
  const [comments, setComments] = useState("");

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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await editFile(
      user.user.idfiles,
      user.user.idproviders,
      Number(get("idusers")),
      state,
      user.user.files_type,
      user.user.files_registered,
      user.user.files_cost_center == null
        ? centerCost
        : user.user.files_cost_center,
      user.user.files_code_accounting,
      user.user.files_code_treasury,
      user.user.files_price,
      user.user.files_account_type,
      user.user.files_account_type_number,
      comments
    );
  };

  return (
    <section className="flex flex-wrap w-full items-center justify-between ">
      <form className="w-full my-0" onSubmit={handleSubmit}>
        {user.user.files_cost_center == null && (
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
            Cambiar
          </Button>
        </div>
      </form>
    </section>
  );
}

export default Approve;
