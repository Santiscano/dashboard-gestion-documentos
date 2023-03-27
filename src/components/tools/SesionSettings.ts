import { Roles, DisplayRoles } from '../../interfaces/Roles';
import { validateUserFirebase } from './../../services/Firebase.routes';

export const roles:Roles = Object.freeze({
  Proveedor   : 1,
  Radicacion  : 2,
  AuditorGH   : 3,
  AuditorCRTL : 4,
  AuditorRG   : 5,
  Gerencia    : 6,
  Contaduria  : 7,
  Tesoreria   : 8,
  AuditorTI   : 9,
  Eliminar    : 10,
});

const roleDisplay:DisplayRoles = {
  1:"Proveedor",
  2:"Radicacion",
  3:"Auditor Gestion Humana",
  4:"Auditor Control",
  5:"Auditor Riesgos",
  6:"Gerencia",
  7:"Contaduria",
  8:"Tesoreria",
  9:"Tecnologia & Informacion",
  10:"Eliminar",
}

export function set(key:string, item:string): void {
  sessionStorage.setItem(key, item);
}

export function get(key:string): string | null | undefined {
  return sessionStorage.getItem(key) ?? '';
}

export function remove(item:string): void {
  sessionStorage.removeItem(item);
}

export function removeAll(): void {
  sessionStorage.clear();
}

export function getJWT(key = null):any {
//   const jwt = jwt_decode(get("jwt"));
//   return key === null ? jwt : getJWT.data[key];
}

export function viewDisplayRol(role: number): string {
  // @ts-ignore
  return roleDisplay[role] || "role desconocido"
}

// export function navigationLiks() {
//   if (!session()) {
//     return RoutesListNavigation.offline
//   } else {
//     const jwt = getJWT();

//     return jwt.data.idroles === 1
//       ? RoutesListNavigation.online.provider
//       : jwt.data.idroles === 2
//       ? RoutesListNavigation.online.settling
//       : jwt.data.idroles === 3
//       ? RoutesListNavigation.online.manager
//       : jwt.data.idroles === 4
//       ? RoutesListNavigation.online.accounting
//       : jwt.data.idroles === 5
//       ? RoutesListNavigation.online.treasury
//       : jwt.data.idroles === 6
//       ? RoutesListNavigation.online.ti
//       : [];
//   }
// }

/**
 * headers para objetos
 * @returns
 */
export function getHeader() {
  return {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ` + get("accessToken"),
    },
  };
}

/**
 * headers para pdf y fotos
 * @returns
 */
export function getHeaderMultipart() {
  return {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ` + get("accessToken"),
    },
  };
}

/**
 * @param param0 lista de roles que podran ver el resultado
 * @param param1 rol que esta en sesion y quiere observar
 * ?listRoles toma el array de roles su valor, tener en cuenta que tambien se puede utilizar Object.keys pero en este caso seria un string
 * ?doTheseRolExist es el nuevo array que filtro los roles no existentes de listRoles en allowedRolesList y despues de limpiar con find solo toma el primer valor que coincide
 * lo anterior fue para limpiar los roles prosiblemente falsos
 * @returns toma el nuevo array y devuelve true o false si el rol tiene o no permisos de ver
 * conclusion la lista de roles permitidos el rol actual y dice si tiene permisos
 */
// export const validateHasRoleAllowedPromise = async (allowedRolesList:any[]): Promise<boolean> => {
//   const response = await validateUserFirebase();
//   // @ts-ignore
//   const idrole = await response?.data.idroles;
//   console.log('idrole promise: ', idrole);
//   if(!idrole || !allowedRolesList){
//     return false;
//   } else {
//     const listRoles = Object.values(roles);
//     const doTheseRolExist = allowedRolesList.filter((role) =>
//     listRoles.find((item) => item === role)
//     );
//     console.log('includes: ', doTheseRolExist.includes(parseInt(idrole)));
//     return doTheseRolExist.includes(parseInt(idrole));
//   }
// };
export const validateHasRoleAllowed = (allowedRolesList:any[]):boolean => {
  const idrole = get("idroles");
  // console.log('idrole notPromise: ', idrole);
  if(!idrole || !allowedRolesList){
    return false;
  } else {
    const listRoles = Object.values(roles);
    const doTheseRolExist = allowedRolesList.filter((role) =>
    listRoles.find((item) => item === role)
    );
    return doTheseRolExist.includes(parseInt(idrole));
  }
};

export function session() {
  return Boolean(get("accessToken"));
}

/**
 *
 * @returns comprueba si el valor de sesion storage es undefinend o null y de ser asi retorna false
 * @accessToken en el sesionStorage es undefined o null. si es asi devuelve true
 */
// export function session() {
//   // @ts-ignore
//   return [undefined, null].includes(get("accessToken")) ? false : true;
// }



