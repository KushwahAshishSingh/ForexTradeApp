import { GET_ADMIN_USER, GET_ADMIN_SUCCESS } from "./actionType"

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
