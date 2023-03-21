import React from "react";
import { validateHasRoleAllowed } from "../components/tools/SesionSettings";

/**
 *
 * @param param0 children que se mostrara
 * @param param1 lista de roles que podran ver el resultado
 * @param param2 rol que esta en sesion y quiere observar
 * @returns componente
 */
function WithRoleAllowed({ children, allowedRolesList, isComponent }: any) {
  const rendering = isComponent ? <div>te redireccionare</div> : null;
  return validateHasRoleAllowed(allowedRolesList) ? <>{children}</> : rendering;
}

export default WithRoleAllowed;

/**
 * esto esta sin terminar y la logica es que si es componente entonces haga la redirecion
 * pero debo asimilarlo a la logica del otro middleware que valida y lleva al outlet
 */
