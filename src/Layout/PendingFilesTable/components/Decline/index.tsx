import { Button } from "@mui/material";
import { useContext, useState } from "react";
import { get } from "../../../../components/tools/SesionSettings";
import { editFile } from "../../../../services/Files.routes";
import { GeneralValuesContext } from "./../../../../Context/GeneralValuesContext";

function Decline(user: any) {
  const [comments, setComments] = useState("");
  const { handleOpenModalAuth, handleUpdateRows } =
    useContext(GeneralValuesContext);

  const handleClear = () => {
    user.setActivitySelect("");
    setComments("");
    handleOpenModalAuth();
  };
  const handleComments = (e: any) => setComments(e.target.value);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await editFile(
      user.user.idfiles,
      user.user.idproviders,
      null,
      user.activitySelect,
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
      handleClear();
      handleUpdateRows();
    }
  };

  return (
    <section className="flex flex-wrap w-full items-center justify-between ">
      <form className="w-full my-0" onSubmit={handleSubmit}>
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
            color="error"
            sx={{ mx: 2, my: 1 }}
          >
            Rechazar
          </Button>
        </div>
      </form>
    </section>
  );
}

export default Decline;
