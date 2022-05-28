// import { call, put, takeEvery, takeLatest } from "redux-saga/effects"

// import { ADD_NEW_CREATE_DETAIL, GET_CREATE_TICKET } from "./actionType"
// import { getCreateTicketSuccess, addCreateDetailsSuccess } from "./action"

// import Swal from "sweetalert2"

// const Toast = Swal.mixin({
//   toast: true,
//   position: "top-end",
//   showConfirmButton: false,
//   timer: 2000,
// })

// function* fetchUser() {
//   try {
//     const response = yield call(getStaff)
//     yield put(getCreateTicketSuccess(response))
//   } catch (error) {
//     console.log(error)
//     // yield put(getStaffUserFail(error))
//   }
// }

// function* TicketDetail({ payload: { user, history } }) {
//   try {
//     const response = yield call(Api, {})
//     if (response.success === true) {
//       Toast.fire({
//         icon: "success",
//         title: response.message,
//       })
//     }
//     yield put(addCreateDetailsSuccess(response))
//     const response1 = yield call(getApi)
//     yield put(getCreateTicketSuccess(response1))
//     history.push("/ticket")
//   } catch (error) {
//     // Toast.fire({
//     //   // icon: "error",
//     //   // title: "something went wrong",
//     // })
//     history.push("/ticket")
//   }
// }

// function* TicketSaga() {
//   yield takeEvery(GET_CREATE_TICKET, fetchUser)
//   yield takeEvery(ADD_NEW_CREATE_DETAIL, TicketDetail)
// }

// export default TicketSaga
