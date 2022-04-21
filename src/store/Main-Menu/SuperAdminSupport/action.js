import {
    SAS_USER,
    SAS_SUCCESS,
} from "./actionType"

export const SasUser = (user, history) => {
    return {
        type: SAS_USER,
        payload: { user, history },
    }
}

export const SasSuccess = user => {
    return {
        type: SAS_SUCCESS,
        payload: user,
    }
}



