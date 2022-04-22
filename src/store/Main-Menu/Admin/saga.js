import { call, put, takeEvery, takeLatest } from "redux-saga/effects"

// Login Redux States
import { GET_ADMIN_USER } from "./actionType"
import { getAdminSuccess } from "./action"
import { AdminAdd, getADMIN } from "../../../helpers/fakebackend_helper"
import Swal from "sweetalert2"

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2000,
})

function* getAdminUser() {
  try {
    const response = yield call(getADMIN)
    // if (response.success === true) {
    //   Toast.fire({
    //     icon: "success",
    //     title: response.message,
    //   })
    // }
    yield put(getAdminSuccess(response))
    history.push("/admin")
  } catch (error) {
    Toast.fire({
      icon: "error",
      title: "something went wrong",
    })
    history.push("/admin")
  }
}

function* AdminSaga() {
  yield takeEvery(GET_ADMIN_USER, getAdminUser)
}

export default AdminSaga
