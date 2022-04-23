import {
  GET_ADMIN_USER,
  GET_ADMIN_SUCCESS,
  ADD_NEW_USER,
  ADD_ADMIN_USER_SUCCESS,
} from "./actionType"

export const getAdminUser = () => {
  return {
    type: GET_ADMIN_USER,
  }
}

export const getAdminSuccess = user => {
  return {
    type: GET_ADMIN_SUCCESS,
    payload: user,
  }
}

export const addUser = user => {
  // console.log(user, "sdfsdfloooo")
  return {
    type: ADD_NEW_USER,
    payload: user,
  }
}

export const addAdminUserSuccess = user => {
  // console.log(user, "loooo")
  return {
    type: ADD_ADMIN_USER_SUCCESS,
    payload: user,
  }
}
