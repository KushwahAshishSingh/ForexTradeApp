import {
    ADMIN_USERS,
    ADMINUSER_SUCCESS, GET_ADMINUSER, GET_ADMINUSER_SUCCESS, GET_ADMINUSER_FAIL
} from "./actionType"

const initialState = {
    error: "",
    loading: false,
    User: []
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADMIN_USERS:
            state = {
                ...state,
                loading: true,
            }
            break
        case ADMINUSER_SUCCESS:
            state = {
                ...state,
                loading: false,
            }
            break
        case GET_ADMINUSER:
            state = {
                ...state,
                loading: false,
            }
            break
        case GET_ADMINUSER_SUCCESS:
            return {
                ...state,
                User: action.payload,
            }

        case GET_ADMINUSER_FAIL:
            return {
                ...state,
                error: action.payload,
            }
        default:
            state = { ...state }
            break
    }
    return state
}

export default UserReducer
