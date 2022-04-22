import { call, put, takeEvery, takeLatest } from "redux-saga/effects"

// Login Redux States
import { ADMIN_USER, GET_ADMIN } from "./actionType"
import { AdminSuccess, getAdminFail, getAdminSuccess, } from "./action"
import { AdminAdd, getADMIN } from "../../../helpers/fakebackend_helper"
import Swal from 'sweetalert2';



const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000
});


function* fetchAdmin() {
    try {
        const response = yield call(getADMIN)
        yield put(getAdminSuccess(response))
    } catch (error) {
        yield put(getAdminFail(error))
    }
}


function* AdminUser({ payload: { user, history } }) {
    try {
        const response = yield call(AdminAdd, {
            name: user.name,
            email: user.email,
            password: user.password
        })
        if (response.success === true) {
            Toast.fire({
                icon: "success",
                title: response.message,
            });
        }
        yield put(AdminSuccess(response))
        history.push("/admin")
    } catch (error) {
        Toast.fire({
            icon: "error",
            title: "something went wrong"
        });
        history.push("/admin")
    }
}





function* AdminSaga() {
    yield takeEvery(GET_ADMIN, fetchAdmin)
    yield takeEvery(ADMIN_USER, AdminUser)
}

export default AdminSaga
