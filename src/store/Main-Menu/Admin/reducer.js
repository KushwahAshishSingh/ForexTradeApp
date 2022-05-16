import {
  ADMIN_USER,
  ADMIN_SUCCESS,
  GET_ADMIN,
  GET_ADMIN_SUCCESS,
  GET_ADMIN_FAIL,
  ADMIN_PROFILE,
} from "./actionType"

const initialState = {
  error: "",
  loading: false,
  Admin: [],
  profile: {},
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
    case GET_ADMIN:
      state = {
        ...state,
        loading: false,
      }
      break
    case GET_ADMIN_SUCCESS:
      return {
        ...state,
        Admin: action.payload,
      }

    case GET_ADMIN_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    case ADMIN_PROFILE:
      const viewUser = state.Admin.data.find(e => e.id === action.payload)
      console.log(viewUser, "dfgfgfgfg===")
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

export default AdminReducer
