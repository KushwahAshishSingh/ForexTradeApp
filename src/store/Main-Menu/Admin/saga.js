import { call, put, takeEvery, takeLatest } from "redux-saga/effects"

// Login Redux States
import { GET_ADMIN_USER, ADD_NEW_USER } from "./actionType"
import { getAdminSuccess, addAdminUserSuccess } from "./action"
import { AdminAdd, getADMIN } from "../../../helpers/fakebackend_helper"
import Swal from "sweetalert2"

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2000,
})

function* getAdminUser() {
  alert("hrllo")
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
    // Toast.fire({
    //   icon: "error",
    //   title: "something went wrong",
    // })
    history.push("/admin")
  }
}

function* onAddNewUser({ payload: user }) {
  alert("hello")
  try {
    const response = yield call(AdminAdd, user)
    // console.log(response, "sdfsdfggggg")
    if (response.success === true) {
      Toast.fire({
        icon: "success",
        title: response.message,
      })
    }
    yield put(addAdminUserSuccess(response))
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
  yield takeEvery(ADD_NEW_USER, onAddNewUser)
}

export default AdminSaga
