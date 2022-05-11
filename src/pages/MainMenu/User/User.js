import React, { useEffect, useState, useRef } from "react"
import MetaTags from "react-meta-tags"
import PropTypes from "prop-types"
import { withRouter, Link, useHistory } from "react-router-dom"
//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import { isEmpty } from "lodash"
import Select from "react-select"
import {
  TabContent,
  TabPane,
  Row,
  Col,
  Card,
  CardBody,
  FormGroup,
  NavLink,
  NavItem,
  FormFeedback,
  Button,
  Container,
  Input,
  Label,
  ModalFooter,
  Modal,
  ModalBody,
  ModalHeader,
  Form,
  UncontrolledTooltip,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
// Formik validation
import * as Yup from "yup"
import { useFormik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { AdminUsers, getUser, viewUserProfile } from "store/actions"
// datatable related plugins
import BootstrapTable from "react-bootstrap-table-next"
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
  SizePerPageDropdownStandalone,
} from "react-bootstrap-table2-paginator"
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min"
import "../../../assets/scss/datatables.scss"
import moment from "moment"

const User = props => {
  const permissions = JSON.parse(localStorage.getItem("authUser")).permissions
  const [isEdit, setIsEdit] = useState(false)
  const history = useHistory()
  const [updateData, setUpdateData] = useState(null)
  const dispatch = useDispatch()
  const state = useSelector(state => {
    return state?.UserReducer?.User?.data
  })

  // const id = state?.map(e => e.id)
  // console.log(id, "llllllllllll")

  // const indexValue = state?.findIndex(e => e.id )
  // console.log(indexValue, "======")

  const [activeTab, setactiveTab] = useState(1)
  const [selectedYear, setSelectedYear] = useState("")

  const [passedSteps, setPassedSteps] = useState([1])

  function toggleTab(tab) {
    if (activeTab !== tab) {
      var modifiedSteps = [...passedSteps, tab]
      if (tab >= 1 && tab <= 5) {
        setactiveTab(tab)
        setPassedSteps(modifiedSteps)
      }
    }
  }

  const [orderList, setOrderList] = useState([])
  const [order, setOrder] = useState(null)

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      salesagent: (order && order.salesagent) || "",
      name: (order && order.name) || "",
    },
    validationSchema: Yup.object({
      salesagent: Yup.string().required("Select Year"),
      name: Yup.string().required("Please Enter Your Name"),
    }),
    onSubmit: values => {
      if (isEdit) {
        const updateOrder = {
          salesagent: values.salesagent,
          name: values.name,
        }
        // update order
        // dispatch(onUpdateOrder(updateOrder))
        validation.resetForm()
      }
      togg()
    },
  })

  const [modal, setModal] = useState(false)

  // const [isEdit, setIsEdit] = useState(false)
  // const validation = useFormik({
  //   // enableReinitialize : use this flag when initial values needs to be changed
  //   enableReinitialize: true,

  //   initialValues: {
  //     salesagent: (updateData && updateData.salesagent) || "",
  //     name: (updateData && updateData.name) || "",
  //     lastname: (updateData && updateData.lastname) || "",
  //     email: (updateData && updateData.email) || "",
  //     password: (updateData && updateData.password) || "",
  //     phonenumber: (updateData && updateData.phonenumber) || "",
  //     taxnumber: (updateData && updateData.taxnumber) || "",
  //     notes: (updateData && updateData.notes) || "",
  //     tags: (updateData && updateData.tags) || "",
  //     dob: (updateData && updateData.dob) || "",
  //     phoneverified: (updateData && updateData.phoneverified) || "",
  //     emailverified: (updateData && updateData.emailverified) || "",
  //     kycverified: (updateData && updateData.kycverified) || "",
  //     sendwelcomeemail: (updateData && updateData.sendwelcomeemail) || "",
  //     sendemailverification:
  //       (updateData && updateData.sendemailverification) || "",
  //     fax: (updateData && updateData.fax) || "",
  //     addressone: (updateData && updateData.addressone) || "",
  //     addresstwo: (updateData && updateData.addresstwo) || "",
  //     city: (updateData && updateData.city) || "",
  //     zipcode: (updateData && updateData.zipcode) || "",
  //     locale: (updateData && updateData.locale) || "",
  //     currency: (updateData && updateData.currency) || "",
  //     state: (updateData && updateData.state) || "",
  //     country: (updateData && updateData.country) || "",
  //     totalnetworth: (updateData && updateData.totalnetworth) || "",
  //     totalannualincome: (updateData && updateData.totalannualincome) || "",
  //     employmentstatus: (updateData && updateData.employmentstatus) || "",
  //     sourceofincome: (updateData && updateData.sourceofincome) || "",
  //     forexandotherinstruments:
  //       (updateData && updateData.forexandotherinstruments) || "",
  //     experiecneinyears: (updateData && updateData.experiecneinyears) || "",
  //     qualificationyears: (updateData && updateData.qualificationyears) || "",
  //     investmentinusd: (updateData && updateData.investmentinusd) || "",
  //     notifications: (updateData && updateData.notifications) || "",
  //     ibtype: (updateData && updateData.ibtype) || "",
  //     targetcountry: (updateData && updateData.targetcountry) || "",
  //     acquireclients: (updateData && updateData.acquireclients) || "",
  //     websiteorsociallink: (updateData && updateData.websiteorsociallink) || "",
  //     ibwithotherbroker: (updateData && updateData.ibwithotherbroker) || "",
  //     currentnumberofclients:
  //       (updateData && updateData.currentnumberofclients) || "",
  //     clientsinthreemonths:
  //       (updateData && updateData.clientsinthreemonths) || "",
  //     avgmonthlytradingvolume:
  //       (updateData && updateData.avgmonthlytradingvolume) || "",
  //   },
  //   validationSchema: Yup.object({
  //     salesagent: Yup.string().required("Select Year"),
  //     name: Yup.string().required("Please Enter Your Name"),
  //   }),
  //   onSubmit: (values, { resetForm }) => {
  //     if (isEdit) {
  //       const updateOrder = {
  //         salesagent: values.salesagent,
  //         name: values.name,
  //         lastname: values.lastname,
  //         email: values.email,
  //         password: values.password,
  //         phonenumber: values.phonenumber,
  //         taxnumber: values.taxnumber,
  //         notes: values.notes,
  //         tags: values.tags,
  //         dob: values.dob,
  //         phoneverified: values.phoneverified,
  //         emailverified: values.emailverified,
  //         kycverified: values.kycverified,
  //         sendwelcomeemail: values.sendwelcomeemail,
  //         sendemailverification: values.sendemailverification,
  //         fax: values.fax,
  //         addressone: values.addressone,
  //         addresstwo: values.addresstwo,
  //         city: values.city,
  //         zipcode: values.zipcode,
  //         locale: values.locale,
  //         currency: values.currency,
  //         state: values.state,
  //         country: values.country,
  //         totalnetworth: values.totalnetworth,
  //         totalannualincome: values.totalannualincome,
  //         employmentstatus: values.employmentstatus,
  //         sourceofincome: values.sourceofincome,
  //         forexandotherinstruments: values.forexandotherinstruments,
  //         experiecneinyears: values.experiecneinyears,
  //         qualificationyears: values.qualificationyears,
  //         investmentinusd: values.investmentinusd,
  //         notifications: values.notifications,
  //         ibtype: values.ibtype,
  //         targetcountry: values.targetcountry,
  //         acquireclients: values.acquireclients,
  //         websiteorsociallink: values.websiteorsociallink,
  //         ibwithotherbroker: values.ibwithotherbroker,
  //         currentnumberofclients: values.currentnumberofclients,
  //         clientsinthreemonths: values.clientsinthreemonths,
  //         avgmonthlytradingvolume: values.avgmonthlytradingvolume,
  //       }
  //       // update order
  //       // dispatch(onUpdateOrder(updateOrder))
  //       validation.resetForm()
  //     }
  //     console.log(values)
  //     //     dispatch(AdminUsers(values,));
  //     //     resetForm({ values: '' });
  //   },
  // })

  useEffect(() => {
    if (state && !state.length) {
      dispatch(getUser())
    }
  }, [dispatch, state])

  useEffect(() => {
    setOrderList(state)
  }, [state])

  useEffect(() => {
    if (!isEmpty(state) && !!isEdit) {
      setOrderList(state)
      setIsEdit(false)
    }
  }, [state])

  const togg = () => {
    if (modal) {
      setModal(false)
      setOrder(null)
    } else {
      setModal(true)
    }
  }

  const handleOrderClick = arg => {
    const order = arg

    setOrder({
      salesagent: order && order.salesagent,
      name: order && order.name,
    })

    setIsEdit(true)

    togg()
  }

  useEffect(() => {
    dispatch(getUser())
  }, [])

  const toggle = () => {
    history.push("/add-user")
  }

  const ViewProfile = id => {
    dispatch(viewUserProfile(id))
    history.push("/view-profile")
  }

  // Select All Button operation
  const selectRow = {
    mode: "checkbox",
  }

  const { SearchBar } = Search

  const defaultSorted = [
    {
      dataField: "id",
      order: "asc",
    },
  ]

  const pageOptions = {
    sizePerPage: 10,
    totalSize: state && state.length, // replace later with size(customers),
    custom: true,
  }

  const columns = [
    {
      dataField: "name",
      text: "Name",
      sort: true,
    },
    {
      dataField: "country",
      text: "Country",
      sort: true,
    },
    {
      dataField: "salesagent",
      text: "Sales Agent",
      sort: true,
    },
    // {
    //     dataField: `${'New Lead'}`,
    //     text: 'Stage',
    //     sort: true,
    //     defaultSorted: 'New Lead',
    // },
    {
      dataField: "email",
      text: "Email",
      sort: true,
    },
    {
      dataField: "phonenumber",
      text: "Phone",
      sort: true,
    },
    {
      dataField: "createdAt",
      text: "CreatedAt",
      sort: true,
      formatter: (cellContent, row) => handleValidDate(row.createdAt),
    },
    {
      dataField: "",
      text: "Last Login",
      sort: true,
      formatter: (cellContent, row) => handleValidDate(row.updatedAt),
    },
    {
      dataField: "action",
      isDummyField: true,
      text: "Action",
      // eslint-disable-next-line react/display-name
      formatter: (cellContent, order) => (
        <>
          <UncontrolledDropdown direction="left">
            {permissions === "read" ? (
              ""
            ) : (
              <>
                <DropdownToggle href="#" className="card-drop " tag="i">
                  <i className="bx bx-cog  font-size-18" />
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-end">
                  {state.map(user => {
                    return (
                      <DropdownItem
                        key={user.id}
                        href="#"
                        onClick={() => ViewProfile(user.id)}
                      >
                        {/* <i className="fas fa-pencil-alt text-success me-1" /> */}
                        View
                      </DropdownItem>
                    )
                  })}
                  <DropdownItem href="#" onClick={{}}>
                    Deposit
                  </DropdownItem>
                  <DropdownItem href="#" onClick={{}}>
                    Withdrawal
                  </DropdownItem>
                  <DropdownItem href="#" onClick={{}}>
                    {/* <i className="fas fa-trash-alt text-danger me-1" /> */}
                    Transfer
                  </DropdownItem>
                  <DropdownItem href="#" onClick={{}}>
                    Bonus
                  </DropdownItem>
                  <DropdownItem href="#" onClick={{}}>
                    Live Accounts
                  </DropdownItem>
                  <DropdownItem href="#" onClick={{}}>
                    Demo Accoun Update
                  </DropdownItem>
                </DropdownMenu>
              </>
            )}
          </UncontrolledDropdown>
        </>
      ),
    },
  ]

  const handleValidDate = date => {
    const date1 = moment(date).format("DD/MM/YY")
    return date1
  }

  return (
    <>
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>User | ForexTrade</title>
          </MetaTags>
          <Container fluid>
            <Breadcrumbs title="Main Menu" breadcrumbItem="User" />
            <Row>
              <Col>
                <Card>
                  <CardBody>
                    <PaginationProvider
                      pagination={paginationFactory(pageOptions)}
                      keyField="id"
                      columns={columns}
                      data={state && state}
                    >
                      {({ paginationProps, paginationTableProps }) => (
                        <ToolkitProvider
                          keyField="id"
                          columns={columns}
                          data={state || []}
                          search
                        >
                          {toolkitProps => (
                            <React.Fragment>
                              <Row className="mb-2">
                                <Col md="4">
                                  <div className="search-box me-2 mb-2 d-inline-block">
                                    <div className="position-relative">
                                      <SearchBar
                                        {...toolkitProps.searchProps}
                                      />
                                      <i className="bx bx-search-alt search-icon" />
                                    </div>
                                  </div>
                                </Col>
                                <Col sm="8">
                                  <div className="text-sm-end">
                                    {permissions === "read" ? (
                                      ""
                                    ) : (
                                      <Button
                                        type="button"
                                        color="success"
                                        className="btn-rounded  mb-2 me-2"
                                        onClick={toggle}
                                      >
                                        <i className="mdi mdi-plus me-1" />
                                        Add New User
                                      </Button>
                                    )}
                                  </div>
                                </Col>
                              </Row>

                              <Row>
                                <Col xl="12">
                                  <div className="table-responsive">
                                    <BootstrapTable
                                      keyField={"id"}
                                      responsive
                                      bordered={false}
                                      striped={false}
                                      defaultSorted={defaultSorted}
                                      selectRow={selectRow}
                                      classes={
                                        "table align-middle table-nowrap"
                                      }
                                      headerWrapperClasses={"thead-light"}
                                      {...toolkitProps.baseProps}
                                      {...paginationTableProps}
                                    />
                                  </div>
                                </Col>
                              </Row>

                              <Row className="align-items-md-center mt-30">
                                <Col className="inner-custom-pagination d-flex">
                                  {/* <div className="d-inline">
                                    <SizePerPageDropdownStandalone
                                      {...paginationProps}
                                    />
                                  </div> */}
                                  <div className="text-md-right ms-auto">
                                    <PaginationListStandalone
                                      {...paginationProps}
                                    />
                                  </div>
                                </Col>
                              </Row>
                            </React.Fragment>
                          )}
                        </ToolkitProvider>
                      )}
                    </PaginationProvider>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
      {/* <React.Fragment>
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
                              className={classnames({
                                current: activeTab === 1,
                              })}
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
                              className={classnames({
                                active: activeTab === 2,
                              })}
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
                              className={classnames({
                                active: activeTab === 3,
                              })}
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
                              className={classnames({
                                active: activeTab === 4,
                              })}
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
                              className={classnames({
                                active: activeTab === 5,
                              })}
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
                                      placeholder="salesagent"
                                      value={validation.salesagent}
                                      onChange={selectedOption => {
                                        handleYearChange(selectedOption)
                                      }}
                                      options={yearOptions}
                                      name="salesagent"
                                    />
                                    {validation.touched.salesagent &&
                                    validation.errors.salesagent ? (
                                      <FormFeedback>
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
                                    </Label>
                                    <Input
                                      name="name"
                                      type="text"
                                      className="form-control"
                                      id="basicpill-firstname-input1"
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
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-email-input3"
                                      placeholder="Enter Your Email ID"
                                    />
                                  </div>
                                </Col>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="basicpill-password-input4">
                                      Password
                                    </Label>
                                    <Input
                                      type="password"
                                      className="form-control"
                                      id="basicpill-password-input4"
                                      placeholder="Enter Your Password"
                                    />
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="basicpill-phoneno-input3">
                                      Phone No.
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-phoneno-input3"
                                      placeholder="Enter Your Phone NUmber"
                                    />
                                  </div>
                                </Col>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="basicpill-tax-input4">
                                      Tax Number
                                    </Label>
                                    <Input
                                      type="password"
                                      className="form-control"
                                      id="basicpill-tax-input4"
                                      placeholder="Enter Your Tax Number"
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
                                      id="basicpill-address-input1"
                                      className="form-control"
                                      rows="2"
                                      placeholder="Enter Your Address"
                                    />
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="basicpill-tag-input3">
                                      Tags
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-tag-input3"
                                      placeholder="Enter Your Tag"
                                    />
                                  </div>
                                </Col>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="basicpill-date-input4">
                                      Date Of Birth
                                    </Label>
                                    <Input
                                      type="date"
                                      className="form-control"
                                      id="basicpill-date-input4"
                                      placeholder="Please Select Date"
                                    />
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="12">
                                  <FormGroup className="pr-4" check inline>
                                    <Input type="checkbox" />
                                    <Label check>Phone Verified</Label>
                                  </FormGroup>
                                  <FormGroup check inline>
                                    <Input type="checkbox" />
                                    <Label check>Email Verified</Label>
                                  </FormGroup>
                                  <FormGroup check inline>
                                    <Input type="checkbox" />
                                    <Label check>KYC Verified</Label>
                                  </FormGroup>
                                  <FormGroup check inline>
                                    <Input type="checkbox" />
                                    <Label check>Send Welcome Email</Label>
                                  </FormGroup>
                                  <FormGroup check inline>
                                    <Input type="checkbox" />
                                    <Label check>Send Email Verification</Label>
                                  </FormGroup>
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
                            </Form>
                          </TabPane>
                          <TabPane tabId={2}>
                            <div>
                              <Form>
                                <Row>
                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label for="basicpill-address1-input1">
                                        Address 1
                                      </Label>
                                      <textarea
                                        id="basicpill-address1-input1"
                                        className="form-control"
                                        rows="4"
                                        placeholder="Enter Your Address"
                                      />
                                    </div>
                                  </Col>

                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label for="basicpill-address2-input1">
                                        Address 2
                                      </Label>
                                      <textarea
                                        id="basicpill-address2-input1"
                                        className="form-control"
                                        rows="4"
                                        placeholder="Enter Your Address"
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
                                        type="text"
                                        className="form-control"
                                        id="basicpill-city-input7"
                                        placeholder="Enter Your City"
                                      />
                                    </div>
                                  </Col>

                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label for="basicpill-zipcode-input8">
                                        Zip Code
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="basicpill-zipcode-input8"
                                        placeholder="Enter Your Zip Code"
                                      />
                                    </div>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label>Locale</Label>
                                      <select className="form-select">
                                        <option defaultValue>English</option>
                                        <option value="VI">Visa</option>
                                        <option value="MC">MasterCard</option>
                                        <option value="DI">Discover</option>
                                      </select>
                                    </div>
                                  </Col>

                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label>Currency</Label>
                                      <select className="form-select">
                                        <option defaultValue>
                                          $- United States Doller
                                        </option>
                                        <option value="VI">Visa</option>
                                        <option value="MC">MasterCard</option>
                                        <option value="DI">Discover</option>
                                      </select>
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
                                        type="text"
                                        className="form-control"
                                        id="basicpill-state-input8"
                                        placeholder="Enter Your State"
                                      />
                                    </div>
                                  </Col>
                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label>Country</Label>
                                      <select className="form-select">
                                        <option defaultValue>India</option>
                                        <option value="VI">Visa</option>
                                        <option value="MC">MasterCard</option>
                                        <option value="DI">Discover</option>
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
                                        type="text"
                                        className="form-control"
                                        id="basicpill-fax-input8"
                                        placeholder="Enter Your State"
                                      />
                                    </div>
                                  </Col>
                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label for="exampleFile">Logo</Label>
                                      <Input
                                        id="exampleFile"
                                        name="file"
                                        type="file"
                                      />
                                    </div>
                                  </Col>
                                  <Row>
                                    <Col lg="12">
                                      <div className="mt-3">
                                        I have read, understood and accept the
                                        Privecy Policy,Risk Disclosures and
                                        Terms & Conditions.
                                      </div>
                                    </Col>
                                  </Row>
                                </Row>
                              </Form>
                            </div>
                          </TabPane>
                          <TabPane tabId={3}>
                            <div>
                              <Form>
                                <Row>
                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label>
                                        Total Estimated Net Worth($)?
                                      </Label>
                                      <select className="form-select">
                                        <option defaultValue>Select</option>
                                        <option value="VI">Visa</option>
                                        <option value="MC">MasterCard</option>
                                        <option value="DI">Discover</option>
                                      </select>
                                    </div>
                                  </Col>

                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label>
                                        Total Estimated Annual Income($)?
                                      </Label>
                                      <select className="form-select">
                                        <option defaultValue>Select</option>
                                        <option value="VI">Visa</option>
                                        <option value="MC">MasterCard</option>
                                        <option value="DI">Discover</option>
                                      </select>
                                    </div>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label>Your Employment Status</Label>
                                      <select className="form-select">
                                        <option defaultValue>Select</option>
                                        <option value="VI">Visa</option>
                                        <option value="MC">MasterCard</option>
                                        <option value="DI">Discover</option>
                                      </select>
                                    </div>
                                  </Col>

                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label>Source Of Income/Wealth</Label>
                                      <select className="form-select">
                                        <option defaultValue>Select</option>
                                        <option value="VI">Visa</option>
                                        <option value="MC">MasterCard</option>
                                        <option value="DI">Discover</option>
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
                                        <option defaultValue>Select</option>
                                        <option value="VI">Visa</option>
                                        <option value="MC">MasterCard</option>
                                        <option value="DI">Discover</option>
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
                                        risk involved trading them, including
                                        the possibility that i may lose all of
                                        my capital.
                                      </Label>
                                      <select className="form-select">
                                        <option defaultValue>Select</option>
                                        <option value="VI">Visa</option>
                                        <option value="MC">MasterCard</option>
                                        <option value="DI">Discover</option>
                                      </select>
                                    </div>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col lg="12">
                                    <div className="mb-3">
                                      <Label>
                                        I have previous qualifications and/or
                                        work experience in the financial service
                                        industry
                                      </Label>
                                      <select className="form-select">
                                        <option defaultValue>Select</option>
                                        <option value="VI">Visa</option>
                                        <option value="MC">MasterCard</option>
                                        <option value="DI">Discover</option>
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
                                        <option defaultValue>Select</option>
                                        <option value="VI">Visa</option>
                                        <option value="MC">MasterCard</option>
                                        <option value="DI">Discover</option>
                                      </select>
                                    </div>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col lg="12">
                                    <div className="mt-3">
                                      I have read, understood and accept the
                                      Privecy Policy,Risk Disclosures and Terms
                                      & Conditions.
                                    </div>
                                  </Col>
                                </Row>
                              </Form>
                            </div>
                          </TabPane>
                          <TabPane tabId={4}>
                            <div>
                              <Form>
                                <Row>
                                  <Col lg="12">
                                    <div className="mb-3">
                                      <Label>Notifications</Label>
                                      <Select
                                        defaultValue={["mail", "database"]}
                                        isMulti
                                        name="colors"
                                        // options={colourOptions}
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                      />
                                    </div>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col lg="12">
                                    <div className="mt-3">
                                      I have read, understood and accept the
                                      Privecy Policy,Risk Disclosures and Terms
                                      & Conditions.
                                    </div>
                                  </Col>
                                </Row>
                              </Form>
                            </div>
                          </TabPane>
                          <TabPane tabId={5}>
                            <div>
                              <Form>
                                <Row>
                                  <Col lg="12">
                                    <div className="mb-3">
                                      <Label>Ib Type</Label>
                                      <select className="form-select">
                                        <option defaultValue>Select</option>
                                        <option value="VI">Visa</option>
                                        <option value="MC">MasterCard</option>
                                        <option value="DI">Discover</option>
                                      </select>
                                    </div>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col lg="12">
                                    <div className="mb-3">
                                      <Label>Target Country</Label>
                                      <select className="form-select">
                                        <option defaultValue>Select</option>
                                        <option value="VI">Visa</option>
                                        <option value="MC">MasterCard</option>
                                        <option value="DI">Discover</option>
                                      </select>
                                    </div>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col lg="12">
                                    <div className="mb-3">
                                      <Label>How do you Acquire Clients</Label>
                                      <select className="form-select">
                                        <option defaultValue>Select</option>
                                        <option value="VI">Visa</option>
                                        <option value="MC">MasterCard</option>
                                        <option value="DI">Discover</option>
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
                                        <option defaultValue>Select</option>
                                        <option value="VI">Visa</option>
                                        <option value="MC">MasterCard</option>
                                        <option value="DI">Discover</option>
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
                                        <option defaultValue>Select</option>
                                        <option value="VI">Visa</option>
                                        <option value="MC">MasterCard</option>
                                        <option value="DI">Discover</option>
                                      </select>
                                    </div>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col lg="12">
                                    <div className="mb-3">
                                      <Label>
                                        How many clients do you expect
                                        introducing in the first months?
                                      </Label>
                                      <select className="form-select">
                                        <option defaultValue>Select</option>
                                        <option value="VI">Visa</option>
                                        <option value="MC">MasterCard</option>
                                        <option value="DI">Discover</option>
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
                                        <option defaultValue>Select</option>
                                        <option value="VI">Visa</option>
                                        <option value="MC">MasterCard</option>
                                        <option value="DI">Discover</option>
                                      </select>
                                    </div>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col lg="12">
                                    <div className="mt-3">
                                      I have read, understood and accept the
                                      Privecy Policy,Risk Disclosures and Terms
                                      & Conditions.
                                    </div>
                                  </Col>
                                </Row>
                              </Form>
                            </div>
                          </TabPane>
                        </TabContent>
                      </div>
                      <div className="actions clearfix">
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
                          <li className={activeTab === 5 ? "next " : "next"}>
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
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment> */}
    </>
  )
}

User.propTypes = {
  orders: PropTypes.array,
  onGetOrders: PropTypes.func,
  onAddNewOrder: PropTypes.func,
  onDeleteOrder: PropTypes.func,
  onUpdateOrder: PropTypes.func,
}

export default withRouter(User)

User.propTypes = {
  history: PropTypes.object,
}
