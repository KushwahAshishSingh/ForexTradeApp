import {
    ADMIN_USER,
    ADMIN_SUCCESS,
} from "./actionType"

const initialState = {
    error: "",
    loading: false,
}

const AdminReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADMIN_USER:
            state = {
                ...state,
                loading: true,
            }
            break
        case ADMIN_SUCCESS:
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

export default AdminReducer
