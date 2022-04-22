import { post } from "../client"

const login = params => {
  console.log(params)
  return post("api/v1/login", params)
}
export default login
