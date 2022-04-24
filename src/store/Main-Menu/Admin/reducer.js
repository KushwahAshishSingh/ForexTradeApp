import {
  GET_ADMIN_SUCCESS,
  ADD_ADMIN_DATA_SUCCESS,
  GET_ADMIN_FAIL,
} from "./actionType"

const initialState = {
  adminList: [],
  error: "",
  loading: false,
}

const AdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ADMIN_SUCCESS:
      console.log(action.payload, "sdfsdfdsfsf")
      return {
        ...state,
        adminList: action.payload,
      }
    case ADD_ADMIN_DATA_SUCCESS:
      return {
        ...state,
        adminList: [...action.payload, state.adminList],
      }

    case GET_ADMIN_FAIL:
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

export default AdminReducer
