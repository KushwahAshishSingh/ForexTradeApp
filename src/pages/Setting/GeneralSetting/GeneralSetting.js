import React, { useState } from "react"
import MetaTags from "react-meta-tags"

import {
  Card,
  Button,
  CardBody,
  Col,
  Row,
  CardTitle,
  Container,
  Label,
  Input,
} from "reactstrap"

//Import Breadcrumb
// import Breadcrumbs from "../../components/Common/Breadcrumb"
import Breadcrumbs from "../../../components/Common/Breadcrumb"

const GeneralSetting = () => {
  const [customchkPrimary, setcustomchkPrimary] = useState(true)
  const [customchkSuccess, setcustomchkSuccess] = useState(true)
  const [customchkInfo, setcustomchkInfo] = useState(true)
  const [customchkWarning, setcustomchkWarning] = useState(true)
  const [customchkDanger, setcustomchkDanger] = useState(true)
  const [customOutlinePrimary, setcustomOutlinePrimary] = useState(true)
  const [customOutlineSuccess, setcustomOutlineSuccess] = useState(true)
  const [customOutlineInfo, setcustomOutlineInfo] = useState(true)
  const [customOutlineWarning, setcustomOutlineWarning] = useState(true)
  const [customOutlineDanger, setcustomOutlineDanger] = useState(true)
  const [toggleSwitch, settoggleSwitch] = useState(true)
  const [toggleSwitchSize, settoggleSwitchSize] = useState(true)

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>
            {/* Form Elements | Skote - React Admin & Dashboard Template */}
          </title>
        </MetaTags>
        <Container fluid={true}>
          <Breadcrumbs title="Settings" breadcrumbItem="Company Details" />

          <Row>
            <Col>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Company Details</CardTitle>
                  {/* <p className="card-title-desc">
                    Here are examples of <code>.form-control</code> applied to
                    each textual HTML5 <code>&lt;input&gt;</code>{" "}
                    <code>type</code>.
                  </p> */}

                  <Row className="mb-3">
                    <label
                      htmlFor="example-text-input"
                      className="col-md-2 col-form-label"
                    >
                      Company Name
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="Dizicx Limited"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-search-input"
                      className="col-md-2 col-form-label"
                    >
                      Legal Name
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="Dizicx Limited"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-email-input"
                      className="col-md-2 col-form-label"
                    >
                      Contact Person
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="Dizicx Limited"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-url-input"
                      className="col-md-2 col-form-label"
                    >
                      Company Address
                    </label>
                    <div className="col-md-10">
                      <textarea
                        className="form-control"
                        type="textarea"
                        defaultValue="First floor,first St. Vincent Bank Ltd building Jemes street Kingstown St. Vincent and the Grenadines"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-tel-input"
                      className="col-md-2 col-form-label"
                    >
                      Zip Code
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="number"
                        defaultValue="20300"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-password-input"
                      className="col-md-2 col-form-label"
                    >
                      City
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="Jaipur"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-number-input"
                      className="col-md-2 col-form-label"
                    >
                      State
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="Rajasthan"
                        id="example-number-input"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-datetime-local-input"
                      className="col-md-2 col-form-label"
                    >
                      Country
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="India"
                        // id="example-datetime-local-input"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-date-input"
                      className="col-md-2 col-form-label"
                    >
                      Company Email
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="email"
                        defaultValue="xyz@gmail.com"
                        id="example-date-input"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-month-input"
                      className="col-md-2 col-form-label"
                    >
                      Company Phone
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="number"
                        defaultValue="123456789"
                        id="example-month-input"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-month-input"
                      className="col-md-2 col-form-label"
                    >
                      Company Phone 2
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="number"
                        defaultValue="123456789"
                        id="example-month-input"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-month-input"
                      className="col-md-2 col-form-label"
                    >
                      Mobile
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="number"
                        defaultValue="123456789"
                        id="example-month-input"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-week-input"
                      className="col-md-2 col-form-label"
                    >
                      Fax
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        // defaultValue="2019-W33"
                        id="example-week-input"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-time-input"
                      className="col-md-2 col-form-label"
                    >
                      website
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="url"
                        defaultValue="https://www.dizicx.com"
                        id="example-time-input"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-text-input"
                      className="col-md-2 col-form-label"
                    >
                      Company Registration
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="Dizicx Limited"
                      />
                    </div>
                  </Row>
                  {/* <Row className="mb-3">
                    <label
                      htmlFor="example-color-input"
                      className="col-md-2 col-form-label"
                    >
                      Company Registration
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control form-control-color mw-100"
                        type="text"
                        defaultValue="#556ee6"
                        id="example-color-input"
                      />
                    </div>
                  </Row> */}
                  <Row className="mb-3">
                    <label
                      className="col-md-2 col-form-label"
                      htmlFor="example-text-input"
                    >
                      Tax Number
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="TAX-XXXXX-XX"
                        // id="example-color-input"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label className="col-md-2 col-form-label">
                      Email Signature
                    </label>
                    <div className="col-md-10">
                      <textarea
                        className="form-control"
                        type="text"
                        defaultValue="Dizicx Limited"
                        id="example-color-input"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label className="col-md-2 col-form-label">
                      Terms and Conditions Link
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="url"
                        defaultValue="https://dizicx.com/wp-content/uploads/2020/11/Dizicx_customer_service_agreement.pdf"
                        id="example-color-input"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label className="col-md-2 col-form-label">
                      About us Link
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control "
                        type="url"
                        defaultValue="https://dizicx.com/about-us/"
                        id="example-color-input"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label className="col-md-2 col-form-label">
                      Privacy Policy Link
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="url"
                        defaultValue="https://dizicx.com/about-us/"
                        id="example-color-input"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label className="col-md-2 col-form-label">
                      Facebook Link
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control "
                        type="url"
                        // defaultValue="https://dizicx.com/about-us/"
                        id="example-color-input"
                      />
                    </div>
                    <Row className="mb-3">
                      <label className="col-md-2 col-form-label">
                        linkedin Link
                      </label>
                      <div className="col-md-10">
                        <input
                          className="form-control "
                          type="url"
                          // defaultValue="https://dizicx.com/about-us/"
                          id="example-color-input"
                        />
                      </div>
                    </Row>
                    <Row className="mb-3">
                      <label className="col-md-2 col-form-label">
                        Youtube Link
                      </label>
                      <div className="col-md-10">
                        <input
                          className="form-control"
                          type="url"
                          // defaultValue="https://dizicx.com/about-us/"
                          id="example-color-input"
                        />
                      </div>
                    </Row>
                    <Row className="mb-3">
                      <label className="col-md-2 col-form-label">
                        Instagram Link
                      </label>
                      <div className="col-md-10">
                        <input
                          className="form-control"
                          type="url"
                          // defaultValue="https://dizicx.com/about-us/"
                          id="example-color-input"
                        />
                      </div>
                    </Row>
                    <Row className="mb-3">
                      <label className="col-md-2 col-form-label">
                        Twitter Link
                      </label>
                      <div className="col-md-10">
                        <input
                          className="form-control"
                          type="url"
                          // defaultValue="https://dizicx.com/about-us/"
                          id="example-color-input"
                        />
                      </div>
                    </Row>
                    <Row className="mb-3">
                      <label className="col-md-2 col-form-label">
                        Telegram Link
                      </label>
                      <div className="col-md-10">
                        <input
                          className="form-control"
                          type="url"
                          // defaultValue="https://dizicx.com/about-us/"
                          id="example-color-input"
                        />
                      </div>
                    </Row>
                    <Row className="mb-3">
                      <label className="col-md-2 col-form-label">
                        Webinar Link
                      </label>
                      <div className="col-md-10">
                        <input
                          className="form-control"
                          type="url"
                          // defaultValue="https://dizicx.com/about-us/"
                          id="example-color-input"
                        />
                      </div>
                    </Row>
                    <Row className="mb-3">
                      <label className="col-md-2 col-form-label">
                        AML Policy
                      </label>
                      <div className="col-md-10">
                        <input
                          className="form-control"
                          type="url"
                          // defaultValue="https://dizicx.com/about-us/"
                          id="example-color-input"
                        />
                      </div>
                    </Row>
                    <Row className="mb-3">
                      <label className="col-md-2 col-form-label">
                        Privacy Statement
                      </label>
                      <div className="col-md-10">
                        <input
                          className="form-control "
                          type="url"
                          // defaultValue="https://dizicx.com/about-us/"
                          id="example-color-input"
                        />
                      </div>
                    </Row>
                    <Row className="mb-3">
                      <label className="col-md-2 col-form-label">
                        Declaimer Statement
                      </label>
                      <div className="col-md-10">
                        <input
                          className="form-control"
                          type="url"
                          // defaultValue="https://dizicx.com/about-us/"
                          id="example-color-input"
                        />
                      </div>
                    </Row>
                    <div>
                      <Button
                        type="button"
                        color="success"
                        className="btn-rounded  mb-2 me-2"
                        // onClick={toggle}
                      >
                        save
                      </Button>
                    </div>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default GeneralSetting
