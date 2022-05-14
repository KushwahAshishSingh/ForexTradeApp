import React, { useEffect, useState } from "react"
import MetaTags from "react-meta-tags"
import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  FormFeedback,
  Button,
} from "reactstrap"
// Formik validation
import * as Yup from "yup"
import { useFormik } from "formik"
import classnames from "classnames"
import { Link } from "react-router-dom"
import Select from "react-select"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import { useDispatch, useSelector } from "react-redux"
import { getUserDropDown } from "store/actions"

const AddUser = props => {
  const [activeTab, setactiveTab] = useState(1)
  const [selectedYear, setSelectedYear] = useState("")
  const [passedSteps, setPassedSteps] = useState([1])
  const [saleagent, setSaleAgent] = useState("")

  const dispatch = useDispatch()
  const state = useSelector(state => {
    // console.log(state.UserReducer.UserDropDown)
    return state?.UserReducer?.UserDropDown?.data
  })

  //   console.log(state, "helllojf++++")

  useEffect(() => {
    dispatch(getUserDropDown())
  }, [])

  function toggleTab(tab) {
    // console.log("tab", tab)
    if (activeTab !== tab) {
      var modifiedSteps = [...passedSteps, tab]
      // console.log("modifiedSteps", modifiedSteps)
      if (tab >= 1 && tab <= 5) {
        setactiveTab(tab)
        setPassedSteps(modifiedSteps)
      }
    }
  }

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      salesagent: "",
      name: "",
      lastname: "",
      email: "",
      password: "",
      phonenumber: "",
      taxnumber: "",
      notes: "",
      tags: "",
      dob: "",
      phoneverified: "",
      emailverified: "",
      kycverified: "",
      sendwelcomeemail: "",
      sendemailverification: "",
      fax: "",
      addressone: "",
      addresstwo: "",
      city: "",
      zipcode: "",
      locale: "",
      currency: "",
      state: "",
      country: "",
      totalnetworth: "",
      totalannualincome: "",
      employmentstatus: "",
      sourceofincome: "",
      forexandotherinstruments: "",
      experiecneinyears: "",
      qualificationyears: "",
      investmentinusd: "",
      notifications: "",
      ibtype: "",
      targetcountry: "",
      acquireclients: "",
      websiteorsociallink: "",
      ibwithotherbroker: "",
      currentnumberofclients: "",
      clientsinthreemonths: "",
      avgmonthlytradingvolume: "",
    },
    validationSchema: Yup.object({
      salesagent: Yup.string().required("Select Sales Agent"),
      name: Yup.string().required("Please Enter Your Name"),
      email: Yup.string().required("Please Enter Your Email"),
      password: Yup.string().required("Please Enter Your Password"),
      phonenumber: Yup.string().required("Please Enter Your Phone-Number"),
      addressone: Yup.string().required("Please Enter Your Address"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values)
      //     dispatch(AdminUsers(values,));
      //     resetForm({ values: '' });
    },
  })
  const handleSelectBox = a => {
    // console.log('selectedYear', a);
    setSaleAgent(a.value)
  }
  const handleYearChange = (selectedYear, values) => {
    // console.log("ttt", selectedYear, values)
    // values.salesagent = selectedYear.value;
    // console.log(selectedYear);
    setSelectedYear(selectedYear)
  }

  const yearOptions = [
    { value: "DIZICX", label: "DIZICX1" },
    { value: "DIZICX", label: "DIZICX2" },
    { value: "DIZICX", label: "DIZICX3" },
  ]

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>AddUser | ForexTrade</title>
        </MetaTags>
        <Container fluid={true}>
          <Breadcrumbs title="Main Menu" breadcrumbItem="Add User" />

          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Add User</h4>
                  <div className="wizard clearfix">
                    <div className="steps clearfix">
                      <ul>
                        <NavItem
                          className={classnames({ current: activeTab === 1 })}
                        >
                          <NavLink
                            className={classnames({ current: activeTab === 1 })}
                            onClick={() => {
                              setactiveTab(1)
                            }}
                            disabled={!(passedSteps || []).includes(1)}
                          >
                            <span className="number">1</span> General
                          </NavLink>
                        </NavItem>
                        <NavItem
                          className={classnames({ current: activeTab === 2 })}
                        >
                          <NavLink
                            className={classnames({ active: activeTab === 2 })}
                            onClick={() => {
                              setactiveTab(2)
                            }}
                            disabled={!(passedSteps || []).includes(2)}
                          >
                            <span className="number ms-2">02</span> Contact
                          </NavLink>
                        </NavItem>
                        <NavItem
                          className={classnames({ current: activeTab === 3 })}
                        >
                          <NavLink
                            className={classnames({ active: activeTab === 3 })}
                            onClick={() => {
                              setactiveTab(3)
                            }}
                            disabled={!(passedSteps || []).includes(3)}
                          >
                            <span className="number">03</span> Trading
                          </NavLink>
                        </NavItem>
                        <NavItem
                          className={classnames({ current: activeTab === 4 })}
                        >
                          <NavLink
                            className={classnames({ active: activeTab === 4 })}
                            onClick={() => {
                              setactiveTab(4)
                            }}
                            disabled={!(passedSteps || []).includes(4)}
                          >
                            <span className="number">04</span> Notifications
                          </NavLink>
                        </NavItem>
                        <NavItem
                          className={classnames({ current: activeTab === 5 })}
                        >
                          <NavLink
                            className={classnames({ active: activeTab === 5 })}
                            onClick={() => {
                              setactiveTab(5)
                            }}
                            disabled={!(passedSteps || []).includes(5)}
                          >
                            <span className="number">05</span> Information
                          </NavLink>
                        </NavItem>
                      </ul>
                    </div>
                    <div className="content clearfix mt-4">
                      <TabContent activeTab={activeTab}>
                        <TabPane tabId={1}>
                          <Form
                            onSubmit={e => {
                              e.preventDefault()
                              validation.handleSubmit()
                              return false
                            }}
                          >
                            <Row>
                              <Col lg="12">
                                <div className="mb-3">
                                  <Label>
                                    Sales Agent{" "}
                                    <span style={{ color: "red" }}>*</span>
                                  </Label>
                                  <Select
                                    placeholder="DIZICX"
                                    value={selectedYear}
                                    options={yearOptions}
                                    name="salesagent"
                                    onBlur={validation.handleBlur("salesagent")}
                                    isClearable={true}
                                    onChange={selectedOption => {
                                      handleYearChange(selectedOption)
                                      validation.handleChange("salesagent")(
                                        selectedOption.value
                                      )
                                    }}
                                  />
                                  <Input
                                    name="salesagent"
                                    tabIndex={-1}
                                    autoComplete="off"
                                    style={{ opacity: 0, height: 0 }}
                                    value={validation.values.salesagent || ""}
                                    invalid={
                                      validation.touched.salesagent &&
                                      validation.errors.salesagent
                                        ? true
                                        : false
                                    }
                                    readOnly
                                  />
                                  {validation.touched.salesagent &&
                                  validation.errors.salesagent ? (
                                    <FormFeedback type="invalid">
                                      {validation.errors.salesagent}
                                    </FormFeedback>
                                  ) : null}
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <Col lg="6">
                                <div className="mb-3">
                                  <Label for="basicpill-firstname-input1">
                                    Company Name/Full Name
                                    <span style={{ color: "red" }}>*</span>
                                  </Label>
                                  <Input
                                    name="name"
                                    type="text"
                                    className="form-control"
                                    id="basicpill-name-input1"
                                    placeholder="Enter Your Full Name"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.name || ""}
                                    invalid={
                                      validation.touched.name &&
                                      validation.errors.name
                                        ? true
                                        : false
                                    }
                                  />
                                  {validation.touched.name &&
                                  validation.errors.name ? (
                                    <FormFeedback type="invalid">
                                      {validation.errors.name}
                                    </FormFeedback>
                                  ) : null}
                                </div>
                              </Col>
                              <Col lg="6">
                                <div className="mb-3">
                                  <Label for="basicpill-lastname-input2">
                                    Last Name
                                  </Label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-lastname-input2"
                                    placeholder="Enter Your Last Name"
                                  />
                                </div>
                              </Col>
                            </Row>

                            <Row>
                              <Col lg="6">
                                <div className="mb-3">
                                  <Label for="basicpill-email-input3">
                                    E-Mail
                                    <span style={{ color: "red" }}>*</span>
                                  </Label>
                                  <Input
                                    name="email"
                                    type="email"
                                    className="form-control"
                                    id="basicpill-email-input1"
                                    placeholder="Enter Your Email"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.email || ""}
                                    invalid={
                                      validation.touched.email &&
                                      validation.errors.email
                                        ? true
                                        : false
                                    }
                                  />
                                  {validation.touched.email &&
                                  validation.errors.email ? (
                                    <FormFeedback type="invalid">
                                      {validation.errors.email}
                                    </FormFeedback>
                                  ) : null}
                                </div>
                              </Col>
                              <Col lg="6">
                                <div className="mb-3">
                                  <Label for="basicpill-password-input4">
                                    Password
                                    <span style={{ color: "red" }}>*</span>
                                  </Label>
                                  <Input
                                    name="password"
                                    type="password"
                                    className="form-control"
                                    id="basicpill-password-input1"
                                    placeholder="Enter Your Full Password"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.password || ""}
                                    invalid={
                                      validation.touched.password &&
                                      validation.errors.password
                                        ? true
                                        : false
                                    }
                                  />
                                  {validation.touched.password &&
                                  validation.errors.password ? (
                                    <FormFeedback type="invalid">
                                      {validation.errors.password}
                                    </FormFeedback>
                                  ) : null}
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <Col lg="6">
                                <div className="mb-3">
                                  <Label for="basicpill-phoneno-input3">
                                    Phone No.
                                    <span style={{ color: "red" }}>*</span>
                                  </Label>
                                  <Input
                                    name="phonenumber"
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input1"
                                    placeholder="Enter Your Phone Number"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.phonenumber || ""}
                                    invalid={
                                      validation.touched.phonenumber &&
                                      validation.errors.phonenumber
                                        ? true
                                        : false
                                    }
                                  />
                                  {validation.touched.phonenumber &&
                                  validation.errors.phonenumber ? (
                                    <FormFeedback type="invalid">
                                      {validation.errors.phonenumber}
                                    </FormFeedback>
                                  ) : null}
                                </div>
                              </Col>
                              <Col lg="6">
                                <div className="mb-3">
                                  <Label for="basicpill-tax-input4">
                                    Tax Number
                                  </Label>
                                  <Input
                                    name="taxnumber"
                                    type="text"
                                    className="form-control"
                                    id="basicpill-tax-input4"
                                    placeholder="Enter Your Tax Number"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.taxnumber || ""}
                                  />
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <Col lg="12">
                                <div className="mb-3">
                                  <Label for="basicpill-address-input1">
                                    Address
                                  </Label>
                                  <textarea
                                    name="notes"
                                    id="basicpill-address-input1"
                                    className="form-control"
                                    rows="2"
                                    placeholder="Enter Your Address"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.notes || ""}
                                  />
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <Col lg="6">
                                <div className="mb-3">
                                  <Label for="basicpill-tag-input3">Tags</Label>
                                  <Input
                                    name="tags"
                                    type="text"
                                    className="form-control"
                                    id="basicpill-tag-input3"
                                    placeholder="Enter Your Tag"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.tags || ""}
                                  />
                                </div>
                              </Col>
                              <Col lg="6">
                                <div className="mb-3">
                                  <Label for="basicpill-date-input4">
                                    Date Of Birth
                                  </Label>
                                  <Input
                                    name="dob"
                                    type="date"
                                    className="form-control"
                                    id="basicpill-date-input4"
                                    placeholder="Please Select Date"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.dob || ""}
                                  />
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <Col lg="12">
                                <FormGroup className="pr-4" check inline>
                                  <Input
                                    type="checkbox"
                                    name="phoneverified"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={
                                      validation.values.phoneverified || ""
                                    }
                                  />
                                  <Label check>Phone Verified</Label>
                                </FormGroup>
                                <FormGroup check inline>
                                  <Input
                                    type="checkbox"
                                    name="emailverified"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={
                                      validation.values.emailverified || ""
                                    }
                                  />
                                  <Label check>Email Verified</Label>
                                </FormGroup>
                                <FormGroup check inline>
                                  <Input
                                    type="checkbox"
                                    name="kycverified"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.kycverified || ""}
                                  />
                                  <Label check>KYC Verified</Label>
                                </FormGroup>
                                <FormGroup check inline>
                                  <Input
                                    type="checkbox"
                                    name="sendwelcomeemail"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={
                                      validation.values.sendwelcomeemail || ""
                                    }
                                  />
                                  <Label check>Send Welcome Email</Label>
                                </FormGroup>
                                <FormGroup check inline>
                                  <Input
                                    type="checkbox"
                                    name="sendemailverification"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={
                                      validation.values.sendemailverification ||
                                      ""
                                    }
                                  />
                                  <Label check>Send Email Verification</Label>
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col lg="12">
                                <div className="mt-3">
                                  I have read, understood and accept the Privecy
                                  Policy,Risk Disclosures and Terms &
                                  Conditions.
                                </div>
                              </Col>
                            </Row>
                            <div
                              className="actions clearfix"
                              style={{ textAlign: "right" }}
                            >
                              <Button
                                style={{
                                  marginRight: "15px",
                                  backgroundColor: "#556ee6",
                                }}
                                type="button"
                                className={
                                  activeTab === 1
                                    ? "previous disabled"
                                    : "previous"
                                }
                              >
                                <Link
                                  style={{ color: "#fff" }}
                                  to="#"
                                  onClick={() => {
                                    toggleTab(activeTab - 1)
                                  }}
                                >
                                  Previous
                                </Link>
                              </Button>
                              <Button
                                style={{ backgroundColor: "#556ee6" }}
                                type="submit"
                                className={activeTab === 5 ? "next " : "next"}
                              >
                                <Link
                                  style={{ color: "#fff" }}
                                  to="#"
                                  onClick={() => {
                                    toggleTab(activeTab + 1)
                                  }}
                                >
                                  Save
                                </Link>
                              </Button>
                            </div>
                          </Form>
                        </TabPane>
                        <TabPane tabId={2}>
                          <div>
                            <Form
                              onSubmit={e => {
                                e.preventDefault()
                                validation.handleSubmit()
                                return false
                              }}
                            >
                              <Row>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="basicpill-address1-input1">
                                      Address 1
                                    </Label>
                                    <textarea
                                      name="addressone"
                                      id="basicpill-address1-input1"
                                      className="form-control"
                                      rows="4"
                                      placeholder="Enter Your Address"
                                      onChange={validation.handleChange}
                                      onBlur={validation.handleBlur}
                                      value={validation.values.addressone || ""}
                                      invalid={
                                        validation.touched.addressone &&
                                        validation.errors.addressone
                                          ? true
                                          : false
                                      }
                                    />
                                    {validation.touched.addressone &&
                                    validation.errors.addressone ? (
                                      <FormFeedback type="invalid">
                                        {validation.errors.addressone}
                                      </FormFeedback>
                                    ) : null}
                                  </div>
                                </Col>

                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="basicpill-address2-input1">
                                      Address 2
                                    </Label>
                                    <textarea
                                      name="addresstwo"
                                      id="basicpill-address1-input1"
                                      className="form-control"
                                      rows="4"
                                      placeholder="Enter Your Address"
                                      onChange={validation.handleChange}
                                      onBlur={validation.handleBlur}
                                      value={validation.values.addresstwo || ""}
                                    />
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="basicpill-city-input7">
                                      City
                                    </Label>
                                    <Input
                                      name="city"
                                      type="text"
                                      className="form-control"
                                      id="basicpill-city-input7"
                                      placeholder="Enter Your City"
                                      onChange={validation.handleChange}
                                      onBlur={validation.handleBlur}
                                      value={validation.values.city || ""}
                                    />
                                  </div>
                                </Col>

                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="basicpill-zipcode-input8">
                                      Zip Code
                                    </Label>
                                    <Input
                                      name="zipcode"
                                      type="text"
                                      className="form-control"
                                      id="basicpill-zipcode-input8"
                                      placeholder="Enter Your Zip Code"
                                      onChange={validation.handleChange}
                                      onBlur={validation.handleBlur}
                                      value={validation.values.zipcode || ""}
                                    />
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label>Locale</Label>
                                    <select
                                      name="locale"
                                      className="form-select"
                                      onChange={validation.handleChange}
                                      value={validation.values.locale || ""}
                                      onBlur={validation.handleBlur}
                                      invalid={
                                        validation.touched.locale &&
                                        validation.errors.locale
                                          ? true
                                          : false
                                      }
                                    >
                                      <option defaultValue>
                                        please select
                                      </option>
                                      <option>English</option>
                                    </select>
                                    {validation.touched.locale &&
                                    validation.errors.locale ? (
                                      <FormFeedback type="invalid">
                                        {validation.errors.locale}
                                      </FormFeedback>
                                    ) : null}
                                  </div>
                                </Col>

                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label>Currency</Label>

                                    <select
                                      name="currency"
                                      className="form-select"
                                      onChange={validation.handleChange}
                                      value={validation.values.currency || ""}
                                      onBlur={validation.handleBlur}
                                      invalid={
                                        validation.touched.currency &&
                                        validation.errors.currency
                                          ? true
                                          : false
                                      }
                                    >
                                      {state &&
                                        state.currency.map(item => {
                                          return (
                                            <React.Fragment key={item}>
                                              <option defaultValue>
                                                {item}
                                              </option>
                                            </React.Fragment>
                                          )
                                        })}
                                    </select>
                                    {validation.touched.currency &&
                                    validation.errors.currency ? (
                                      <FormFeedback type="invalid">
                                        {validation.errors.currency}
                                      </FormFeedback>
                                    ) : null}
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="basicpill-state-input8">
                                      State
                                    </Label>
                                    <Input
                                      name="state"
                                      type="text"
                                      className="form-control"
                                      id="basicpill-state-input8"
                                      placeholder="Enter Your State"
                                      onChange={validation.handleChange}
                                      value={validation.values.state || ""}
                                    />
                                  </div>
                                </Col>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label>Country</Label>
                                    <select
                                      className="form-select"
                                      name="country"
                                      onChange={validation.handleChange}
                                      value={validation.values.country || ""}
                                    >
                                      {state &&
                                        state.TargetCountry.map(item => {
                                          return (
                                            <React.Fragment key={item}>
                                              <option defaultValue>
                                                {item}
                                              </option>
                                            </React.Fragment>
                                          )
                                        })}
                                    </select>
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="basicpill-fax-input8">
                                      Fax
                                    </Label>
                                    <Input
                                      name="fax"
                                      type="text"
                                      className="form-control"
                                      id="basicpill-fax-input8"
                                      placeholder="Enter Your State"
                                      onChange={validation.handleChange}
                                      value={validation.values.fax || ""}
                                    />
                                  </div>
                                </Col>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="exampleFile">Logo</Label>
                                    <input
                                      className="form-control"
                                      id="file"
                                      name="serviceImage"
                                      // value={values.serviceImage}
                                      type="file"
                                      // onChange={event => setFieldValue('serviceImage', event.currentTarget.files[0])}
                                    />
                                  </div>
                                </Col>
                                <Row>
                                  <Col lg="12">
                                    <div className="mt-3">
                                      I have read, understood and accept the
                                      Privecy Policy,Risk Disclosures and Terms
                                      & Conditions.
                                    </div>
                                  </Col>
                                </Row>
                              </Row>
                              <div
                                className="actions clearfix"
                                style={{ textAlign: "right" }}
                              >
                                <Button
                                  style={{
                                    marginRight: "15px",
                                    backgroundColor: "#556ee6",
                                  }}
                                  type="button"
                                  className={
                                    activeTab === 1
                                      ? "previous disabled"
                                      : "previous"
                                  }
                                >
                                  <Link
                                    style={{ color: "#fff" }}
                                    to="#"
                                    onClick={() => {
                                      toggleTab(activeTab - 1)
                                    }}
                                  >
                                    Previous
                                  </Link>
                                </Button>
                                <Button
                                  style={{ backgroundColor: "#556ee6" }}
                                  type="submit"
                                  className={activeTab === 5 ? "next " : "next"}
                                >
                                  <Link
                                    style={{ color: "#fff" }}
                                    to="#"
                                    onClick={() => {
                                      toggleTab(activeTab + 1)
                                    }}
                                  >
                                    Save
                                  </Link>
                                </Button>
                              </div>
                            </Form>
                          </div>
                        </TabPane>
                        <TabPane tabId={3}>
                          <div>
                            <Form
                              onSubmit={e => {
                                e.preventDefault()
                                validation.handleSubmit()
                                return false
                              }}
                            >
                              <Row>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label>Total Estimated Net Worth($)?</Label>
                                    <select
                                      className="form-select"
                                      name="totalnetworth"
                                      onChange={validation.handleChange}
                                      value={
                                        validation.values.totalnetworth || ""
                                      }
                                    >
                                      <option defaultValue>
                                        Select-option
                                      </option>
                                      {state &&
                                        state.TotalEstimatedNetWorth.map(
                                          item => {
                                            return (
                                              <React.Fragment key={item}>
                                                <option>{item}</option>
                                              </React.Fragment>
                                            )
                                          }
                                        )}
                                    </select>
                                  </div>
                                </Col>

                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label>
                                      Total Estimated Annual Income($)?
                                    </Label>
                                    <select className="form-select">
                                      <option defaultValue>
                                        Select-option
                                      </option>
                                      {state &&
                                        state.TotalEstimatedAnnualIncome.map(
                                          item => {
                                            return (
                                              <React.Fragment key={item}>
                                                <option>{item}</option>
                                              </React.Fragment>
                                            )
                                          }
                                        )}
                                    </select>
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label>Your Employment Status</Label>
                                    <select className="form-select">
                                      <option defaultValue>
                                        Select-option
                                      </option>
                                      {state &&
                                        state.YourEmploymentStatus.map(item => {
                                          return (
                                            <React.Fragment key={item}>
                                              <option>{item}</option>
                                            </React.Fragment>
                                          )
                                        })}
                                    </select>
                                  </div>
                                </Col>

                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label>Source Of Income/Wealth</Label>
                                    <select className="form-select">
                                      <option defaultValue>
                                        Select-option
                                      </option>
                                      {state &&
                                        state.SourceOfIncomeOrWelth.map(
                                          item => {
                                            return (
                                              <React.Fragment key={item}>
                                                <option>{item}</option>
                                              </React.Fragment>
                                            )
                                          }
                                        )}
                                    </select>
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="12">
                                  <div className="mb-3">
                                    <Label>
                                      FOREX,CFDS and other Instruments
                                    </Label>
                                    <select className="form-select">
                                      <option defaultValue>
                                        Select-option
                                      </option>
                                      {state &&
                                        state.ForexCfdsAndOtherInstruments.map(
                                          item => {
                                            return (
                                              <React.Fragment key={item}>
                                                <option>{item}</option>
                                              </React.Fragment>
                                            )
                                          }
                                        )}
                                    </select>
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="12">
                                  <div className="mb-3">
                                    <Label>
                                      Derivative products are suitable as part
                                      of my investment objectives and attitude
                                      towards risk and i am abel to access the
                                      risk involved trading them, including the
                                      possibility that i may lose all of my
                                      capital.
                                    </Label>
                                    <select className="form-select">
                                      <option defaultValue>
                                        Select-option
                                      </option>
                                      {state &&
                                        state.InitialInvestment.map(item => {
                                          return (
                                            <React.Fragment key={item}>
                                              <option>{item}</option>
                                            </React.Fragment>
                                          )
                                        })}
                                    </select>
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="12">
                                  <div className="mb-3">
                                    <Label>
                                      I have previous qualifications and/or work
                                      experience in the financial service
                                      industry
                                    </Label>
                                    <select className="form-select">
                                      <option defaultValue>
                                        Select-option
                                      </option>
                                      {state &&
                                        state.WorkExperience.map(item => {
                                          return (
                                            <React.Fragment key={item}>
                                              <option>{item}</option>
                                            </React.Fragment>
                                          )
                                        })}
                                    </select>
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="12">
                                  <div className="mb-3">
                                    <Label>
                                      Expected inital amount of investment in
                                      USD?
                                    </Label>
                                    <select className="form-select">
                                      <option defaultValue>
                                        Select-option
                                      </option>
                                      {state &&
                                        state.InitialInvestment.map(item => {
                                          return (
                                            <React.Fragment key={item}>
                                              <option>{item}</option>
                                            </React.Fragment>
                                          )
                                        })}
                                    </select>
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="12">
                                  <div className="mt-3">
                                    I have read, understood and accept the
                                    Privecy Policy,Risk Disclosures and Terms &
                                    Conditions.
                                  </div>
                                </Col>
                              </Row>
                              <div
                                className="actions clearfix"
                                style={{ textAlign: "right" }}
                              >
                                <Button
                                  style={{
                                    marginRight: "15px",
                                    backgroundColor: "#556ee6",
                                  }}
                                  type="button"
                                  className={
                                    activeTab === 1
                                      ? "previous disabled"
                                      : "previous"
                                  }
                                >
                                  <Link
                                    style={{ color: "#fff" }}
                                    to="#"
                                    onClick={() => {
                                      toggleTab(activeTab - 1)
                                    }}
                                  >
                                    Previous
                                  </Link>
                                </Button>
                                <Button
                                  style={{ backgroundColor: "#556ee6" }}
                                  type="submit"
                                  className={activeTab === 5 ? "next " : "next"}
                                >
                                  <Link
                                    style={{ color: "#fff" }}
                                    to="#"
                                    onClick={() => {
                                      toggleTab(activeTab + 1)
                                    }}
                                  >
                                    Save
                                  </Link>
                                </Button>
                              </div>
                            </Form>
                          </div>
                        </TabPane>
                        <TabPane tabId={4}>
                          <div>
                            <Form
                              onSubmit={e => {
                                e.preventDefault()
                                validation.handleSubmit()
                                return false
                              }}
                            >
                              <Row>
                                <Col lg="12">
                                  <div className="mb-3">
                                    <Label>Notifications</Label>
                                    <Select
                                      // defaultValue={["mail", "database"]}
                                      isMulti
                                      name="notifications"
                                      options={state && state.Notifications}
                                      className="basic-multi-select"
                                      classNamePrefix="select"
                                      onChange={validation.handleChange}
                                      value={
                                        validation.values.notifications || ""
                                      }
                                    />
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="12">
                                  <div className="mt-3">
                                    I have read, understood and accept the
                                    Privecy Policy,Risk Disclosures and Terms &
                                    Conditions.
                                  </div>
                                </Col>
                              </Row>
                              <div
                                className="actions clearfix"
                                style={{ textAlign: "right" }}
                              >
                                <Button
                                  style={{
                                    marginRight: "15px",
                                    backgroundColor: "#556ee6",
                                  }}
                                  type="button"
                                  className={
                                    activeTab === 1
                                      ? "previous disabled"
                                      : "previous"
                                  }
                                >
                                  <Link
                                    style={{ color: "#fff" }}
                                    to="#"
                                    onClick={() => {
                                      toggleTab(activeTab - 1)
                                    }}
                                  >
                                    Previous
                                  </Link>
                                </Button>
                                <Button
                                  style={{ backgroundColor: "#556ee6" }}
                                  type="submit"
                                  className={activeTab === 5 ? "next " : "next"}
                                >
                                  <Link
                                    style={{ color: "#fff" }}
                                    to="#"
                                    onClick={() => {
                                      toggleTab(activeTab + 1)
                                    }}
                                  >
                                    Save
                                  </Link>
                                </Button>
                              </div>
                            </Form>
                          </div>
                        </TabPane>
                        <TabPane tabId={5}>
                          <div>
                            <Form
                              onSubmit={e => {
                                e.preventDefault()
                                validation.handleSubmit()
                                return false
                              }}
                            >
                              <Row>
                                <Col lg="12">
                                  <div className="mb-3">
                                    <Label>Ib Type</Label>
                                    <select className="form-select">
                                      <option defaultValue>
                                        Select-option
                                      </option>
                                      {state &&
                                        state.IbType.map(item => {
                                          return (
                                            <React.Fragment key={item}>
                                              <option>{item}</option>
                                            </React.Fragment>
                                          )
                                        })}
                                    </select>
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="12">
                                  <div className="mb-3">
                                    <Label>Target Country</Label>
                                    <select className="form-select">
                                      <option defaultValue>
                                        Select-option
                                      </option>
                                      {state &&
                                        state.TargetCountry.map(item => {
                                          return (
                                            <React.Fragment key={item}>
                                              <option>{item}</option>
                                            </React.Fragment>
                                          )
                                        })}
                                    </select>
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="12">
                                  <div className="mb-3">
                                    <Label>How do you Acquire Clients</Label>
                                    <select className="form-select">
                                      <option defaultValue>
                                        Select-option
                                      </option>
                                      {state &&
                                        state.AcquireClients.map(item => {
                                          return (
                                            <React.Fragment key={item}>
                                              <option>{item}</option>
                                            </React.Fragment>
                                          )
                                        })}
                                    </select>
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="12">
                                  <div className="mb-3">
                                    <Label>Website or Social Link</Label>
                                    <Input type="text" />
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="12">
                                  <div className="mb-3">
                                    <Label>
                                      Are You IB with any other brokers?
                                    </Label>
                                    <select className="form-select">
                                      <option defaultValue>
                                        Select-option
                                      </option>
                                      {state &&
                                        state.CurrentClients.map(item => {
                                          return (
                                            <React.Fragment key={item}>
                                              <option>{item}</option>
                                            </React.Fragment>
                                          )
                                        })}
                                    </select>
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="12">
                                  <div className="mb-3">
                                    <Label>
                                      How many Client do you have currently?
                                    </Label>
                                    <select className="form-select">
                                      <option defaultValue>
                                        Select-option
                                      </option>
                                      {state &&
                                        state.CurrentClients.map(item => {
                                          return (
                                            <React.Fragment key={item}>
                                              <option>{item}</option>
                                            </React.Fragment>
                                          )
                                        })}
                                    </select>
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="12">
                                  <div className="mb-3">
                                    <Label>
                                      How many clients do you expect introducing
                                      in the first months?
                                    </Label>
                                    <select className="form-select">
                                      <option defaultValue>
                                        Select-option
                                      </option>
                                      {state &&
                                        state.ClientsExpectInFirstThreeMonthes.map(
                                          item => {
                                            return (
                                              <React.Fragment key={item}>
                                                <option>{item}</option>
                                              </React.Fragment>
                                            )
                                          }
                                        )}
                                    </select>
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="12">
                                  <div className="mb-3">
                                    <Label>
                                      Expecting Average Monthly Trading Volume
                                    </Label>
                                    <select className="form-select">
                                      <option defaultValue>
                                        Select-option
                                      </option>
                                      {state &&
                                        state.ExpectedAvgMonthlyTradingVolume.map(
                                          item => {
                                            return (
                                              <React.Fragment key={item}>
                                                <option>{item}</option>
                                              </React.Fragment>
                                            )
                                          }
                                        )}
                                    </select>
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="12">
                                  <div className="mt-3">
                                    I have read, understood and accept the
                                    Privecy Policy,Risk Disclosures and Terms &
                                    Conditions.
                                  </div>
                                </Col>
                              </Row>
                              <div
                                className="actions clearfix"
                                style={{ textAlign: "right" }}
                              >
                                <Button
                                  style={{
                                    marginRight: "15px",
                                    backgroundColor: "#556ee6",
                                  }}
                                  type="button"
                                  className={
                                    activeTab === 1
                                      ? "previous disabled"
                                      : "previous"
                                  }
                                >
                                  <Link
                                    style={{ color: "#fff" }}
                                    to="#"
                                    onClick={() => {
                                      toggleTab(activeTab - 1)
                                    }}
                                  >
                                    Previous
                                  </Link>
                                </Button>
                                <Button
                                  style={{ backgroundColor: "#556ee6" }}
                                  type="submit"
                                  className={activeTab === 5 ? "next " : "next"}
                                >
                                  <Link
                                    style={{ color: "#fff" }}
                                    to="#"
                                    onClick={() => {
                                      toggleTab(activeTab + 1)
                                    }}
                                  >
                                    Save
                                  </Link>
                                </Button>
                              </div>
                            </Form>
                          </div>
                        </TabPane>
                      </TabContent>
                    </div>
                    {/* <div className="actions clearfix">
                                            <ul>
                                                <li
                                                    className={
                                                        activeTab === 1 ? "previous disabled" : "previous"
                                                    }
                                                >
                                                    <Link
                                                        to="#"
                                                        onClick={() => {
                                                            toggleTab(activeTab - 1)
                                                        }}
                                                    >
                                                        Previous
                                                    </Link>
                                                </li>
                                                <li
                                                    className={activeTab === 5 ? "next " : "next"}
                                                >
                                                    <Link
                                                        to="#"
                                                        onClick={() => {
                                                            toggleTab(activeTab + 1)
                                                        }}
                                                    >
                                                        Save

                                                    </Link>
                                                </li>
                                            </ul>
                                        </div> */}
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

export default AddUser
