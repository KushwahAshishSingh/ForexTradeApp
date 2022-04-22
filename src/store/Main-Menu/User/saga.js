import { call, put, takeEvery, takeLatest } from "redux-saga/effects"

// Login Redux States
import { ADMIN_USERS, GET_ADMINUSER } from "./actionType"
import { AdminUserSuccess, getAdminUserFail, getAdminUserSuccess, } from "./action"
import { getUser, UserAdd } from "../../../helpers/fakebackend_helper"
import Swal from 'sweetalert2';



const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000
});


function* fetchUser() {
    try {
        const response = yield call(getUser)
        yield put(getAdminUserSuccess(response))
    } catch (error) {
        yield put(getAdminUserFail(error))
    }
}


function* AdminUsers({ payload: { user, history } }) {
    try {
        const response = yield call(UserAdd, {
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
        yield put(AdminUserSuccess(response))
        const response1 = yield call(getUser)
        yield put(getAdminUserSuccess(response1))
        history.push("/user")
    } catch (error) {
        Toast.fire({
            icon: "error",
            title: "something went wrong"
        });
        history.push("/user")
    }
}





function* UserSaga() {
    yield takeEvery(GET_ADMINUSER, fetchUser)
    yield takeEvery(ADMIN_USERS, AdminUsers)
}

export default UserSaga
