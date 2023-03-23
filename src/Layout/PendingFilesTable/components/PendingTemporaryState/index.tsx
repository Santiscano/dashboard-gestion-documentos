import { Button, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import InputSelectState from "../../../../components/common/InputSelectState";
import { get } from "../../../../components/tools/SesionSettings";
import { editFile } from "../../../../services/Files.routes";

function PendingTemporaryState(user: any) {
  const [state, setState] = useState("");
  const [comments, setComments] = useState("");

  const handleState = (e: SelectChangeEvent) => setState(e.target.value);
  const handleComments = (e: any) => setComments(e.target.value);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const newState = {
      ...user,
      idfiles_states: state,
      tracking_observation: comments,
      userSession: get("idusers"),
    };
    console.log("newState: ", newState);
    // const response = await editFile(user);
    // console.log(response);
  };

  return (
    <section className="flex flex-wrap w-full items-center justify-between ">
      <form className="flex mt-4 w-full" onSubmit={handleSubmit}>
        <article className="md:w-1/2">
          <InputSelectState
            title="Cambiar estado"
            placeholder="seleccione el estado"
            value={state}
            onChange={handleState}
            required
            itemDefault="Selecciona un estado"
          />
        </article>
        <article className="inline-block md: w-1/2">
          <textarea
            name="Comentario"
            id="comentary"
            placeholder="Es necesario dejar alguna observacion"
            className="border-neutral-300 border-2 resize-none w-full my-3 h-24"
            required
            value={comments}
            onChange={handleComments}
          ></textarea>
        </article>
        <Button
          type="submit"
          variant="contained"
          color="success"
          sx={{ mx: 2, my: 1 }}
        >
          Cambiar
        </Button>
      </form>
    </section>
  );
}

export default PendingTemporaryState;
