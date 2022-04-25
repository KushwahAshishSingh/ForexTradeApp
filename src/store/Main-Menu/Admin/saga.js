import { call, put, takeEvery, takeLatest } from "redux-saga/effects"

// Login Redux States
import { GET_ADMIN_USER, ADD_ADMIN_DATA } from "./actionType"
import { getAdminSuccess, getAdminFail } from "./action"
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
    yield put(getAdminSuccess(response))
  } catch (error) {
    // yield put(getAdminFail(error))
    console.log(error)
  }
}

function* AddAdminInfo({ payload: { user, history } }) {
  alert("welcome new admin")
  try {
    alert("hello")
    const response = yield call(AdminAdd, {
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
    const response1 = yield call(getADMIN)
    return yield put(getAdminSuccess(response1))
    // history.push("/admin")
    // alert("end of scope")
  } catch (error) {
    alert("not entered")
    Toast.fire({
      icon: "error",
      title: "something went wrong",
    })
    // history.push("/admin")
  }
}

function* AdminSaga() {
  yield takeEvery(GET_ADMIN_USER, getAdminUser)
  yield takeEvery(ADD_ADMIN_DATA, AddAdminInfo)
}

export default AdminSaga
