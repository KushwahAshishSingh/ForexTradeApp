import {
  ADMIN_USERS,
  ADMINUSER_SUCCESS,
  GET_ADMINUSER,
  GET_ADMINUSER_SUCCESS,
  GET_ADMINUSER_FAIL,
  GET_USERDROPDOWN,
  GET_USERDROPDOWN_SUCCESS,
  GET_USERDROPDOWN_FAIL,
  PROFILE_VIEW,
} from "./actionType"

const initialState = {
  error: "",
  loading: false,
  User: [],
  UserDropDown: [],
  profile: {},
}

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_USERS:
      state = {
        ...state,
        loading: true,
      }
      break
    case ADMINUSER_SUCCESS:
      state = {
        ...state,
        loading: false,
      }
      break
    case GET_ADMINUSER:
      state = {
        ...state,
        loading: false,
      }
      break
    case GET_ADMINUSER_SUCCESS:
      return {
        ...state,
        User: action.payload,
      }

    case GET_ADMINUSER_FAIL:
      return {
        ...state,
        error: action.payload,
      }
    case GET_USERDROPDOWN:
      state = {
        ...state,
        loading: false,
      }
      break
    case GET_USERDROPDOWN_SUCCESS:
      return {
        ...state,
        UserDropDown: action.payload,
      }

    case GET_USERDROPDOWN_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    case PROFILE_VIEW:
      //   console.log({ kkk: action.payload }, "pagal++++")
      const viewUser = state.User.data.find(e => e.id === action.payload)
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

export default UserReducer
