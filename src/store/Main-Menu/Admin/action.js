import {
  GET_ADMIN_USER,
  GET_ADMIN_SUCCESS,
  GET_ADMIN_FAIL,
  ADD_ADMIN_DATA,
  ADD_ADMIN_DATA_SUCCESS,
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

export const getAdminFail = error => ({
  type: GET_ADMIN_FAIL,
  payload: error,
})

export const addAdminData = (user, history) => {
  return {
    type: ADD_ADMIN_DATA,
    payload: { user, history },
  }
}

export const addAdminDataSuccess = user => {
  return {
    type: ADD_ADMIN_DATA_SUCCESS,
    payload: user,
  }
}
