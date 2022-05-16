import MetaTags from "react-meta-tags"
import React, { useEffect, useState } from "react"
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap"

//redux
import { useSelector, useDispatch } from "react-redux"

import { withRouter } from "react-router-dom"

import favicon from "../../../assets/images/favicon.ico"

//Import Breadcrumb
import Breadcrumb from "../../../components/Common/Breadcrumb"
import avatar from "../../../assets/images/users/avatar-1.jpg"

const ViewStaffProfile = () => {
  const staffDetails = useSelector(
    state => state?.SuperAdminSupportReducer?.profile
  )

  const [superStaffData, setSuperStaffData] = useState({})

  useEffect(() => {
    //localStorage.setItem(JSON.stringify(staffDetails))
    if (Object.keys(staffDetails).length === 0) {
      const data = JSON.parse(localStorage.getItem("profileData"))
      setSuperStaffData(data)
    } else {
      localStorage.setItem("profileData", JSON.stringify(staffDetails))
      setSuperStaffData(staffDetails)
    }
    console.log(superStaffData)
  }, [])

  return (
    <React.Fragment>
      <div className="page-content">
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
                    <div className="flex-grow-1 align-self-center ">
                      <div
                        className="text-muted  "
                        style={{ marginLeft: "15px" }}
                      >
                        <h2 className="mb-1">{superStaffData.name}</h2>
                        <p className="mb-1">{superStaffData.name}</p>
                      </div>
                      <div
                        style={{
                          position: "relative",
                          right: "60px",
                          marginTop: "18px",
                        }}
                      >
                        <div style={{ paddingTop: "15px" }}>
                          <Button style={{ marginRight: "5px" }}>
                            SendEmail
                          </Button>
                          <Button style={{ marginRight: "5px" }}>
                            <i
                              className="mdi mdi-pencil "
                              style={{ marginRight: "3px" }}
                            />
                            Update
                          </Button>
                          <Button style={{}}>
                            <i className="mdi mdi-delete"></i>
                          </Button>
                          <p
                            style={{ fontSize: "15px", margin: "8px" }}
                            className="ms-0"
                          >
                            {superStaffData.roleType}
                          </p>
                        </div>

                        <hr />
                        <div className="text-muted font-size-15">
                          <img
                            style={{ width: "10%", height: "auto" }}
                            src={favicon}
                            alt=""
                            className="avatar-md rounded-circle img-thumbnail"
                          />
                          <h5>DIZICX</h5>
                        </div>
                        <hr />
                        <div className="text-muted ">
                          <p className="mb-1">CreatedAt:</p>
                          <h5>{superStaffData.createdAt}</h5>
                        </div>

                        <hr />
                        <div className="text-muted">
                          <p className="mb-0">Notes:</p>
                          <h5 className="">No Notes</h5>
                        </div>

                        <hr />
                        <div className="mt-2">
                          <h5>Contact</h5>
                          <p className="mb-1">
                            PhoneNo: {superStaffData.phonenumber}
                          </p>
                          <p className="mb-1">E-Mail: {superStaffData.email}</p>
                        </div>
                        <hr />
                        <div className="mt-2">
                          <p className="mb-1">SOCIAL</p>
                        </div>
                        <hr />
                        <div className="mt-2">
                          <h5>Address</h5>
                          <p className="mb-1">
                            Address 1 : {superStaffData.addressone}
                          </p>
                          <p className="mb-1">
                            Address 1 : {superStaffData.addresstwo}
                          </p>
                          <p className="mb-1">City : {superStaffData.city}</p>
                          <p className="mb-1">State : {superStaffData.state}</p>
                          <p className="mb-1">
                            Country : {superStaffData.country}
                          </p>
                        </div>
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

export default withRouter(ViewStaffProfile)
