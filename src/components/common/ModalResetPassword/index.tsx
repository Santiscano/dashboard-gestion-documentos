import { useState, useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "animate.css";
import TextFieldOutlined from "../TextFieldOutline";

import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { changePassword } from "../../../services/Firebase.routes";
import { GeneralValuesContext } from "./../../../Context/GeneralValuesContext";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70vw",
  height: { xs: "62vh", md: "45vh" },
  overflow: "scroll",
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  zIndex: "1",
};

export default function ModalResetPassword(props: any) {
  const [email, setEmail] = useState("");
  const [responseResetInvalid, setResponseResetInvalid] = useState("");
  const [responseReset, setResponseReset] = useState("");

  const { setPreLoad } = useContext(GeneralValuesContext);

  const handleSubmitResetPassword = async () => {
    try {
      setPreLoad(true);
      const response = await changePassword(email);
      if (response?.data.data?.code === "auth/invalid-email") {
        setResponseResetInvalid("email invalido");
      }
      if(response?.data.message === "Verificar el correo: david.giraldo@teclab.com.co") {
        setResponseReset(response.data.message);
      }
    } catch (error) {
      console.log("error: ", error);
    } finally {
      setPreLoad(false);
    }
  };

  useEffect(() => {
    return () => {
      setEmail("");
      setResponseResetInvalid("");
    };
  }, []);

  return (
    <>
      <Modal
        open={props.open}
        onClose={props.close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="animate__animated animate__fadeIn"
      >
        <Box sx={style}>
          {responseReset == "" ? (
            <>
              <h3 className="createFiling">Reestablecer contraseña</h3>
              <div className="md:flex md:flex-wrap">
                <article className="w-full">
                  <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white">
                    Te enviaremos un correo donde podras reestablecer la
                    contraseña
                  </label>
                  <TextFieldOutlined
                    type={"email"}
                    label={"Correo Electronico"}
                    value={email}
                    setValue={setEmail}
                    required
                    iconEnd={<EmailRoundedIcon />}
                  />
                </article>
                {responseResetInvalid && <span className='form-login-error'>Revisa bien, el correo no existe en la base de datos</span>}
              </div>
              <button
                className="w-28 py-2 mt-6  bg-blue-800 text-white rounded cursor-pointer"
                onClick={handleSubmitResetPassword}
              >
                Recuperar
              </button>
            </>
          ) : (
            <>
              <div className="main-container">
                <div className="check-container">
                  <div className="check-background">
                    <svg
                      viewBox="0 0 65 51"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 25L27.3077 44L58.5 7"
                        stroke="white"
                        stroke-width="13"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="check-shadow"></div>
                </div>
              </div>
              <h3 className="animate__animated animate__fadeIn">
                {responseReset}
              </h3>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
}
