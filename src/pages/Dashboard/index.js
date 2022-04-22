import React, { useEffect, useState } from "react"
import MetaTags from 'react-meta-tags';
import {
  Container,
} from "reactstrap";

// <<<<<<< harish_login

const Dashboard = () => {
  const roleType = JSON.parse(localStorage.getItem("authUser")).roleType

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>{roleType} Dashboard | ForexTrade</title>
        </MetaTags>
        <Container fluid>
          <h4>Dashboard</h4>
        </Container>
      </div>
    </React.Fragment>
  )
// =======
// class Dashboard extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <div className="page-content">
//           <MetaTags>
//             <title>Dashboard</title>
//           </MetaTags>
//           <Container fluid>
//             <h4>Dashboard</h4>
//           </Container>
//         </div>
//       </React.Fragment>
//     )
//   }
// >>>>>>> main
}



export default Dashboard;
