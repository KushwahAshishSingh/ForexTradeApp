import {
    ADMIN_USER,
    ADMIN_SUCCESS, GET_ADMIN, GET_ADMIN_SUCCESS, GET_ADMIN_FAIL
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

export const getAdmin = () => ({
    type: GET_ADMIN,
})

export const getAdminSuccess = products => ({
    type: GET_ADMIN_SUCCESS,
    payload: products,
})

export const getAdminFail = error => ({
    type: GET_ADMIN_FAIL,
    payload: error,
})



