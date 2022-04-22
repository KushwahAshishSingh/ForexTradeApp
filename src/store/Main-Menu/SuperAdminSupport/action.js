import {
    SAS_USER,
    SAS_SUCCESS, GET_SAS, GET_SAS_SUCCESS, GET_SAS_FAIL
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

export const getSas = () => ({
    type: GET_SAS,
})

export const getSasSuccess = products => ({
    type: GET_SAS_SUCCESS,
    payload: products,
})

export const getSasFail = error => ({
    type: GET_SAS_FAIL,
    payload: error,
})



