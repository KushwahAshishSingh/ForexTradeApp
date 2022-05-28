import {
  GET_CREATE_TICKET_SUCCESS,
  ADD_CREATE_DETAIL_SUCCESS,
  GET_CREATE_TICKET,
  ADD_NEW_CREATE_DETAIL,
} from "./actionType"

const initialState = {
  ticket: [
    {
      subject: "Account Change",
      reporter: "Ankit",
      priority: "Urgent",
      date: "02-05-2020",
      department: "Support",
      status: "open",
      duedate: "05-05-2021",
    },
    {
      subject: "Account Change",
      reporter: "chandra",
      priority: "Urgent",
      date: "02-05-2020",
      department: "Support",
      status: "open",
      duedate: "05-05-2021",
    },
    {
      subject: "Account Change",
      reporter: "Ashish",
      priority: "Urgent",
      date: "02-05-2020",
      department: "Support",
      status: "open",
      duedate: "05-05-2021",
    },
  ],
}

const TicketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_CREATE_DETAIL:
      return {
        ...state,
        ticket: [action.payload, ...state.ticket],
      }
    // case GET_CREATE_TICKET_SUCCESS:
    //   console.log(action)
    //   return {
    //     ...state,
    //     ticket: action.payload,
    //   }
    //   break

    // case GET_CREATE_TICKET:
    //   console.log(action.payload, "kjkjkjkj")

    //   return {
    //     ...state,
    //     ticket: [state, action.payload],
    //   }
    // state = {
    //   ...state,
    // }
    //break
    // case ADD_CREATE_DETAIL_SUCCESS:
    //   return {
    //     ...state,
    //     ticket: [...state.ticket, action.payload],
    //   }
    //   break
    default:
      state = { ...state }
      break
  }
  return state
}
export default TicketReducer
