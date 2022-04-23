import { GET_ADMIN_SUCCESS, ADD_ADMIN_USER_SUCCESS } from "./actionType"

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

    case ADD_ADMIN_USER_SUCCESS:
      console.log(action.payload, "s+++++++f")

      return {
        ...state,
        adminList: [...state.users, action.payload],
      }

    default:
      state = { ...state }
      break
  }
  return state
}

export default AdminReducer
