import Button from "../../components/common/Button";
import TextFieldOutlined from "../../components/common/TextFieldOutline";
import { useContext, useState } from "react";
import { GeneralValuesContext } from "./../../Context/GeneralValuesContext";
import {
  SearchWithDocument,
  SearchWithSettled,
} from "./../../services/SearchFile.routes";
import LoadingMUI from "../../components/common/LoadingMUI";
import InputSelect from "./../../components/common/InputSelect";
import { optionAccountType } from "../../components/tools/OptionsValuesSelects";
import { SelectChangeEvent } from "@mui/material/Select";

// const optionAccountType = ["CUENTA COBRO", "FACTURA PROVEEDOR"];

function AttachFile() {
  const [settled, setSettled] = useState("");
  const [document, setDocument] = useState({
    type: "",
    number: "",
  });
  const { setPreLoad } = useContext(GeneralValuesContext);
  const onType = (newValue: any) => {
    setDocument({
      ...document,
      type: newValue,
    });
  };
  const onNumber = (newValue: any) => {
    setDocument({
      ...document,
      number: newValue,
    });
  };
  const onClean = () => {
    setDocument({
      ...document,
      type: "",
      number: "",
    });
  };

  // const handleAccountType = (e: SelectChangeEvent) => {
  //   onType(e.target.value);
  // };

  const handleSubmitSettled = async (e: any) => {
    try {
      console.log("se activo handleSubmitSettled");
      setPreLoad(true);
      e.preventDefault();
      const searchFile = await SearchWithSettled(settled);
    } catch (error) {
      console.log("error: ", error);
    } finally {
      setPreLoad(false);
    }
  };

  const handleSubmitDocumentType = async (e: any) => {
    try {
      setPreLoad(true);
      e.preventDefault();
      const searchFile = await SearchWithDocument(
        document.type,
        document.number
      );
    } catch (error) {
      console.log("error: ", error);
    } finally {
      setPreLoad(false);
      onClean();
    }
  };

  return (
    <div className="layout">
      <div>
        <LoadingMUI />
        <section className="layout-section">
          <div className="layout-left">
            <div className="container__createFiling">
              <h3 className="createFiling">Crear Nuevo Radicado</h3>
            </div>
            <article className="filing">
              <h2 className="mt-4 font-extrabold text-2xl ">
                Filtrar por radicado
              </h2>
              <form onSubmit={handleSubmitSettled}>
                <div className="md:flex md:flex-wrap">
                  <article className="md:w-1/2">
                    <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white">
                      Numero de Radicado
                    </label>
                    <TextFieldOutlined
                      type={"text"}
                      label={"Radicado"}
                      value={settled}
                      setValue={setSettled}
                      required
                      // iconEnd={<PermIdentityRoundedIcon />}
                    />
                  </article>
                </div>
                <Button name="Buscar Archivo" />
              </form>
              <h2 className="mt-12 font-extrabold text-2xl ">
                Filtrar por Tipo y Numero de Cuenta
              </h2>
              <form onSubmit={handleSubmitDocumentType}>
                <div className="md:flex md:flex-wrap">
                  <article className="md:w-1/2">
                    <InputSelect
                      type={"text"}
                      title="Tipo de cuenta"
                      placeholder="cuenta de"
                      required
                      value={document.type}
                      // onChange={handleAccountType}
                      onChange={(e: SelectChangeEvent) =>
                        onType(e.target.value)
                      }
                      itemDefault="selecciona el tipo de cuenta"
                      items={optionAccountType}
                    />
                  </article>
                  <article className="md:w-1/2">
                    <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white">
                      Numero de Documento
                    </label>
                    <TextFieldOutlined
                      type={"text"}
                      label={"Numero"}
                      value={document.number}
                      setValue={onNumber}
                      required
                      // iconEnd={<PermIdentityRoundedIcon />}
                    />
                  </article>
                </div>
                <Button name="Buscar Archivo" />
              </form>
            </article>
          </div>
        </section>
      </div>

      <h3>hacer funcionales los filtros</h3>
      <h3>
        mas abajo cuando se encuentre un componente que muestre que se tiene y
        la opcion de adjuntar cosas nuevas con comentario
      </h3>
    </div>
  );
}

export default AttachFile;
