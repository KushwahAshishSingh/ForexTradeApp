import { call, put, takeEvery, takeLatest } from "redux-saga/effects"

// Login Redux States
import { ADMIN_USERS, GET_ADMINUSER } from "./actionType"
import {
  AdminUserSuccess,
  getAdminUserFail,
  getAdminUserSuccess,
} from "./action"
import { getUser, UserAdd } from "../../../helpers/fakebackend_helper"
import Swal from "sweetalert2"

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2000,
})

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
      salesagent: user.salesagent,
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      password: user.password,
      phonenumber: user.phonenumber,
      taxnumber: user.taxnumber,
      notes: user.notes,
      tags: user.tags,
      dob: user.dob,
      phoneverified: user.phoneverified,
      emailverified: user.emailverified,
      kycverified: user.kycverified,
      sendwelcomeemail: user.sendwelcomeemail,
      sendemailverification: user.sendemailverification,
      fax: user.fax,
      addressone: user.addressone,
      addresstwo: user.addresstwo,
      city: user.city,
      zipcode: user.zipcode,
      locale: user.locale,
      currency: user.currency,
      state: user.state,
      country: user.country,
      totalnetworth: user.totalnetworth,
      totalannualincome: user.totalannualincome,
      employmentstatus: user.employmentstatus,
      sourceofincome: user.sourceofincome,
      forexandotherinstruments: user.forexandotherinstruments,
      experiecneinyears: user.experiecneinyears,
      qualificationyears: user.qualificationyears,
      investmentinusd: user.investmentinusd,
      notifications: user.notifications,
      ibtype: user.ibtype,
      targetcountry: user.targetcountry,
      acquireclients: user.acquireclients,
      websiteorsociallink: user.websiteorsociallink,
      ibwithotherbroker: user.ibwithotherbroker,
      currentnumberofclients: user.currentnumberofclients,
      clientsinthreemonths: user.clientsinthreemonths,
      avgmonthlytradingvolume: user.avgmonthlytradingvolume,
    })
    if (response.success === true) {
      Toast.fire({
        icon: "success",
        title: response.message,
      })
    }
    yield put(AdminUserSuccess(response))
    const response1 = yield call(getUser)
    yield put(getAdminUserSuccess(response1))
    history.push("/user")
  } catch (error) {
    Toast.fire({
      icon: "error",
      title: "something went wrong",
    })
    history.push("/user")
  }
}

function* UserSaga() {
  yield takeEvery(GET_ADMINUSER, fetchUser)
  yield takeEvery(ADMIN_USERS, AdminUsers)
}

export default UserSaga
