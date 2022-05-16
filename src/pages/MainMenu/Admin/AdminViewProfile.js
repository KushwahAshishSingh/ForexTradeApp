import MetaTags from "react-meta-tags"
import React, { useState, useEffect } from "react"
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap"

//redux
import { useSelector } from "react-redux"

import { withRouter } from "react-router-dom"

import favicon from "../../../assets/images/favicon.ico"

//Import Breadcrumb
import Breadcrumb from "../../../components/Common/Breadcrumb"
import avatar from "../../../assets/images/users/avatar-1.jpg"

const AdminViewProfile = () => {
  const [adminProfile, setAdiminProfile] = useState({})
  const adminDetails = useSelector(state => state.Admin.profile)

  useEffect(() => {
    if (Object.keys(adminDetails).length === 0) {
      const data = JSON.parse(localStorage.getItem("adminProfile"))
      setAdiminProfile(data)
    } else {
      localStorage.setItem("adminProfile", JSON.stringify(adminDetails))
      setAdiminProfile(adminDetails)
    }
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
                        <h2 className="mb-1">{adminProfile.name}</h2>
                        <p className="mb-1">{adminProfile.name}</p>
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
                            {adminProfile.roleType}
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
                          <h5>{adminProfile.createdAt}</h5>
                        </div>

                        <hr />
                        <div className="text-muted">
                          <p className="mb-0">Notes:</p>
                          <h5 className="">No Notes</h5>
                        </div>

                        <hr />
                        <div className="mt-2">
                          <h5>Contact</h5>
                          <p className="mb-1">PhoneNo:</p>
                          <p className="mb-1">E-Mail: {adminProfile.email}</p>
                        </div>
                        <hr />
                        <div className="mt-2">
                          <p className="mb-1">SOCIAL</p>
                        </div>
                        <hr />
                        <div className="mt-2">
                          <h5>Address</h5>
                          <p className="mb-1">Address 1 :</p>
                          <p className="mb-1">Address 1 :</p>
                          <p className="mb-1">City : </p>
                          <p className="mb-1">State : </p>
                          <p className="mb-1">Country :</p>
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

export default withRouter(AdminViewProfile)
