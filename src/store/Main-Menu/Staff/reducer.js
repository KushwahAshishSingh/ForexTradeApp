import {
    STAFF_USERS,
    STAFFUSER_SUCCESS, GET_STAFFUSER, GET_STAFFUSER_SUCCESS, GET_STAFFUSER_FAIL
} from "./actionType"

const initialState = {
    error: "",
    loading: false,
    Staff: []
}

const StaffReducer = (state = initialState, action) => {
    switch (action.type) {
        case STAFF_USERS:
            state = {
                ...state,
                loading: true,
            }
            break
        case STAFFUSER_SUCCESS:
            state = {
                ...state,
                loading: false,
            }
            break
        case GET_STAFFUSER:
            state = {
                ...state,
                loading: false,
            }
            break
        case GET_STAFFUSER_SUCCESS:
            return {
                ...state,
                Staff: action.payload,
            }

        case GET_STAFFUSER_FAIL:
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

export default StaffReducer
