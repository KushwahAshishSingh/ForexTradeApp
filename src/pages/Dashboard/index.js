import React from "react"
import MetaTags from 'react-meta-tags';
import {
  Container,
} from "reactstrap";
import DashboardContent from "./Dashboard";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const Dashboard = () => {
  const roleType = JSON.parse(localStorage.getItem("authUser")).roleType

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>{roleType} Dashboard | ForexTrade</title>
        </MetaTags>
        <Container fluid>
          <Breadcrumbs title="DashBoard" breadcrumbItem="DashBoard" />
          <DashboardContent />
        </Container>
      </div>
    </React.Fragment>
  )
}



export default Dashboard;
