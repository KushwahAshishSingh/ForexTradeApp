import {
  SAS_USER,
  SAS_SUCCESS,
  GET_SAS_SUCCESS,
  GET_SAS_FAIL,
  SUPER_STAFF_PROFILE,
} from "./actionType"

const initialState = {
  error: "",
  success: false,
  sasanager: [],
  profile: {},
}

const SuperAdminSupportReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAS_USER:
      state = {
        ...state,
        // success: true,
      }
      break
    case SAS_SUCCESS:
      state = {
        ...state,
        // success: true,
      }
      break
    case GET_SAS_SUCCESS:
      return {
        ...state,
        success: false,
        sasanager: action.payload,
      }

    case GET_SAS_FAIL:
      return {
        ...state,
        success: false,
        error: action.payload,
      }
    case SUPER_STAFF_PROFILE:
      const viewUser = state.sasanager.data.find(e => e.id === action.payload)
      return {
        ...state,
        profile: viewUser,
      }
    default:
      state = { ...state }
      break
  }
  return state
}

export default SuperAdminSupportReducer
