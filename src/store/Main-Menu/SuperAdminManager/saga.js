import { call, put, takeEvery, takeLatest } from "redux-saga/effects"

// Login Redux States
import { SAM_USER, GET_SAM } from "./actionType"
import { SamSuccess, getSamSuccess, getSamFail } from "./action"
import {
  SamAdd,
  getSAM,
  // getSAS,
  getADMIN,
} from "../../../helpers/fakebackend_helper"
import Swal from "sweetalert2"

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2000,
})

function* fetchSAManager() {
  try {
    const response = yield call(getSAM)
    yield put(getSamSuccess(response))
  } catch (error) {
    yield put(getSamFail(error))
  }
}

function* SamUser({ payload: { user, history } }) {
  try {
    const response = yield call(SamAdd, {
      name: user.name,
      email: user.email,
      password: user.password,
    })
    if (response.success === true) {
      Toast.fire({
        icon: "success",
        title: response.message,
      })
    }
    yield put(SamSuccess(response))
    history.push("/super-admin-manager")
  } catch (error) {
    Toast.fire({
      icon: "error",
      title: "something went wrong",
    })
    history.push("/super-admin-manager")
  }
}

function* samSaga() {
  yield takeEvery(GET_SAM, fetchSAManager)
  yield takeEvery(SAM_USER, SamUser)
}

export default samSaga
