import { call, put, takeEvery, takeLatest } from "redux-saga/effects"

// Login Redux States
import { STAFF_USERS, GET_STAFFUSER } from "./actionType"
import {
  StaffUserSuccess,
  getStaffUserFail,
  getStaffUserSuccess,
} from "./action"
import { getStaff, StaffAdd } from "../../../helpers/fakebackend_helper"
import Swal from "sweetalert2"

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2000,
})

function* fetchUser() {
  try {
    const response = yield call(getStaff)
    yield put(getStaffUserSuccess(response))
  } catch (error) {
    yield put(getStaffUserFail(error))
  }
}

function* StaffUsers({ payload: { user, history } }) {
  try {
    const response = yield call(StaffAdd, {
      name: user.name,
      email: user.email,
      password: user.password,
      permissions: user.permissions,
    })
    if (response.success === true) {
      Toast.fire({
        icon: "success",
        title: response.message,
      })
    }
    yield put(StaffUserSuccess(response))
    const response1 = yield call(getStaff)
    yield put(getStaffUserSuccess(response1))
    history.push("/staff")
  } catch (error) {
    Toast.fire({
      icon: "error",
      title: "something went wrong",
    })
    history.push("/staff")
  }
}

function* StaffSaga() {
  yield takeEvery(GET_STAFFUSER, fetchUser)
  yield takeEvery(STAFF_USERS, StaffUsers)
}

export default StaffSaga
