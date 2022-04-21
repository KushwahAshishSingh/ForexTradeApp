import {
    SAM_USER,
    SAM_SUCCESS, GET_SAM, GET_SAM_SUCCESS, GET_SAM_FAIL
} from "./actionType"

export const SamUser = (user, history) => {
    return {
        type: SAM_USER,
        payload: { user, history },
    }
}

export const SamSuccess = user => {
    return {
        type: SAM_SUCCESS,
        payload: user,
    }
}

export const getSam = () => ({
    type: GET_SAM,
})

export const getSamSuccess = products => ({
    type: GET_SAM_SUCCESS,
    payload: products,
})

export const getSamFail = error => ({
    type: GET_SAM_FAIL,
    payload: error,
})



