import { Button, SelectChangeEvent } from "@mui/material";
import { useContext, useState } from "react";
import InputsSelectCenterCost from "../InputsSelectCenterCost";
import InputSelectState from "../../../../../components/common/InputSelectState";
import { optionsCostCenter } from "../../../../../components/tools/OptionsValuesSelects";
import { get } from "../../../../../components/tools/SesionSettings";
import { editFile } from "../../../../../services/Files.routes";
import { GeneralValuesContext } from "../../../../../Context/GeneralValuesContext";

function PendingTemporaryState(user: any) {
  const [state, setState] = useState<any>();
  const [comments, setComments] = useState("");
  const { handleOpenModalAuth } = useContext(GeneralValuesContext);

  const handleState = (e: any) => setState(e.target.value);

  const handleComments = (e: any) => setComments(e.target.value);
  console.log("user: ", user.user);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await editFile(
      user.user.idfiles,
      user.user.idproviders,
      Number(get("idusers")),
      state,
      user.user.files_type,
      user.user.files_registered,
      user.user.files_cost_center,
      user.user.files_code_accounting,
      user.user.files_code_treasury,
      user.user.files_price,
      user.user.files_account_type,
      user.user.files_account_type_number,
      comments
    );
    console.log(response);
    if (response?.status == 200) {
      setState("");
      setComments("");
      handleOpenModalAuth();
    }
  };

  return (
    <section className="flex flex-wrap w-full items-center justify-between ">
      <form className="w-full my-0" onSubmit={handleSubmit}>
        <div className="flex mt-4 w-full">
          <article className="w-1/2">
            <InputSelectState
              title="Cambiar estado"
              placeholder="seleccione el estado"
              value={state}
              onChange={handleState}
              required
              itemDefault="Selecciona un estado"
            />
          </article>
        </div>
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

export default PendingTemporaryState;
