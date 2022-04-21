import axios from "axios";

const token = `Bearer ${JSON.parse(localStorage.getItem("authToken")) && JSON.parse(localStorage.getItem("authToken"))}`
console.log("tokennn", token)



//apply base url for axios
const API_URL = process.env.REACT_APP_BACKEND_URL
const axiosApi = axios.create({
  baseURL: API_URL,
})

axiosApi.defaults.headers.common["Authorization"] = token
// console.log("auth", axiosApi.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(localStorage.getItem("authUser")) && JSON.parse(localStorage.getItem("authUser")).authToken}`)

axiosApi.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
)

export async function get(url, config = {}) {
  return await axiosApi.get(url, { ...config }).then(response => response.data)
}

export async function post(url, data, config = {}) {
  return axiosApi
    .post(url, { ...data }, { ...config })
    .then(response => response.data)
}

export async function put(url, data, config = {}) {
  return axiosApi
    .put(url, { ...data }, { ...config })
    .then(response => response.data)
}

export async function del(url, config = {}) {
  return await axiosApi
    .delete(url, { ...config })
    .then(response => response.data)
}
