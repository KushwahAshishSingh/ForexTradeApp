import { ADD_EMAIL_TYPE } from "./actionType"

export const addEmailType = data => {
  console.log(data, "emailtype==")
  return {
    type: ADD_EMAIL_TYPE,
    payload: data,
  }
}
