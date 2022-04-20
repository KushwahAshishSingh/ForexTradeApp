const Token = JSON.parse(localStorage.getItem("authUser"));
const accessToken = `Bearer ${Token && Token.authToken}`
console.log("accessToken", accessToken)
export default accessToken
