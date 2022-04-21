import React, { useEffect, useState } from "react"
import MetaTags from 'react-meta-tags';
import {
  Container,
} from "reactstrap";


const Dashboard = () => {
  const token = localStorage.getItem("authToken") && JSON.parse(localStorage.getItem("authToken"))
  // console.log("tokennnhhhh", token)
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Dashboard | ForexTrade</title>
        </MetaTags>
        <Container fluid>
          <h4>Dashboard</h4>
        </Container>
      </div>
    </React.Fragment>
  )
}



export default Dashboard;
