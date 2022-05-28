import { ADD_EMAIL_TYPE } from "./actionType"

const initialState = {
  emailtype: [
    {
      emailtype: "introducing broker information",
      emailsubject: "Introducing Broker Updation",
    },

    {
      emailtype: "staff email welcome",
      emailsubject: "staff email welcome",
    },
    {
      emailtype: "	verification otp email",
      emailsubject: "OTP Verification Email - DIZICX",
    },
    {
      emailtype: "ld account create new email",
      emailsubject: "Introducing Broker Updation",
    },
  ],
}

const emailReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMAIL_TYPE:
      console.log(action.payload, "payload")
      return {
        ...state,
        emailtype: [action.payload, ...state.emailtype],
      }
    default:
      return state
  }
}

export default emailReducer
