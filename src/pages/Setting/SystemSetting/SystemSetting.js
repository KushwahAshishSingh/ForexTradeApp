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

const SystemSetting = () => {
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
          {/* <Breadcrumbs title="Forms" breadcrumbItem="Form Elements" /> */}

          <Row>
            <Col>
              <Card>
                <CardBody>
                  <CardTitle className="h4">System Setting</CardTitle>
                  {/* <p className="card-title-desc">
                    Here are examples of <code>.form-control</code> applied to
                    each textual HTML5 <code>&lt;input&gt;</code>{" "}
                    <code>type</code>.
                  </p> */}
                  {/* <Row>
                    <Col> */}
                  <div>
                    <div className="form-check form-switch form-switch-lg mb-3 col-md-12">
                      <label
                        className="form-check-label"
                        htmlFor="customSwitchsizelg"
                      >
                        Allow Withdraw with KYC Only
                      </label>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customSwitchsizelg"
                        defaultChecked
                      />
                    </div>
                    <div className="form-check form-switch form-switch-lg mb-3 col-md-12">
                      <label
                        className="form-check-label"
                        htmlFor="customSwitchsizelg"
                      >
                        Allow Live account with KYC Only
                      </label>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customSwitchsizelg"
                        defaultChecked
                      />
                    </div>
                    <div className="form-check form-switch form-switch-lg mb-3 col-md-12">
                      <label
                        className="form-check-label"
                        htmlFor="customSwitchsizelg"
                      >
                        LD Subscription
                      </label>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customSwitchsizelg"
                        defaultChecked
                      />
                    </div>
                    <div className="form-check form-switch form-switch-lg mb-3 col-md-12">
                      <label
                        className="form-check-label"
                        htmlFor="customSwitchsizelg"
                      >
                        Recurring LD Subscription
                      </label>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customSwitchsizelg"
                        defaultChecked
                      />
                    </div>
                    <div className="form-check form-switch form-switch-lg mb-3 col-md-12">
                      <label
                        className="form-check-label"
                        htmlFor="customSwitchsizelg"
                      >
                        Debit Balance/Credit upon Request
                      </label>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customSwitchsizelg"
                        defaultChecked
                      />
                    </div>
                    <div className="form-check form-switch form-switch-lg mb-3 col-md-12">
                      <label
                        className="form-check-label"
                        htmlFor="customSwitchsizelg"
                      >
                        Allow Live Accounts on Admins Approval
                      </label>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customSwitchsizelg"
                        defaultChecked
                      />
                    </div>
                    <div className="form-check form-switch form-switch-lg mb-3 col-md-12">
                      <label
                        className="form-check-label"
                        htmlFor="customSwitchsizelg"
                      >
                        Other Live Account After First Deposit
                      </label>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customSwitchsizelg"
                        defaultChecked
                      />
                    </div>
                    <div className="form-check form-switch form-switch-lg mb-3 col-md-12">
                      <label
                        className="form-check-label"
                        htmlFor="customSwitchsizelg"
                      >
                        Client Trading Agreement
                      </label>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customSwitchsizelg"
                        defaultChecked
                      />
                    </div>
                    <div className="form-check form-switch form-switch-lg mb-3 col-md-12">
                      <label
                        className="form-check-label"
                        htmlFor="customSwitchsizelg"
                      >
                        Allow Withdrawal Only If There Is No Open Trade
                      </label>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customSwitchsizelg"
                        defaultChecked
                      />
                    </div>
                    <div className="form-check form-switch form-switch-lg mb-3 col-md-12">
                      <label
                        className="form-check-label"
                        htmlFor="customSwitchsizelg"
                      >
                        Admin Approval on Additional Live Account
                      </label>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customSwitchsizelg"
                        defaultChecked
                      />
                    </div>
                    <div className="form-check form-switch form-switch-lg mb-3 col-md-12">
                      <label
                        className="form-check-label"
                        htmlFor="customSwitchsizelg"
                      >
                        Enable Sumsub KYC system
                      </label>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customSwitchsizelg"
                        defaultChecked
                      />
                    </div>
                  </div>
                  {/* </Col>
                  </Row> */}

                  <Row className="mb-3">
                    <div className="col-md-6">
                      <label
                        htmlFor="example-text-input"
                        className="col-md-6 col-form-label"
                      >
                        Live Account Create Limit(Client Portal)
                      </label>
                      <input
                        className="form-control"
                        type="number"
                        defaultValue="5"
                      />
                    </div>

                    {/* <Col lg=""> */}
                    <div className="mb-3 col-md-6">
                      <label className="col-md-6 col-form-label">
                        Default Language
                      </label>
                      <select className="form-select">
                        <option defaultValue>English</option>
                        <option value="VI">Hindi</option>
                      </select>
                    </div>
                    {/* </Col> */}
                  </Row>
                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <Label>Locale</Label>
                      <select className="form-select">
                        <option defaultValue>English-en</option>
                        <option value="VI">Hindi</option>
                      </select>
                    </div>
                    {/* </Col> */}
                  </Row>
                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <Label>Timezone</Label>
                      <select className="form-select">
                        <option defaultValue></option>
                        <option value="VI"></option>
                      </select>
                    </div>
                    {/* </Col> */}
                  </Row>
                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <Label>Default Currency</Label>
                      <select className="form-select">
                        <option defaultValue>Indian Rupee</option>
                        <option value="VI">United States Dollar</option>
                      </select>
                    </div>
                    {/* </Col> */}
                  </Row>
                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <Label>Currency Symbol</Label>
                      <select className="form-select">
                        <option defaultValue>$ U.S Dollar</option>
                        <option value="VI">Indian Rupees</option>
                      </select>
                    </div>
                    {/* </Col> */}
                  </Row>
                  <Row className="mb-3">
                    <div className="col-md-12">
                      <label
                        htmlFor="example-search-input"
                        className="col-md-6 col-form-label"
                      >
                        Deposit Bonus Limit
                      </label>
                      <input
                        className="form-control"
                        type="number"
                        defaultValue="5000"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <div className="col-md-12">
                      <label
                        htmlFor="example-email-input"
                        className="col-md-6 col-form-label"
                      >
                        XRate Deposit Margin
                      </label>
                      <input
                        className="form-control"
                        type=""
                        number
                        defaultValue="0.00"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <div className="col-md-12">
                      <label
                        htmlFor="example-url-input"
                        className="col-md-6 col-form-label"
                      >
                        XRate Withdrawal Margin
                      </label>
                      <input
                        className="form-control"
                        type="number"
                        defaultValue="0.00"
                      />
                    </div>
                  </Row>
                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>Thousand Separator</label>
                      <select className="form-select">
                        <option defaultValue>,</option>
                        {/* <option value="VI">Indian Rupees</option> */}
                      </select>
                    </div>
                    {/* </Col> */}
                  </Row>
                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>Decimal Separator</label>
                      <select className="form-select">
                        <option defaultValue>.</option>
                        {/* <option value="VI">Indian Rupees</option> */}
                      </select>
                    </div>
                    {/* </Col> */}
                  </Row>
                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>Default Calender</label>
                      <select className="form-select">
                        <option defaultValue>Work</option>
                        <option defaultValue>Personal</option>
                      </select>
                    </div>
                    {/* </Col> */}
                  </Row>
                  <Row className="mb-3">
                    <div className="col-md-12">
                      <label
                        htmlFor="example-password-input"
                        className="col-md-2 col-form-label"
                      >
                        Tax 1
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        // defaultValue="Jaipur"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <div className="col-md-12">
                      <label
                        htmlFor="example-number-input"
                        className="col-md-4 col-form-label"
                      >
                        Default Subscription
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        // defaultValue="Rajasthan"
                        id="example-number-input"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      // htmlFor="example-datetime-local-input"
                      className="col-md-2 col-form-label"
                    >
                      Tax1 Label
                    </label>
                    <div className="col-md-12">
                      <input
                        className="form-control"
                        type="text"
                        // defaultValue="India"
                        // id="example-datetime-local-input"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-date-input"
                      className="col-md-2 col-form-label"
                    >
                      Tax 2
                    </label>
                    <div className="col-md-12">
                      <input
                        className="form-control"
                        type="text"
                        // defaultValue="xyz@gmail.com"
                        id="example-date-input"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-month-input"
                      className="col-md-2 col-form-label"
                    >
                      Tax 2 Label
                    </label>
                    <div className="col-md-12">
                      <input
                        className="form-control col-md-10"
                        type="text"
                        // defaultValue="123456789"
                        id="example-month-input"
                      />
                    </div>
                  </Row>
                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>Tax Decimals (%)</label>
                      <select className="form-select">
                        <option defaultValue>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                    {/* </Col> */}
                  </Row>
                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>Quantity Decimals</label>
                      <select className="form-select">
                        <option defaultValue>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                    {/* </Col> */}
                  </Row>
                  <Row>
                    {/* <Col lg="12"> */}
                    <div className="mb-3">
                      <label>Date Format</label>
                      <input type="date" className="form-control col-md-10" />
                    </div>
                    {/* </Col> */}
                  </Row>
                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>File Max Size</label>
                      <input
                        type="number"
                        className="form-control col-md-10"
                        defaultValue="2000"
                      />
                    </div>
                    {/* </Col> */}
                  </Row>
                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>Allowed Files</label>
                      <input
                        type="number"
                        className="form-control col-md-10"
                        defaultValue="png, jpeg, jpg"
                      />
                    </div>
                    {/* </Col> */}
                  </Row>
                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>Privacy Policy URL</label>
                      <input
                        type="url"
                        className="form-control col-md-10"
                        defaultValue="Dizicx@gmail.com"
                      />
                    </div>
                    {/* </Col> */}
                  </Row>
                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>Slack Webhook URL </label>
                      <input
                        type="url"
                        className="form-control col-md-10"
                        defaultValue="Dizicx@gmail.com"
                      />
                    </div>
                    {/* </Col> */}
                  </Row>
                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>Wablas Token</label>
                      <input
                        type="text"
                        className="form-control col-md-10"
                        // defaultValue="Dizicx@gmail.com"
                      />
                    </div>
                    {/* </Col> */}
                  </Row>
                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>WhatsApp Number </label>
                      <input
                        type="number"
                        className="form-control col-md-10"
                        defaultValue="123456789"
                      />
                    </div>
                    {/* </Col> */}
                  </Row>
                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>WhatsApp Subscribe Text</label>
                      <input
                        type="text"
                        className="form-control col-md-10"
                        defaultValue="SUB"
                      />
                    </div>
                    {/* </Col> */}
                  </Row>
                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>SMS Driver</label>
                      <select className="form-select">
                        <option defaultValue>Nexmo</option>
                        <option>Infobip</option>
                        {/* <option>2</option>
                        <option>3</option> */}
                      </select>
                    </div>
                    {/* </Col> */}
                  </Row>
                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>Open Exchange API</label>
                      <input
                        type="text"
                        className="form-control col-md-10"
                        defaultValue="SUB"
                      />
                      <span>
                        Leave blank to use the default open exchange rates API
                      </span>
                    </div>
                    {/* </Col> */}
                  </Row>
                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>Google Calendar API Key</label>
                      <input
                        type="text"
                        className="form-control col-md-10"
                        defaultValue="#"
                      />
                    </div>
                    {/* </Col> */}
                  </Row>
                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>Google Calendar ID</label>
                      <input
                        type="text"
                        className="form-control col-md-10"
                        defaultValue="#"
                      />
                    </div>
                    {/* </Col> */}
                  </Row>
                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>Google Recaptcha Site Key</label>
                      <input
                        type="text"
                        className="form-control col-md-10"
                        defaultValue="#"
                      />
                    </div>
                    {/* </Col> */}
                  </Row>
                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>Google Recaptcha Secret Key</label>
                      <input
                        type="text"
                        className="form-control col-md-10"
                        defaultValue="#"
                      />
                    </div>
                    {/* </Col> */}
                  </Row>
                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>Google Recaptcha Secret Key</label>
                      <textarea
                        type="text"
                        className="form-control col-md-10"
                        // defaultValue="#"
                      />
                    </div>
                    {/* </Col> */}
                  </Row>
                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>Google Recaptcha Secret Key</label>
                      <textarea
                        type="text"
                        className="form-control col-md-10"
                        // defaultValue="#"
                      />
                    </div>
                    {/* </Col> */}
                  </Row>
                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>
                        Google tag manager (or other script for Head tag)
                      </label>
                      <textarea
                        placeholder="Google tag manager (or other script for <Head> tag"
                        type="text"
                        className="form-control col-md-10"
                        // defaultValue="#"
                      />
                    </div>
                    {/* </Col> */}
                  </Row>
                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>Google tag manager (No script)</label>
                      <textarea
                        placeholder="google tag manger (No script)"
                        type="text"
                        className="form-control col-md-10"
                        // defaultValue="#"
                      />
                    </div>
                    {/* </Col> */}
                  </Row>

                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>Live Chat Type</label>
                      <select className="form-select">
                        <option defaultValue>Chat Code</option>
                        <option>Infobip</option>
                        {/* <option>2</option>
                        <option>3</option> */}
                      </select>
                    </div>
                    {/* </Col> */}
                  </Row>

                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>Live Chat Code India</label>
                      <textarea
                        placeholder="Live Chat Code Arabic"
                        type="text"
                        className="form-control col-md-10"
                        defaultValue=""
                      />
                    </div>
                    {/* </Col> */}
                  </Row>

                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>Default Role</label>
                      <select className="form-select">
                        <option defaultValue>Client</option>
                        <option>Super_Manger</option>
                        <option>Admin</option>
                        <option>Partner</option>
                      </select>
                    </div>
                    {/* </Col> */}
                  </Row>
                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>PDF Engine</label>
                      <select className="form-select">
                        <option defaultValue>Client</option>
                        <option>Super_Manger</option>
                        <option>Admin</option>
                        <option>Partner</option>
                      </select>
                    </div>
                    {/* </Col> */}
                  </Row>

                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>MailChimp API key</label>
                      <input
                        placeholder="MailChimp API key"
                        type="text"
                        className="form-control col-md-10"
                        defaultValue=""
                      />
                    </div>
                    {/* </Col> */}
                  </Row>

                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>MailChimp Audience ID</label>
                      <input
                        placeholder="MailChimp Audience ID"
                        type="text"
                        className="form-control col-md-10"
                        defaultValue=""
                      />
                    </div>
                    {/* </Col> */}
                  </Row>

                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>ZOHO Auth URL</label>
                      <input
                        placeholder="MailChimp Audience ID"
                        type="text"
                        className="form-control col-md-10"
                        defaultValue=""
                      />
                      <span style={{ color: "red" }}>
                        {` (Ex:
                          https://accounts.zoho.com/oauth/v2/auth?scope=&prompt=&client_id=&response_type=code&access_type=offline&redirect_uri=)`}
                      </span>
                    </div>
                    {/* </Col> */}
                  </Row>

                  <hr />

                  <h6>Notification email settings</h6>
                  <br />

                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>Registration notification email</label>
                      <input
                        placeholder=""
                        type="email"
                        className="form-control col-md-10"
                        defaultValue="support@dizicx.com"
                      />
                    </div>
                    {/* </Col> */}
                  </Row>

                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>Partner Registration notification email</label>
                      <input
                        placeholder=""
                        type="email"
                        className="form-control col-md-10"
                        defaultValue="partner@dizicx.com"
                      />
                    </div>
                    {/* </Col> */}
                  </Row>

                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>
                        Funding notification email (multiple emails comma
                        separated)
                      </label>
                      <input
                        placeholder=""
                        type="email"
                        className="form-control col-md-10"
                        defaultValue="funding@dizicx.com"
                      />
                    </div>
                    {/* </Col> */}
                  </Row>

                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>
                        Partner Funding notification email (multiple emails
                        comma separated)
                      </label>
                      <input
                        placeholder=""
                        type="email"
                        className="form-control col-md-10"
                        defaultValue="funding@dizicx.com"
                      />
                    </div>
                    {/* </Col> */}
                  </Row>

                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>
                        KYC approved Notification(multiple emails comma
                        separated)
                      </label>
                      <input
                        placeholder=""
                        type="email"
                        className="form-control col-md-10"
                        defaultValue="support@dizicx.com"
                      />
                    </div>
                    {/* </Col> */}
                  </Row>

                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>Document notification email</label>
                      <input
                        placeholder=""
                        type="email"
                        className="form-control col-md-10"
                        defaultValue="support@dizicx.com"
                      />
                    </div>
                    {/* </Col> */}
                  </Row>

                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>Live account notification email</label>
                      <input
                        placeholder=""
                        type="email"
                        className="form-control col-md-10"
                        defaultValue="support@dizicx.com"
                      />
                    </div>
                    {/* </Col> */}
                  </Row>

                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>Demo account notification email</label>
                      <input
                        placeholder="Demo account notification email"
                        type="email"
                        className="form-control col-md-10"
                        // defaultValue="support@dizicx.com"
                      />
                    </div>
                    {/* </Col> */}
                  </Row>

                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>API Connection notification email</label>
                      <input
                        placeholder=""
                        type="email"
                        className="form-control col-md-10"
                        defaultValue="support@dizicx.com"
                      />
                    </div>
                    {/* </Col> */}
                  </Row>

                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>Forex VPS notification email</label>
                      <input
                        placeholder="Forex VPS notification email"
                        type="email"
                        className="form-control col-md-10"
                        // defaultValue="support@dizicx.com"
                      />
                    </div>
                    {/* </Col> */}
                  </Row>

                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>Test account Live Login</label>
                      <input
                        placeholder="Forex VPS notification email"
                        type="number"
                        className="form-control col-md-10"
                        // defaultValue="support@dizicx.com"
                      />
                    </div>
                    {/* </Col> */}
                  </Row>
                  <hr />

                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>Live Server Name</label>
                      <input
                        placeholder=""
                        type="text"
                        className="form-control col-md-10"
                        defaultValue="DIZICX"
                      />
                    </div>
                    {/* </Col> */}
                  </Row>

                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>Demo Server Name</label>
                      <input
                        placeholder=""
                        type="text"
                        className="form-control col-md-10"
                        // defaultValue="DIZICX"
                      />
                    </div>
                    {/* </Col> */}
                  </Row>

                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>Servers Name(comma seprated)</label>
                      <input
                        placeholder=""
                        type="text"
                        className="form-control col-md-10"
                        // defaultValue="DIZICX"
                      />
                    </div>
                    {/* </Col> */}
                  </Row>

                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>MT4 Windows Download Link</label>
                      <input
                        placeholder=""
                        type="url"
                        className="form-control col-md-10"
                        // defaultValue="DIZICX"
                      />
                    </div>
                    {/* </Col> */}
                  </Row>

                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>MT4 Android Download Link</label>
                      <input
                        placeholder=""
                        type="url"
                        className="form-control col-md-10"
                        // defaultValue="DIZICX"
                      />
                    </div>
                    {/* </Col> */}
                  </Row>

                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>MT4 iOS Download Link</label>
                      <input
                        placeholder=""
                        type="url"
                        className="form-control col-md-10"
                        // defaultValue="DIZICX"
                      />
                    </div>
                    {/* </Col> */}
                  </Row>

                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>MT5 Windows Download Link</label>
                      <input
                        placeholder=""
                        type="url"
                        className="form-control col-md-10"
                        defaultValue="https://download.mql5.com/cdn/web/19920/mt5/dizicx5setup.exe"
                      />
                    </div>
                    {/* </Col> */}
                  </Row>

                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>MT5 Android Download Link</label>
                      <input
                        placeholder=""
                        type="url"
                        className="form-control col-md-10"
                        defaultValue="https://download.mql5.com/cdn/web/19920/mt5/dizicx5setup.exe"
                      />
                    </div>
                    {/* </Col> */}
                  </Row>

                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>MT5 iOS Download Link</label>
                      <input
                        placeholder=""
                        type="url"
                        className="form-control col-md-10"
                        defaultValue="https://download.mql5.com/cdn/web/19920/mt5/dizicx5setup.exe"
                      />
                    </div>
                    {/* </Col> */}
                  </Row>
                  <hr />

                  <h5>Loyalty System Settings</h5>
                  <br />

                  <Row>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck1"
                        >
                          Loyalty System Status
                        </label>
                      </div>
                      <Button>Manage Loyalty Points</Button>
                    </Col>
                  </Row>
                  <hr />

                  <h5>Affiliates Panel Settings</h5>
                  <br />
                  <Row>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck3"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck3"
                        >
                          Enable Affiliate Panel Registration
                        </label>
                      </div>
                      <Button>Manage Affiliate Panel Setting</Button>
                    </Col>
                  </Row>

                  <hr />

                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>Volume Symbols Pair</label>
                      <input
                        placeholder="Volume Symbols Pair"
                        type="text"
                        className="form-control col-md-10"
                        defaultValue=""
                      />
                    </div>
                    {/* </Col> */}
                  </Row>
                  <hr />
                  <br />

                  <h5>Birthday bonus settings</h5>
                  <br />

                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="defaultCheck2"
                      >
                        Birthday bonus settings
                      </label>
                    </div>
                    {/* </Col> */}
                  </Row>

                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>Birthday bonus amount</label>
                      <input
                        placeholder="Birthday bonus amount"
                        type="number"
                        className="form-control col-md-10"
                        defaultValue=""
                      />
                      <span style={{ fontSize: "9px" }}>
                        {`(email type: birthday_bonus_email_reminder |
                          variables: {{ name }},{{ amount }},{{ link }},
                          {{ email }},{{ bonus_type }})`}
                      </span>
                    </div>
                    {/* </Col> */}
                  </Row>

                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>Disable birthday country</label>
                      <input
                        placeholder="Disable birthday country"
                        type="text"
                        className="form-control col-md-10"
                        defaultValue=""
                      />
                      <span style={{ fontSize: "9px" }}>
                        {`(Note: Enter comma seprated country code to disable specifc countries, if empty then enable for all. For example: IN,YE,AF)`}
                      </span>
                    </div>
                    {/* </Col> */}
                  </Row>

                  <hr />

                  <h5>Market Watch</h5>

                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>Widget Type</label>
                      <select className="form-select">
                        <option defaultValue>Table Widget</option>
                        <option>static ticker </option>
                        <option>Scrolling Ticker</option>
                      </select>
                    </div>
                    {/* </Col> */}
                  </Row>

                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>FOREX</label>
                      <input
                        placeholder="FOREX"
                        type="text"
                        className="form-control col-md-10"
                        defaultValue=""
                      />
                    </div>
                    {/* </Col> */}
                  </Row>

                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>Commodities</label>
                      <input
                        placeholder="Commodities"
                        type="text"
                        className="form-control col-md-10"
                        defaultValue=""
                      />
                    </div>
                    {/* </Col> */}
                  </Row>

                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>Indices</label>
                      <input
                        placeholder="Indices"
                        type="text"
                        className="form-control col-md-10"
                        defaultValue=""
                      />
                    </div>
                    {/* </Col> */}
                  </Row>

                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>Stocks</label>
                      <input
                        placeholder="Stocks"
                        type="text"
                        className="form-control col-md-10"
                        defaultValue=""
                      />
                    </div>
                    {/* </Col> */}
                  </Row>
                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>Crypto</label>
                      <input
                        placeholder="Crypto"
                        type="text"
                        className="form-control col-md-10"
                        defaultValue=""
                      />
                    </div>
                    {/* </Col> */}
                  </Row>

                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>Width</label>
                      <input
                        placeholder="0"
                        type="number"
                        className="form-control col-md-10"
                        defaultValue=""
                      />
                    </div>
                    {/* </Col> */}
                  </Row>

                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="mb-3">
                      <label>Height</label>
                      <input
                        placeholder="0"
                        type="number"
                        className="form-control col-md-10"
                        defaultValue=""
                      />
                    </div>
                    {/* </Col> */}
                  </Row>
                  <hr />

                  <h5>Admin Settings</h5>
                  <br />
                  <Row>
                    {/* <Col lg="6"> */}
                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck4"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="defaultCheck4"
                      >
                        Admin Funding Deposit Split tabs
                      </label>
                    </div>
                    {/* </Col> */}
                  </Row>
                  <hr />

                  <h5>Account Settings</h5>
                  <br />
                  <Row>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="Enable Auto Internal Transfer"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="Enable Auto Internal Transfer"
                        >
                          Enable Auto Internal Transfer
                        </label>
                      </div>
                    </Col>

                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck6"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck6"
                        >
                          Disable Profile Completeness on 100%
                        </label>
                      </div>
                    </Col>

                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck7"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck7"
                        >
                          Disable Deposit transaction
                        </label>
                      </div>
                    </Col>

                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck8"
                        />

                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck8"
                        >
                          Enable Third Party Transfer
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck9"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck9"
                        >
                          Disable Withdrawl transaction
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck10"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck10"
                        >
                          Enable Three step registration
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck11"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck11"
                        >
                          Disable transfer transaction
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck12"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck12"
                        >
                          Disable Trading Information Step
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck13"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck13"
                        >
                          Enable Live/Demo Account in registration
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck14"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck14"
                        >
                          Remove Bonus from Without Amount % (Based on
                          withdrawal/transfer amount & balance percentage)
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck15"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck15"
                        >
                          Min transfer settings
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck16"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck16"
                        >
                          Enable manual deposit bonus for approve popup
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck17"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck17"
                        >
                          Enable OTP for withdrawal(SMS & Email)
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck18"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck18"
                        >
                          Enable 5 step register on client dashboard
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck19"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck19"
                        >
                          Delete Demo Accounts after 45 Days If No Live accounts
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck20"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck20"
                        >
                          Enable bank details tab for client portal
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck21"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck21"
                        >
                          Enable withdraw decimal amount client portal
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck22"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck22"
                        >
                          Enable Live Account after Email/Mobile/KYC verified
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck23"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck23"
                        >
                          Enable transfer decimal amount client portal
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck24"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck24"
                        >
                          Enable Transfer Credit to Balance Option
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck25"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck25"
                        >
                          Enable withdraw decimal amount partner portal
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck26"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck26"
                        >
                          Enable create live-sub account(live account form 2)
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck27"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck27"
                        >
                          Enable transfer decimal amount partner portal
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck28"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck28"
                        >
                          Disable Account Leverage Update
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck29"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck29"
                        >
                          Enable LD Clients Transaction History
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck30"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck30"
                        >
                          Enable Copy Refer and Earn link
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck31"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck31"
                        >
                          Disable Ticket Menu client portal
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck32"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck32"
                        >
                          Enable Client Account Delete Option (Client side)
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck33"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck33"
                        >
                          Dashboard Trading Platform (Add links for butttons)
                        </label>
                      </div>
                    </Col>
                  </Row>
                  <br />

                  <h5>Wallet Settings</h5>
                  <br />
                  <Row>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck34"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck34"
                        >
                          Enable Client Account Delete Option (Client side)
                        </label>
                      </div>
                    </Col>
                  </Row>
                  <br />
                  <hr />

                  <h5>Deposit Settings</h5>
                  <br />
                  <Row>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck36"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck36"
                        >
                          Account Min. Deposit based on Total Deposit & Account
                          type first min deposit else recurring Payment getway
                          Min.
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck37"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck37"
                        >
                          Account Min. Deposit based on Account types
                          (recurring)
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck38"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck38"
                        >
                          Account Min. Deposit based on Payment getway
                          (recurring)
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck39"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck39"
                        >
                          Enable Demo account balance deposit
                        </label>
                      </div>
                    </Col>
                  </Row>
                  <hr />

                  <h5>Withdraw Settings</h5>
                  <br></br>
                  <Row>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck40"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck40"
                        >
                          Allow only 1 withdraw pending request
                        </label>
                      </div>
                    </Col>
                  </Row>
                  <hr />

                  <h5>Partner Settings</h5>
                  <br />
                  <Row>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck41"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck41"
                        >
                          Disable Partner Withdrawl transactio
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck42"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck42"
                        >
                          Disable Partner transfer transaction
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck43"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck43"
                        >
                          Disable Partner Login button
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck44"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck44"
                        >
                          Disable partner information step
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck45"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck45"
                        >
                          Disable partner verification
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck46"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck46"
                        >
                          Show client email verification status
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck47"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck47"
                        >
                          Enable Partner Client Transactions
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck48"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck48"
                        >
                          Assign referral client BDM as IB
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck49"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck49"
                        >
                          Enable IB Link to Partner Panel even if KYC Not
                          Verified
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck50"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck50"
                        >
                          Show Partner Portal Account Transactions
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck51"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck51"
                        >
                          Enable Partner Column in Leads Listing
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck52"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck52"
                        >
                          {"Show client email in IB's client page"}
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck53"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck53"
                        >
                          {" Show client mobile in IB's client page"}
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck54"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck54"
                        >
                          Show Profit Column IB Commission Page
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck55"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck55"
                        >
                          Show Comment Column IB Commission Page
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck56"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck56"
                        >
                          Disable Partner Level Block
                        </label>
                      </div>
                    </Col>
                  </Row>
                  <hr />

                  <h5>Theme Settings</h5>
                  <br />
                  <Row>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck57"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck57"
                        >
                          show fund manager (MAM/PAMM investment / brokeree)
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck58"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck58"
                        >
                          show social trading (CopyTrade brokeree)
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck58"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck58"
                        >
                          Show Fund Manager (PAMM investment | t4b.com)
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck59"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck59"
                        >
                          Show Dashboard Stats
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck60"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck60"
                        >
                          Show Market Analysis
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck61"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck61"
                        >
                          Show Economic Calendar (Custom Widget Code)
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck62"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck62"
                        >
                          Show Forex VPS
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck63"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck63"
                        >
                          Show Watch Market (Custom Widget code)
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck64"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck64"
                        >
                          Enable Contest (Contest Settings)
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck65"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck65"
                        >
                          Show Platform
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck66"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck66"
                        >
                          Show client name on commission report
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck67"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck67"
                        >
                          Show client email commission report
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck68"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck68"
                        >
                          Enable Social Media Icons
                        </label>
                      </div>
                    </Col>

                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck69>"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck69>"
                        >
                          Enable My Documents Menu
                        </label>
                      </div>
                    </Col>

                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck70"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck70"
                        >
                          Enable Profile Update
                        </label>
                      </div>
                    </Col>

                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck71"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck71"
                        >
                          Enable Todo (Admin Dashboard)
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck72"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck72"
                        >
                          Hide country column in Leads/Clients list admin
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck73"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck73"
                        >
                          Show Mr/Mrs in Leads/Clients/Users listing
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck74"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck74"
                        >
                          {`Enable dashboard's card block (Upload Card's Banner)`}
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck75"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck75"
                        >
                          Enable State City Dropdown
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck76"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck76"
                        >
                          Enable Receipt Deposit Payment Method
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck77"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck77"
                        >
                          Show Sales Agent Profile
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck78"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck78"
                        >
                          Enable Products Menu (Client)
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck79"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck79"
                        >
                          Enable Edit Account Nick Name
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck80"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck80"
                        >
                          Enable Client Second and Middle Name
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck81"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck81"
                        >
                          Disable SMS option for invite & share
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck82"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck82"
                        >
                          Enable Profile Work Details
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck83"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck83"
                        >
                          Enable Knowledgebase Menu
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck84"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck84"
                        >
                          Show Trading Opportunities (Autochartist Integration)
                        </label>
                      </div>
                    </Col>
                  </Row>

                  <hr />
                  <h5>Notification settings</h5>
                  <br />
                  <Row>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck85"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck85"
                        >
                          Auto Reminders
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck86"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck86"
                        >
                          Auto Verification Reminder
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck87"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck87"
                        >
                          Enable Live/Demo account Notification
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck88"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck88"
                        >
                          Update Notifications
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck89"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck89"
                        >
                          Enable Register Notification
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck90"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck90"
                        >
                          Enable Funding Notification
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck91"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck91"
                        >
                          Enable Document Notification
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck92"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck92"
                        >
                          Enable Translated Email Notification
                        </label>
                      </div>
                    </Col>
                  </Row>
                  <hr />
                  <h5>Other Settings</h5>
                  <br />
                  <Row>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck93"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck93"
                        >
                          Enable Languages
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck94"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck94"
                        >
                          Use Gravatar
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck95"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck95"
                        >
                          Allow Client Registration
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck96"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck96"
                        >
                          Show amount in words
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck97"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck97"
                        >
                          Social Logins
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck98"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck98"
                        >
                          WhatsApp Enabled
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck99"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck99"
                        >
                          Exchange Rates
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck100"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck100"
                        >
                          Use ReCaptcha
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck101"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck101"
                        >
                          Clients Add Projects
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck102"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck102"
                        >
                          Stop timer logout
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck103"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck103"
                        >
                          Contract to Project
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck104"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck104"
                        >
                          Cookie Consent
                        </label>
                      </div>
                    </Col>
                  </Row>
                  <hr />

                  <h5>Registration Settings</h5>
                  <br />
                  <Row>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck105"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck105"
                        >
                          Enable Mobile Verification block
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck106"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck106"
                        >
                          Enable Email Verification block
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck107"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck107"
                        >
                          Need Document Upload Block
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck108"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck108"
                        >
                          Send Email Verification Link
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck109"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck109"
                        >
                          Disable Email Verification OTP
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck110"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck110"
                        >
                          Mobile number should be unique
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck111"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck111"
                        >
                          Skip to dashboard
                        </label>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck112"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck112"
                        >
                          Send welcome email with verification
                        </label>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              <div>
                <Button
                  type="button"
                  // color="success"
                  className="mb-2 me-2"
                  // onClick={toggle}
                >
                  save
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default SystemSetting
