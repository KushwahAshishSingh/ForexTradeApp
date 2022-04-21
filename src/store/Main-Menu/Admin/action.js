import {
    ADMIN_USER,
    ADMIN_SUCCESS,
} from "./actionType"

export const AdminUser = (user, history) => {
    return {
        type: ADMIN_USER,
        payload: { user, history },
    }
}

export const AdminSuccess = user => {
    return {
        type: ADMIN_SUCCESS,
        payload: user,
    }
}



