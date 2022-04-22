import { GET_SUPPORT_USERS_SUCCESS, SAS_SUCCESS } from "./actionType"

const initialState = {
  users: [],
  error: "",
  loading: false,
}
// console.log(initialState.users, "sfsdfgfger")

const SuperAdminSupportReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SUPPORT_USERS_SUCCESS:
      // console.log(action.payload, "kjskljflkjs")
      return {
        ...state,
        users: action.payload,
      }

    case SAS_SUCCESS:
      state = {
        ...state,
        users: [...state.users, action.payload],
      }
      break
    default:
      state = { ...state }
      break
  }
  return state
}

export default SuperAdminSupportReducer
