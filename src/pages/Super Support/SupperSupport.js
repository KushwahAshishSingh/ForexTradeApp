import React from "react"

import { Container, Row, Col } from "reactstrap"

import MetaTags from "react-meta-tags"
import Breadcrumbs from "../../components/Common/Breadcrumb"

const SupperSupport = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Dashboard | Skote - React Admin & Dashboard Template</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Dashboards" breadcrumbItem="Dashboard" />

          <Row>
            <Col xl="4">
              <h2>super Support</h2>
              {/* <WelcomeComp />
          <MonthlyEarning /> */}
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default SupperSupport
