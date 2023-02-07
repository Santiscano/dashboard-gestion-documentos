import { types } from "../../types/types";


export const authReducer = ( state:any = {}, action:any) => {

    switch ( action.type) {
        case types.login:
            return {
                ...state,
                logged: true,
                name: action.payload
            };

        case types.logout:
            return {
                ...state,
                logged: false,
                name: null
            };
        
        default:
            return state;
    }

}