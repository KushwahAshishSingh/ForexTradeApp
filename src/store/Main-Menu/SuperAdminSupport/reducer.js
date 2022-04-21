import {
    SAS_USER,
    SAS_SUCCESS,
} from "./actionType"

const initialState = {
    error: "",
    loading: false,
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
        default:
            state = { ...state }
            break
    }
    return state
}

export default SuperAdminSupportReducer
