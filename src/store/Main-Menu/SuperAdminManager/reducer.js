import {
    SAM_USER,
    SAM_SUCCESS,
} from "./actionType"

const initialState = {
    error: "",
    loading: false,
}

const SuperAdminManagerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAM_USER:
            state = {
                ...state,
                loading: true,
            }
            break
        case SAM_SUCCESS:
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

export default SuperAdminManagerReducer
