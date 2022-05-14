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

export const AdminUsers = (user, history) => {
  return {
    type: ADMIN_USERS,
    payload: { user, history },
  }
}

export const AdminUserSuccess = user => {
  return {
    type: ADMINUSER_SUCCESS,
    payload: user,
  }
}

export const getUser = () => ({
  type: GET_ADMINUSER,
})

export const getAdminUserSuccess = products => ({
  type: GET_ADMINUSER_SUCCESS,
  payload: products,
})

export const getAdminUserFail = error => ({
  type: GET_ADMINUSER_FAIL,
  payload: error,
})

export const getUserDropDown = () => ({
  type: GET_USERDROPDOWN,
})

export const getUserDropDownSuccess = products => ({
  type: GET_USERDROPDOWN_SUCCESS,
  payload: products,
})

export const getUserDropDownFail = error => ({
  type: GET_USERDROPDOWN_FAIL,
  payload: error,
})

export const viewUserProfile = view =>
  //   console.log(
  //     view,
  //     "sdfsfsdf"
  //   )
  ({
    type: PROFILE_VIEW,
    payload: view,
  })
