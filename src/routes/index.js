import React from "react"
import { Redirect } from "react-router-dom"

// Profile
import UserProfile from "../pages/Authentication/user-profile"

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"

// Dashboard
import Dashboard from "../pages/Dashboard/index"
import SuperAdminManager from "pages/MainMenu/SuperAdminManager/SuperAdminManager"
import SuperAdminSupport from "pages/MainMenu/SuperAdminSupport/SuperAdminSupport"
import Admin from "pages/MainMenu/Admin/Admin"
import User from "pages/MainMenu/User/User"
import AddUser from "pages/MainMenu/User/AddUser"
import Staf from "pages/MainMenu/Staf/Staf"

// Pages Calendar
import Calendar from "../pages/Calendar/index"

const authProtectedRoutes = [
  { path: "/dashboard", component: Dashboard },

  // //profile
  { path: "/profile", component: UserProfile },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },

  // main menu

  { path: '/super-admin-manager', component: SuperAdminManager },
  { path: '/super-admin-support', component: SuperAdminSupport },
  { path: '/admin', component: Admin },
  { path: '/user', component: User },
  { path: '/staff', component: Staf },
  { path: '/add-user', component: AddUser },


// =======
//   { path: "/super-admin-manager", component: SuperAdminManager },
//   { path: "/super-admin-support", component: SuperAdminSupport },
//   { path: "/admin", component: Admin },
//   { path: "/user", component: User },
// >>>>>>> main

  // //calendar
  { path: "/calendar", component: Calendar },
]

const publicRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },
]

export { publicRoutes, authProtectedRoutes }
