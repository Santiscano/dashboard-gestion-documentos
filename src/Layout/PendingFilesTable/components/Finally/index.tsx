import { Button } from "@mui/material";
import { useContext, useState } from "react";
import { editFile } from "../../../../services/Files.routes";
import { GeneralValuesContext } from "./../../../../Context/GeneralValuesContext";

function Finally({ user, endCicle, endActivitySelect }: any) {
  const { setPreLoad, handleOpenModalAuth, handleUpdateRows } =
    useContext(GeneralValuesContext);
  const [comments, setComments] = useState("");

  const handleComments = (e: any) => setComments(e.target.value);
  const handleSubmit = async (e: any) => {
    try {
      setPreLoad(true);
      e.preventDefault();
      const response = await editFile(
        user.idfiles,
        user.idproviders,
        1,
        endActivitySelect,
        user.files_type,
        user.files_registered,
        user.files_cost_center,
        user.files_code_accounting,
        user.files_code_treasury,
        user.files_price,
        user.files_account_type,
        user.files_account_type_number,
        comments
      );
      if (response?.status == 200) {
      }
    } catch (error) {
      console.log("error: ", error);
    } finally {
      setPreLoad(false);
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
            color="success"
            sx={{ mx: 2, my: 1 }}
          >
            Aprobar - Finalizar
          </Button>
        </div>
      </form>
    </section>
  );
}

export default Finally;
