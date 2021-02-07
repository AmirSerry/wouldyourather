export const SET_USER_AUTH = 'SET_USER_AUTH';
export const UNSET_USER_AUTH = 'UNSET_USER_AUTH';

export function setUserAuth(id){
    return {
        type: SET_USER_AUTH,
        id
    }
}

export function unsetUserAuth(){
    return {
        type: UNSET_USER_AUTH
    }
}