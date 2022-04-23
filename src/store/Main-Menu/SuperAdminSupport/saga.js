import { call, put, takeEvery, takeLatest } from "redux-saga/effects"

// Login Redux States
import { SAS_USER, GET_SUPPORT_USERS } from "./actionType"
import { SasSuccess, getSuperAdminSupportSuccess } from "./action"
import { SasAdd, getSuperSupport } from "../../../helpers/fakebackend_helper"
import Swal from "sweetalert2"

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2000,
})

function* getSupportList() {
  try {
    const response = yield call(getSuperSupport)
    console.log(response, "response+++++")
    yield put(getSuperAdminSupportSuccess(response))
    // history.push("/super-admin-support")
  } catch (error) {
    // yield put(error)
    console.log(error)
    // history.push("/super-admin-support")
  }
}

function* SasUser({ payload: event }) {
  try {
    const response = yield call(SasAdd, event)
    // console.log(response, "lkjljkljlkj++++")
    if (response.success === true) {
      Toast.fire({
        icon: "success",
        title: response.message,
      })
    }
    yield put(SasSuccess(response))
    const response1 = yield call(getADMIN)
    yield put(getSuperAdminSupportSuccess(response1))
    history.push("/super-admin-support")
  } catch (error) {
    console.log(error)
    history.push("/super-admin-support")
  }
}

function* sasSaga() {
  yield takeEvery(GET_SUPPORT_USERS, getSupportList)
  yield takeEvery(SAS_USER, SasUser)
}

export default sasSaga
