import { call, put, takeEvery, takeLatest } from "redux-saga/effects"

// Login Redux States
import { SAS_USER, GET_SAS } from "./actionType"
import { getSasFail, getSasSuccess, SasSuccess, } from "./action"
import { getSAS, SasAdd } from "../../../helpers/fakebackend_helper"
import Swal from 'sweetalert2';



const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000
});

function* fetchSASupport() {
    try {
        const response = yield call(getSAS)
        yield put(getSasSuccess(response))
    } catch (error) {
        yield put(getSasFail(error))
    }
}

function* SasUser({ payload: { user, history } }) {
    try {
        const response = yield call(SasAdd, {
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
        yield put(SasSuccess(response))
        history.push("/super-admin-support")
    } catch (error) {
        Toast.fire({
            icon: "error",
            title: "something went wrong"
        });
        history.push("/super-admin-support")
    }
}





function* sasSaga() {
    yield takeEvery(GET_SAS, fetchSASupport)
    yield takeEvery(SAS_USER, SasUser)
}

export default sasSaga
