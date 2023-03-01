import RoutesListNavigation from '../../routes/Rute';
import { Roles, DisplayRoles } from '../../interfaces/Roles';

const roles:Roles = {
  provider    : 1,
  settling    : 2,
  auditor     : 3,
  manager     : 4,
  accounting  : 5,
  treasury    : 6,
  TI          : 7,
}

const roleDisplay:DisplayRoles = {
  1:"Proveedor",
  2:"Radicacion",
  3:"Auditoria",
  4:"Gerencia",
  5:"Contaduria",
  6:"Tesoreria",
  7:"Tecnoligia & Informacion",
}

export function set(key:string, item:string): void {
  sessionStorage.setItem(key, item);
}

export function get(item:string): string | null | undefined {
  return sessionStorage.getItem(item) ?? '';
}

export function remove(item:string): void {
  sessionStorage.removeItem(item);
}





export function getJWT(key = null):any {
  // const jwt = jwt_decode(get("jwt"));
  // return key === null ? jwt : getJWT.data[key];
}

export function getRol(rol:any, display = false): any {
  if (!display) {
    // @ts-ignore
    return roles[rol];
  }
  // @ts-ignore
  return roleDisplay[rol];
}

export function navigationLiks() {
  if (!session()) {
    return RoutesListNavigation.offline
  } else {
    const jwt = getJWT();

    return jwt.data.idroles === 1
      ? RoutesListNavigation.online.provider
      : jwt.data.idroles === 2
      ? RoutesListNavigation.online.settling
      : jwt.data.idroles === 3
      ? RoutesListNavigation.online.manager
      : jwt.data.idroles === 4
      ? RoutesListNavigation.online.accounting
      : jwt.data.idroles === 5
      ? RoutesListNavigation.online.treasury
      : jwt.data.idroles === 6
      ? RoutesListNavigation.online.ti
      : [];
  }
}

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
  return !!get("accessToken");
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



