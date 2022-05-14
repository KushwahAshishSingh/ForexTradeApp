import MetaTags from "react-meta-tags"
import React, { useEffect, useState } from "react"
import { Container, Row, Col, Card, CardBody } from "reactstrap"
import { getSas, SasUser } from "store/actions"
import { getSasSuccess } from "store/actions"
import { useParams } from "react-router-dom"
//redux
import { useSelector, useDispatch } from "react-redux"

import { withRouter } from "react-router-dom"

//Import Breadcrumb
import Breadcrumb from "../../../components/Common/Breadcrumb"
import avatar from "../../../assets/images/users/avatar-1.jpg"

const ViewStaffProfile = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
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
                    <div className="flex-grow-1 align-self-center">
                      <div className="text-muted">
                        <h5>Name:{superStaffData.name}</h5>

                        <p className="mb-2">Id no: {superStaffData.id}</p>
                        <p className="ms-0">
                          Role-Type :{superStaffData.roleType}
                        </p>
                      </div>
                      {/* <div className="mt-4">
                        <h5>Contact</h5>
                        <p className="mb-1">
                          PhoneNo: {staffDetails.phonenumber}
                        </p>
                        <p className="mb-1">E-Mail: {staffDetails.email}</p>
                      </div>
                      <div className="mt-4">
                        <h5>Address</h5>
                        <p className="mb-1">
                          Address 1 : {staffDetails.addressone}
                        </p>
                        <p className="mb-1">
                          Address 1 : {staffDetails.addresstwo}
                        </p>
                        <p className="mb-1">City : {staffDetails.city}</p>
                        <p className="mb-1">State : {staffDetails.state}</p>
                        <p className="mb-1">Country : {staffDetails.country}</p>
                      </div> */}
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
