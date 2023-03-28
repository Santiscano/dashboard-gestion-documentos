import { Button } from "@mui/material";
import { useContext, useState } from "react";
import { editFile } from "../../../../services/Files.routes";
import { GeneralValuesContext } from "./../../../../Context/GeneralValuesContext";

function Return(user: any) {
  const [comments, setComments] = useState("");
  const { handleUpdateRows } = useContext(GeneralValuesContext);

  const handleComments = (e: any) => setComments(e.target.value);
  const handleClear = () => {
    user.setActivitySelect("");
    user.setRedirectTo("");
    setComments("");
  };
  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault();
      const response = await editFile(
        user.user.idfiles,
        user.user.idproviders,
        user.redirectTo,
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
            color="secondary"
            sx={{ mx: 2, my: 1 }}
          >
            Re-Asignar
          </Button>
        </div>
      </form>
    </section>
  );
}

export default Return;