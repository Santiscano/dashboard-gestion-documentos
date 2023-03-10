import { Roles, DisplayRoles } from '../../interfaces/Roles';

export const roles:Roles = {
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
}

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

export function session() {
  return Boolean(get("accessToken"));
}

/**
 *
 * @returns comprueba si el valor almacenado en la clave
 * @accessToken en el sesionStorage es undefined o null. si es asi devuelve true
 */
// export function session() {
//   // @ts-ignore
//   return [undefined, null].includes(get("accessToken")) ? false : true;
// }



