import {
  SAS_USER,
  SAS_SUCCESS,
  GET_SUPPORT_USERS,
  GET_SUPPORT_USERS_SUCCESS,
} from "./actionType"

export const SasUser = user => {
  return {
    type: SAS_USER,
    payload: user,
  }
}

export const SasSuccess = user => {
  return {
    type: SAS_SUCCESS,
    payload: user,
  }
}

export const getSuperAdminSupport = () => ({
  type: GET_SUPPORT_USERS,
})

export const getSuperAdminSupportSuccess = users => ({
  type: GET_SUPPORT_USERS_SUCCESS,
  payload: users,
})
