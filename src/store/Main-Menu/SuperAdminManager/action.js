import {
    SAM_USER,
    SAM_SUCCESS,
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



