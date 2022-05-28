import {
  GET_CREATE_TICKET,
  GET_CREATE_TICKET_SUCCESS,
  ADD_CREATE_DETAIL_SUCCESS,
  ADD_NEW_CREATE_DETAIL,
} from "./actionType"

export const addNewCreateDetail = data => {
  console.log(data, "====hello")
  return {
    type: ADD_NEW_CREATE_DETAIL,
    payload: data,
  }
}

// export const getCreateTicket = data => {
//   return {
//     type: GET_CREATE_TICKET,
//     payload: data,
//   }
// }

// export const getCreateTicketSuccess = data => {
//   return {
//     type: GET_CREATE_TICKET_SUCCESS,
//     payload: data,
//   }
// }

// export const addCreateDetailsSuccess = data => {
//   return {
//     type: ADD_CREATE_DETAIL_SUCCESS,
//     payload: data,
//   }
// }
