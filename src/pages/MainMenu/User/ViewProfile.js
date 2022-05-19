import MetaTags from "react-meta-tags"
import React from "react"
import { Container, Row, Col, Card, CardBody } from "reactstrap"
import UserDetails from "./UserDetails"

//redux
import { useSelector } from "react-redux"

import { withRouter } from "react-router-dom"

//Import Breadcrumb
import Breadcrumb from "../../../components/Common/Breadcrumb"
import avatar from "../../../assets/images/users/avatar-1.jpg"

const ViewProfile = props => {
  const userDetails = useSelector(state => state?.UserReducer?.profile)

  return (
    <React.Fragment>
      <div className="page-content">
        <UserDetails />
        <MetaTags>
          <title>Profile | Skote - React Admin & Dashboard Template</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumb title="Skote" breadcrumbItem="Profile" />

          <Row>
            <Col lg="6">
              <Card>
                <CardBody>
                  <div className="d-flex">
                    <div className="ms-3">
                      <img
                        src={avatar}
                        alt=""
                        className="avatar-md rounded-circle img-thumbnail"
                      />
                    </div>
                    <div className="flex-grow-1 align-self-center">
                      <div className="text-muted">
                        <h5>Name:{userDetails.name}</h5>

                        <p className="mb-2">Id no: {userDetails.id}</p>
                        <p className="ms-0">
                          Role-Type :{userDetails.roleType}
                        </p>
                      </div>
                      <div className="mt-4">
                        <h5>Contact</h5>
                        <p className="mb-1">
                          PhoneNo: {userDetails.phonenumber}
                        </p>
                        <p className="mb-1">E-Mail: {userDetails.email}</p>
                      </div>
                      <div className="mt-4">
                        <h5>Address</h5>
                        <p className="mb-1">
                          Address 1 : {userDetails.addressone}
                        </p>
                        <p className="mb-1">
                          Address 1 : {userDetails.addresstwo}
                        </p>
                        <p className="mb-1">City : {userDetails.city}</p>
                        <p className="mb-1">State : {userDetails.state}</p>
                        <p className="mb-1">Country : {userDetails.country}</p>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default withRouter(ViewProfile)
