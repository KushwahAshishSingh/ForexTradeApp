import { call, put, takeEvery, takeLatest } from "redux-saga/effects"

// Login Redux States
import { SAM_USER } from "./actionType"
import { SamSuccess, } from "./action"
import { SamAdd } from "../../../helpers/fakebackend_helper"


function* SamUser({ payload: { user, history } }) {
    try {
        const response = yield call(SamAdd, {
            name: user.name,
            email: user.email,
            password: user.password
        })
        yield put(SamSuccess(response))

        history.push("/dashboard")
    } catch (error) {
        // yield put(apiError(error))
        console.log(error)
    }
}





function* samSaga() {
    yield takeEvery(SAM_USER, SamUser)
}

export default samSaga
