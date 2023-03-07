import { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { getUsers } from "../../services/Users.routes";
import { useEffect } from "react";

function Testing() {
  const [value, setValue] = useState<any>();
  const [inputValue, setInputValue] = useState("");

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  // const initSubmit = async () => {
  //   const getAllUsers = await getUsers();
  //   console.log("getAllUsers: ", getAllUsers);
  //   const
  // };

  const options = [{value:"valor1", input:"vista1" }, {value:"valor2", input:"vista2"}];
  // const options = ["valor1", "valor2"]

  useEffect(() => {
    // initSubmit();
  }, []);

  return (
    <>
      <article className="md:w-1/2">
        <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white">
          Numero Documento
        </label>
        <Autocomplete
          sx={{ marginLeft: 1, my: 2 }}
          value={value.value}
          onChange={(event: any, newValue: string | null) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
            console.log(inputValue)
          }}
          id="controllable-states-demo"
          options={options}
          renderInput={(params) => <TextField {...params} label="seleccione un valor" />}
        />
      </article>
      <div>hola miundo</div>
    </>
  );
}

export default Testing;
