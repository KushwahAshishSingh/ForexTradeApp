import {
    STAFF_USERS,
    STAFFUSER_SUCCESS, GET_STAFFUSER, GET_STAFFUSER_SUCCESS, GET_STAFFUSER_FAIL
} from "./actionType"

export const StaffUsers = (user, history) => {
    return {
        type: STAFF_USERS,
        payload: { user, history },
    }
}

export const StaffUserSuccess = user => {
    return {
        type: STAFFUSER_SUCCESS,
        payload: user,
    }
}

export const getStaff = () => ({
    type: GET_STAFFUSER,
})

export const getStaffUserSuccess = products => ({
    type: GET_STAFFUSER_SUCCESS,
    payload: products,
})

export const getStaffUserFail = error => ({
    type: GET_STAFFUSER_FAIL,
    payload: error,
})



