import React from "react";
import { validateHasRoleAllowed } from "../components/tools/SesionSettings";

/**
 *
 * @param param0 children que se mostrara
 * @param param1 lista de roles que podran ver el resultado
 * @param param2 rol que esta en sesion y quiere observar
 * @returns componente
 */
function WithRoleAllowed({ children, allowedRolesList, rolRequestView }: any) {
  return validateHasRoleAllowed(allowedRolesList, rolRequestView) ? (
    <>{children}</>
  ) : null;
}

export default WithRoleAllowed;
