import {
    SAS_USER,
    SAS_SUCCESS, GET_SAS_SUCCESS, GET_SAS_FAIL
} from "./actionType"

const initialState = {
    error: "",
    loading: false,
    sasanager: []
}

const SuperAdminSupportReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAS_USER:
            state = {
                ...state,
                loading: true,
            }
            break
        case SAS_SUCCESS:
            state = {
                ...state,
                loading: false,
            }
            break
        case GET_SAS_SUCCESS:
            return {
                ...state,
                sasanager: action.payload,
            }

        case GET_SAS_FAIL:
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

export default SuperAdminSupportReducer
