import { call, put, takeEvery, takeLatest } from "redux-saga/effects"

// Login Redux States
import { ADMIN_USER } from "./actionType"
import { AdminSuccess, } from "./action"
import { AdminAdd } from "../../../helpers/fakebackend_helper"
import Swal from 'sweetalert2';



const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000
});


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
    yield takeEvery(ADMIN_USER, AdminUser)
}

export default AdminSaga
