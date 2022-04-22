import {
    SAM_USER,
    SAM_SUCCESS, GET_SAM_FAIL, GET_SAM_SUCCESS
} from "./actionType"

const initialState = {
    error: "",
    loading: false,
    samanager: []
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
        case GET_SAM_SUCCESS:
            return {
                ...state,
                samanager: action.payload,
            }

        case GET_SAM_FAIL:
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

export default SuperAdminManagerReducer
