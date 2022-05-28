import React, { useEffect, useState, useRef } from "react"
import MetaTags from "react-meta-tags"
import PropTypes from "prop-types"
import { withRouter, Link, useHistory } from "react-router-dom"
import classnames from "classnames"
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
import {
  AdminUsers,
  getUser,
  viewUserProfile,
  getUserDropDown,
} from "store/actions"
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
  const [isLoading, setIsLoading] = useState(true)
  const history = useHistory()
  // const [updateData, setUpdateData] = useState(null)
  const dispatch = useDispatch()
  const state = useSelector(state => {
    return state?.UserReducer?.User?.data
  })
  const states = useSelector(state => {
    // console.log(state.UserReducer.UserDropDown)
    return state?.UserReducer?.UserDropDown?.data
  })

  useEffect(() => {
    dispatch(getUserDropDown())
  }, [])

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

  const [updateUser, setUpdateUser] = useState({})

  // console.log(updateUser, "dsfksdfds")

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      salesagent: (updateUser && updateUser.salesagent) || "",
      name: (updateUser && updateUser.name) || "",
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
      } else {
        console.log("helllolksjfl")
      }
      // togg()
    },
  })

  const [modal, setModal] = useState(false)
  // view user profile
  const handleCustomerClick = arg => {
    const userprofile = arg
    ViewProfile(userprofile.id)
  }

  const ViewProfile = id => {
    dispatch(viewUserProfile(id))
    history.push("/view-profile")
  }

  // Deposite section

  const depositHandler = () => {
    history.push("/deposit")
  }

  // withdrawal handler
  const drawalHandler = () => {
    history.push("/with-drawal")
  }

  // tranfer handler
  const transferHandler = () => {
    history.push(`/transfer`)
  }

  // bonus handler
  const bonusHandler = () => {
    history.push(`/bonus`)
  }

  // live Account handler
  const liveAccountsHandler = () => {
    history.push(`/live-accounts`)
  }

  // demo Account handler
  const demoAccountsHandler = () => {
    history.push(`/demo-accounts`)
  }

  const togg = () => setModal(!modal)

  useEffect(() => {
    dispatch(getUser())
    if (state?.length < 0) {
      setIsLoading(false)
    }
  }, [dispatch])

  const toggle = () => {
    history.push("/add-user")
  }

  // userUpdate handler

  const userUpdateHandler = data => {
    const user = data
    console.log(user, "chandra")

    setUpdateUser({ salesagent: user.salesagent, name: user.name })
    setIsEdit(true)
    togg()
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
      // formatter: (cellContent, row) => handleValidDate(row.createdAt),
    },
    {
      dataField: "",
      text: "Last Login",
      sort: true,
      // formatter: (cellContent, row) => handleValidDate(row.updatedAt),
    },
    {
      dataField: "action",
      isDummyField: true,
      text: "Action",
      // eslint-disable-next-line react/display-name
      formatter: (cellContent, id) => (
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
                  <DropdownItem
                    href="#"
                    onClick={() => handleCustomerClick(id)}
                  >
                    {/* <i className="fas fa-pencil-alt text-success me-1" /> */}
                    View
                  </DropdownItem>

                  <DropdownItem href="#" onClick={depositHandler}>
                    Deposit
                  </DropdownItem>
                  <DropdownItem href="#" onClick={drawalHandler}>
                    Withdrawal
                  </DropdownItem>
                  <DropdownItem href="#" onClick={() => transferHandler()}>
                    {/* <i className="fas fa-trash-alt text-danger me-1" /> */}
                    Transfer
                  </DropdownItem>
                  <DropdownItem href="#" onClick={bonusHandler}>
                    Bonus
                  </DropdownItem>
                  <DropdownItem href="#" onClick={liveAccountsHandler}>
                    Live Accounts
                  </DropdownItem>
                  <DropdownItem href="#" onClick={demoAccountsHandler}>
                    Demo Accoun Update
                  </DropdownItem>
                  <DropdownItem href="#" onClick={() => userUpdateHandler(id)}>
                    Update
                  </DropdownItem>
                  <DropdownItem href="#" onClick={{}}>
                    Delete
                  </DropdownItem>
                  <DropdownItem href="#" onClick={{}}>
                    Client
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
                      pagination={paginationFactory()}
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

                              <Modal
                                isOpen={modal}
                                toggle={togg}
                                backdrop="static"
                              >
                                <ModalHeader toggle={togg}>
                                  {!!isEdit ? "Edit Staff" : "Add Staff"}
                                </ModalHeader>
                                <ModalBody>
                                  <Row>
                                    <Col lg="12">
                                      <Card>
                                        <CardBody>
                                          <h4 className="card-title mb-4">
                                            Add User
                                          </h4>
                                          <div className="wizard clearfix">
                                            <div className="steps clearfix">
                                              <ul>
                                                <NavItem
                                                  className={classnames({
                                                    current: activeTab === 1,
                                                  })}
                                                >
                                                  <NavLink
                                                    className={classnames({
                                                      current: activeTab === 1,
                                                    })}
                                                    onClick={() => {
                                                      setactiveTab(1)
                                                    }}
                                                    disabled={
                                                      !(
                                                        passedSteps || []
                                                      ).includes(1)
                                                    }
                                                  >
                                                    <span className="number">
                                                      1
                                                    </span>{" "}
                                                    General
                                                  </NavLink>
                                                </NavItem>
                                                <NavItem
                                                  className={classnames({
                                                    current: activeTab === 2,
                                                  })}
                                                >
                                                  <NavLink
                                                    className={classnames({
                                                      active: activeTab === 2,
                                                    })}
                                                    onClick={() => {
                                                      setactiveTab(2)
                                                    }}
                                                    disabled={
                                                      !(
                                                        passedSteps || []
                                                      ).includes(2)
                                                    }
                                                  >
                                                    <span className="number ms-2">
                                                      02
                                                    </span>{" "}
                                                    Contact
                                                  </NavLink>
                                                </NavItem>
                                                <NavItem
                                                  className={classnames({
                                                    current: activeTab === 3,
                                                  })}
                                                >
                                                  <NavLink
                                                    className={classnames({
                                                      active: activeTab === 3,
                                                    })}
                                                    onClick={() => {
                                                      setactiveTab(3)
                                                    }}
                                                    disabled={
                                                      !(
                                                        passedSteps || []
                                                      ).includes(3)
                                                    }
                                                  >
                                                    <span className="number">
                                                      03
                                                    </span>{" "}
                                                    Trading
                                                  </NavLink>
                                                </NavItem>
                                                <NavItem
                                                  className={classnames({
                                                    current: activeTab === 4,
                                                  })}
                                                >
                                                  <NavLink
                                                    className={classnames({
                                                      active: activeTab === 4,
                                                    })}
                                                    onClick={() => {
                                                      setactiveTab(4)
                                                    }}
                                                    disabled={
                                                      !(
                                                        passedSteps || []
                                                      ).includes(4)
                                                    }
                                                  >
                                                    <span className="number">
                                                      04
                                                    </span>{" "}
                                                    Notifications
                                                  </NavLink>
                                                </NavItem>
                                                <NavItem
                                                  className={classnames({
                                                    current: activeTab === 5,
                                                  })}
                                                >
                                                  <NavLink
                                                    className={classnames({
                                                      active: activeTab === 5,
                                                    })}
                                                    onClick={() => {
                                                      setactiveTab(5)
                                                    }}
                                                    disabled={
                                                      !(
                                                        passedSteps || []
                                                      ).includes(5)
                                                    }
                                                  >
                                                    <span className="number">
                                                      05
                                                    </span>{" "}
                                                    Information
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
                                                            <span
                                                              style={{
                                                                color: "red",
                                                              }}
                                                            >
                                                              *
                                                            </span>
                                                          </Label>
                                                          <Select
                                                            placeholder="DIZICX"
                                                            value={selectedYear}
                                                            // options={
                                                            //   yearOptions
                                                            // }
                                                            name="salesagent"
                                                            onBlur={validation.handleBlur(
                                                              "salesagent"
                                                            )}
                                                            isClearable={true}
                                                            onChange={selectedOption => {
                                                              handleYearChange(
                                                                selectedOption
                                                              )
                                                              validation.handleChange(
                                                                "salesagent"
                                                              )(
                                                                selectedOption.value
                                                              )
                                                            }}
                                                          />
                                                          <Input
                                                            name="salesagent"
                                                            tabIndex={-1}
                                                            autoComplete="off"
                                                            style={{
                                                              opacity: 0,
                                                              height: 0,
                                                            }}
                                                            value={
                                                              validation.values
                                                                .salesagent ||
                                                              ""
                                                            }
                                                            invalid={
                                                              validation.touched
                                                                .salesagent &&
                                                              validation.errors
                                                                .salesagent
                                                                ? true
                                                                : false
                                                            }
                                                            readOnly
                                                          />
                                                          {validation.touched
                                                            .salesagent &&
                                                          validation.errors
                                                            .salesagent ? (
                                                            <FormFeedback type="invalid">
                                                              {
                                                                validation
                                                                  .errors
                                                                  .salesagent
                                                              }
                                                            </FormFeedback>
                                                          ) : null}
                                                        </div>
                                                      </Col>
                                                    </Row>
                                                    <Row>
                                                      <Col lg="6">
                                                        <div className="mb-3">
                                                          <Label for="basicpill-firstname-input1">
                                                            Company Name/Full
                                                            Name
                                                            <span
                                                              style={{
                                                                color: "red",
                                                              }}
                                                            >
                                                              *
                                                            </span>
                                                          </Label>
                                                          <Input
                                                            name="name"
                                                            type="text"
                                                            className="form-control"
                                                            id="basicpill-name-input1"
                                                            placeholder="Enter Your Full Name"
                                                            onChange={
                                                              validation.handleChange
                                                            }
                                                            onBlur={
                                                              validation.handleBlur
                                                            }
                                                            value={
                                                              validation.values
                                                                .name || ""
                                                            }
                                                            invalid={
                                                              validation.touched
                                                                .name &&
                                                              validation.errors
                                                                .name
                                                                ? true
                                                                : false
                                                            }
                                                          />
                                                          {validation.touched
                                                            .name &&
                                                          validation.errors
                                                            .name ? (
                                                            <FormFeedback type="invalid">
                                                              {
                                                                validation
                                                                  .errors.name
                                                              }
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
                                                            name="lastname"
                                                            type="text"
                                                            className="form-control"
                                                            id="basicpill-lastname-input2"
                                                            placeholder="Enter Your Last Name"
                                                            onChange={
                                                              validation.handleChange
                                                            }
                                                            onBlur={
                                                              validation.handleBlur
                                                            }
                                                            value={
                                                              validation.values
                                                                .lastname || ""
                                                            }
                                                            invalid={
                                                              validation.touched
                                                                .lastname &&
                                                              validation.errors
                                                                .lastname
                                                                ? true
                                                                : false
                                                            }
                                                          />
                                                          {validation.touched
                                                            .lastname &&
                                                          validation.errors
                                                            .lastname ? (
                                                            <FormFeedback type="invalid">
                                                              {
                                                                validation
                                                                  .errors
                                                                  .lastname
                                                              }
                                                            </FormFeedback>
                                                          ) : null}
                                                        </div>
                                                      </Col>
                                                    </Row>

                                                    <Row>
                                                      <Col lg="6">
                                                        <div className="mb-3">
                                                          <Label for="basicpill-email-input3">
                                                            E-Mail
                                                            <span
                                                              style={{
                                                                color: "red",
                                                              }}
                                                            >
                                                              *
                                                            </span>
                                                          </Label>
                                                          <Input
                                                            name="email"
                                                            type="email"
                                                            className="form-control"
                                                            id="basicpill-email-input1"
                                                            placeholder="Enter Your Email"
                                                            onChange={
                                                              validation.handleChange
                                                            }
                                                            onBlur={
                                                              validation.handleBlur
                                                            }
                                                            value={
                                                              validation.values
                                                                .email || ""
                                                            }
                                                            invalid={
                                                              validation.touched
                                                                .email &&
                                                              validation.errors
                                                                .email
                                                                ? true
                                                                : false
                                                            }
                                                          />
                                                          {validation.touched
                                                            .email &&
                                                          validation.errors
                                                            .email ? (
                                                            <FormFeedback type="invalid">
                                                              {
                                                                validation
                                                                  .errors.email
                                                              }
                                                            </FormFeedback>
                                                          ) : null}
                                                        </div>
                                                      </Col>
                                                      <Col lg="6">
                                                        <div className="mb-3">
                                                          <Label for="basicpill-password-input4">
                                                            Password
                                                            <span
                                                              style={{
                                                                color: "red",
                                                              }}
                                                            >
                                                              *
                                                            </span>
                                                          </Label>
                                                          <Input
                                                            name="password"
                                                            type="password"
                                                            className="form-control"
                                                            id="basicpill-password-input1"
                                                            placeholder="Enter Your Full Password"
                                                            onChange={
                                                              validation.handleChange
                                                            }
                                                            onBlur={
                                                              validation.handleBlur
                                                            }
                                                            value={
                                                              validation.values
                                                                .password || ""
                                                            }
                                                            invalid={
                                                              validation.touched
                                                                .password &&
                                                              validation.errors
                                                                .password
                                                                ? true
                                                                : false
                                                            }
                                                          />
                                                          {validation.touched
                                                            .password &&
                                                          validation.errors
                                                            .password ? (
                                                            <FormFeedback type="invalid">
                                                              {
                                                                validation
                                                                  .errors
                                                                  .password
                                                              }
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
                                                            <span
                                                              style={{
                                                                color: "red",
                                                              }}
                                                            >
                                                              *
                                                            </span>
                                                          </Label>
                                                          <Input
                                                            name="phonenumber"
                                                            type="text"
                                                            className="form-control"
                                                            id="basicpill-firstname-input1"
                                                            placeholder="Enter Your Phone Number"
                                                            onChange={
                                                              validation.handleChange
                                                            }
                                                            onBlur={
                                                              validation.handleBlur
                                                            }
                                                            value={
                                                              validation.values
                                                                .phonenumber ||
                                                              ""
                                                            }
                                                            invalid={
                                                              validation.touched
                                                                .phonenumber &&
                                                              validation.errors
                                                                .phonenumber
                                                                ? true
                                                                : false
                                                            }
                                                          />
                                                          {validation.touched
                                                            .phonenumber &&
                                                          validation.errors
                                                            .phonenumber ? (
                                                            <FormFeedback type="invalid">
                                                              {
                                                                validation
                                                                  .errors
                                                                  .phonenumber
                                                              }
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
                                                            onChange={
                                                              validation.handleChange
                                                            }
                                                            onBlur={
                                                              validation.handleBlur
                                                            }
                                                            value={
                                                              validation.values
                                                                .taxnumber || ""
                                                            }
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
                                                            onChange={
                                                              validation.handleChange
                                                            }
                                                            onBlur={
                                                              validation.handleBlur
                                                            }
                                                            value={
                                                              validation.values
                                                                .notes || ""
                                                            }
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
                                                            name="tags"
                                                            type="text"
                                                            className="form-control"
                                                            id="basicpill-tag-input3"
                                                            placeholder="Enter Your Tag"
                                                            onChange={
                                                              validation.handleChange
                                                            }
                                                            onBlur={
                                                              validation.handleBlur
                                                            }
                                                            value={
                                                              validation.values
                                                                .tags || ""
                                                            }
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
                                                            onChange={
                                                              validation.handleChange
                                                            }
                                                            onBlur={
                                                              validation.handleBlur
                                                            }
                                                            value={
                                                              validation.values
                                                                .dob || ""
                                                            }
                                                          />
                                                        </div>
                                                      </Col>
                                                    </Row>
                                                    <Row>
                                                      <Col lg="12">
                                                        <FormGroup
                                                          className="pr-4"
                                                          check
                                                          inline
                                                        >
                                                          <Input
                                                            type="checkbox"
                                                            name="phoneverified"
                                                            onChange={
                                                              validation.handleChange
                                                            }
                                                            onBlur={
                                                              validation.handleBlur
                                                            }
                                                            value={
                                                              validation.values
                                                                .phoneverified ||
                                                              ""
                                                            }
                                                          />
                                                          <Label check>
                                                            Phone Verified
                                                          </Label>
                                                        </FormGroup>
                                                        <FormGroup check inline>
                                                          <Input
                                                            type="checkbox"
                                                            name="emailverified"
                                                            onChange={
                                                              validation.handleChange
                                                            }
                                                            onBlur={
                                                              validation.handleBlur
                                                            }
                                                            value={
                                                              validation.values
                                                                .emailverified ||
                                                              ""
                                                            }
                                                          />
                                                          <Label check>
                                                            Email Verified
                                                          </Label>
                                                        </FormGroup>
                                                        <FormGroup check inline>
                                                          <Input
                                                            type="checkbox"
                                                            name="kycverified"
                                                            onChange={
                                                              validation.handleChange
                                                            }
                                                            onBlur={
                                                              validation.handleBlur
                                                            }
                                                            value={
                                                              validation.values
                                                                .kycverified ||
                                                              ""
                                                            }
                                                          />
                                                          <Label check>
                                                            KYC Verified
                                                          </Label>
                                                        </FormGroup>
                                                        <FormGroup check inline>
                                                          <Input
                                                            type="checkbox"
                                                            name="sendwelcomeemail"
                                                            onChange={
                                                              validation.handleChange
                                                            }
                                                            onBlur={
                                                              validation.handleBlur
                                                            }
                                                            value={
                                                              validation.values
                                                                .sendwelcomeemail ||
                                                              ""
                                                            }
                                                          />
                                                          <Label check>
                                                            Send Welcome Email
                                                          </Label>
                                                        </FormGroup>
                                                        <FormGroup check inline>
                                                          <Input
                                                            type="checkbox"
                                                            name="sendemailverification"
                                                            onChange={
                                                              validation.handleChange
                                                            }
                                                            onBlur={
                                                              validation.handleBlur
                                                            }
                                                            value={
                                                              validation.values
                                                                .sendemailverification ||
                                                              ""
                                                            }
                                                          />
                                                          <Label check>
                                                            Send Email
                                                            Verification
                                                          </Label>
                                                        </FormGroup>
                                                      </Col>
                                                    </Row>
                                                    <Row>
                                                      <Col lg="12">
                                                        <div className="mt-3">
                                                          I have read,
                                                          understood and accept
                                                          the Privecy
                                                          Policy,Risk
                                                          Disclosures and Terms
                                                          & Conditions.
                                                        </div>
                                                      </Col>
                                                    </Row>
                                                    <div
                                                      className="actions clearfix"
                                                      style={{
                                                        textAlign: "right",
                                                      }}
                                                    >
                                                      <Button
                                                        style={{
                                                          marginRight: "15px",
                                                          backgroundColor:
                                                            "#556ee6",
                                                        }}
                                                        type="button"
                                                        className={
                                                          activeTab === 1
                                                            ? "previous disabled"
                                                            : "previous"
                                                        }
                                                      >
                                                        <Link
                                                          style={{
                                                            color: "#fff",
                                                          }}
                                                          to="#"
                                                          onClick={() => {
                                                            toggleTab(
                                                              activeTab - 1
                                                            )
                                                          }}
                                                        >
                                                          Previous
                                                        </Link>
                                                      </Button>
                                                      <Button
                                                        style={{
                                                          backgroundColor:
                                                            "#556ee6",
                                                        }}
                                                      >
                                                        <Link
                                                          className={
                                                            activeTab === 5
                                                              ? "next "
                                                              : "next"
                                                          }
                                                          style={{
                                                            color: "#fff",
                                                          }}
                                                          to="#"
                                                          onClick={() => {
                                                            toggleTab(
                                                              activeTab + 1
                                                            )
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
                                                              onChange={
                                                                validation.handleChange
                                                              }
                                                              onBlur={
                                                                validation.handleBlur
                                                              }
                                                              value={
                                                                validation
                                                                  .values
                                                                  .addressone ||
                                                                ""
                                                              }
                                                              invalid={
                                                                validation
                                                                  .touched
                                                                  .addressone &&
                                                                validation
                                                                  .errors
                                                                  .addressone
                                                                  ? true
                                                                  : false
                                                              }
                                                            />
                                                            {validation.touched
                                                              .addressone &&
                                                            validation.errors
                                                              .addressone ? (
                                                              <FormFeedback type="invalid">
                                                                {
                                                                  validation
                                                                    .errors
                                                                    .addressone
                                                                }
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
                                                              onChange={
                                                                validation.handleChange
                                                              }
                                                              onBlur={
                                                                validation.handleBlur
                                                              }
                                                              value={
                                                                validation
                                                                  .values
                                                                  .addresstwo ||
                                                                ""
                                                              }
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
                                                              onChange={
                                                                validation.handleChange
                                                              }
                                                              onBlur={
                                                                validation.handleBlur
                                                              }
                                                              value={
                                                                validation
                                                                  .values
                                                                  .city || ""
                                                              }
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
                                                              onChange={
                                                                validation.handleChange
                                                              }
                                                              onBlur={
                                                                validation.handleBlur
                                                              }
                                                              value={
                                                                validation
                                                                  .values
                                                                  .zipcode || ""
                                                              }
                                                            />
                                                          </div>
                                                        </Col>
                                                      </Row>
                                                      <Row>
                                                        <Col lg="6">
                                                          <div className="mb-3">
                                                            <Label>
                                                              Locale
                                                            </Label>
                                                            <select
                                                              name="locale"
                                                              className="form-select"
                                                              onChange={
                                                                validation.handleChange
                                                              }
                                                              value={
                                                                validation
                                                                  .values
                                                                  .locale || ""
                                                              }
                                                              onBlur={
                                                                validation.handleBlur
                                                              }
                                                              invalid={
                                                                validation
                                                                  .touched
                                                                  .locale &&
                                                                validation
                                                                  .errors.locale
                                                                  ? true
                                                                  : false
                                                              }
                                                            >
                                                              <option
                                                                defaultValue
                                                              >
                                                                please select
                                                              </option>
                                                              <option>
                                                                English
                                                              </option>
                                                            </select>
                                                            {validation.touched
                                                              .locale &&
                                                            validation.errors
                                                              .locale ? (
                                                              <FormFeedback type="invalid">
                                                                {
                                                                  validation
                                                                    .errors
                                                                    .locale
                                                                }
                                                              </FormFeedback>
                                                            ) : null}
                                                          </div>
                                                        </Col>

                                                        <Col lg="6">
                                                          <div className="mb-3">
                                                            <Label>
                                                              Currency
                                                            </Label>

                                                            <select
                                                              name="currency"
                                                              className="form-select"
                                                              onChange={
                                                                validation.handleChange
                                                              }
                                                              value={
                                                                validation
                                                                  .values
                                                                  .currency ||
                                                                ""
                                                              }
                                                              onBlur={
                                                                validation.handleBlur
                                                              }
                                                              invalid={
                                                                validation
                                                                  .touched
                                                                  .currency &&
                                                                validation
                                                                  .errors
                                                                  .currency
                                                                  ? true
                                                                  : false
                                                              }
                                                            >
                                                              {states &&
                                                                states.currency.map(
                                                                  item => {
                                                                    return (
                                                                      <React.Fragment
                                                                        key={
                                                                          item
                                                                        }
                                                                      >
                                                                        <option
                                                                          defaultValue
                                                                        >
                                                                          {item}
                                                                        </option>
                                                                      </React.Fragment>
                                                                    )
                                                                  }
                                                                )}
                                                            </select>
                                                            {validation.touched
                                                              .currency &&
                                                            validation.errors
                                                              .currency ? (
                                                              <FormFeedback type="invalid">
                                                                {
                                                                  validation
                                                                    .errors
                                                                    .currency
                                                                }
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
                                                              onChange={
                                                                validation.handleChange
                                                              }
                                                              value={
                                                                validation
                                                                  .values
                                                                  .state || ""
                                                              }
                                                            />
                                                          </div>
                                                        </Col>
                                                        <Col lg="6">
                                                          <div className="mb-3">
                                                            <Label>
                                                              Country
                                                            </Label>
                                                            <select
                                                              className="form-select"
                                                              name="country"
                                                              onChange={
                                                                validation.handleChange
                                                              }
                                                              value={
                                                                validation
                                                                  .values
                                                                  .country || ""
                                                              }
                                                            >
                                                              {states &&
                                                                states.TargetCountry.map(
                                                                  item => {
                                                                    return (
                                                                      <React.Fragment
                                                                        key={
                                                                          item
                                                                        }
                                                                      >
                                                                        <option
                                                                          defaultValue
                                                                        >
                                                                          {item}
                                                                        </option>
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
                                                            <Label for="basicpill-fax-input8">
                                                              Fax
                                                            </Label>
                                                            <Input
                                                              name="fax"
                                                              type="text"
                                                              className="form-control"
                                                              id="basicpill-fax-input8"
                                                              placeholder="Enter Your State"
                                                              onChange={
                                                                validation.handleChange
                                                              }
                                                              value={
                                                                validation
                                                                  .values.fax ||
                                                                ""
                                                              }
                                                            />
                                                          </div>
                                                        </Col>
                                                        <Col lg="6">
                                                          <div className="mb-3">
                                                            <Label for="exampleFile">
                                                              Logo
                                                            </Label>
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
                                                              I have read,
                                                              understood and
                                                              accept the Privecy
                                                              Policy,Risk
                                                              Disclosures and
                                                              Terms &
                                                              Conditions.
                                                            </div>
                                                          </Col>
                                                        </Row>
                                                      </Row>
                                                      <div
                                                        className="actions clearfix"
                                                        style={{
                                                          textAlign: "right",
                                                        }}
                                                      >
                                                        <Button
                                                          style={{
                                                            marginRight: "15px",
                                                            backgroundColor:
                                                              "#556ee6",
                                                          }}
                                                          type="button"
                                                          className={
                                                            activeTab === 1
                                                              ? "previous disabled"
                                                              : "previous"
                                                          }
                                                        >
                                                          <Link
                                                            style={{
                                                              color: "#fff",
                                                            }}
                                                            to="#"
                                                            onClick={() => {
                                                              toggleTab(
                                                                activeTab - 1
                                                              )
                                                            }}
                                                          >
                                                            Previous
                                                          </Link>
                                                        </Button>
                                                        <Button
                                                          style={{
                                                            backgroundColor:
                                                              "#556ee6",
                                                          }}
                                                        >
                                                          <Link
                                                            className={
                                                              activeTab === 5
                                                                ? "next "
                                                                : "next"
                                                            }
                                                            style={{
                                                              color: "#fff",
                                                            }}
                                                            to="#"
                                                            onClick={() => {
                                                              toggleTab(
                                                                activeTab + 1
                                                              )
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
                                                            <Label>
                                                              Total Estimated
                                                              Net Worth($)?
                                                            </Label>
                                                            <select
                                                              className="form-select"
                                                              name="totalnetworth"
                                                              onChange={
                                                                validation.handleChange
                                                              }
                                                              value={
                                                                validation
                                                                  .values
                                                                  .totalnetworth ||
                                                                ""
                                                              }
                                                            >
                                                              <option
                                                                defaultValue
                                                              >
                                                                Select-option
                                                              </option>
                                                              {states &&
                                                                states.TotalEstimatedNetWorth.map(
                                                                  item => {
                                                                    return (
                                                                      <React.Fragment
                                                                        key={
                                                                          item
                                                                        }
                                                                      >
                                                                        <option>
                                                                          {item}
                                                                        </option>
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
                                                              Total Estimated
                                                              Annual Income($)?
                                                            </Label>
                                                            <select className="form-select">
                                                              <option
                                                                defaultValue
                                                              >
                                                                Select-option
                                                              </option>
                                                              {states &&
                                                                states.TotalEstimatedAnnualIncome.map(
                                                                  item => {
                                                                    return (
                                                                      <React.Fragment
                                                                        key={
                                                                          item
                                                                        }
                                                                      >
                                                                        <option>
                                                                          {item}
                                                                        </option>
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
                                                            <Label>
                                                              Your Employment
                                                              Status
                                                            </Label>
                                                            <select className="form-select">
                                                              <option
                                                                defaultValue
                                                              >
                                                                Select-option
                                                              </option>
                                                              {states &&
                                                                states.YourEmploymentStatus.map(
                                                                  item => {
                                                                    return (
                                                                      <React.Fragment
                                                                        key={
                                                                          item
                                                                        }
                                                                      >
                                                                        <option>
                                                                          {item}
                                                                        </option>
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
                                                              Source Of
                                                              Income/Wealth
                                                            </Label>
                                                            <select className="form-select">
                                                              <option
                                                                defaultValue
                                                              >
                                                                Select-option
                                                              </option>
                                                              {states &&
                                                                states.SourceOfIncomeOrWelth.map(
                                                                  item => {
                                                                    return (
                                                                      <React.Fragment
                                                                        key={
                                                                          item
                                                                        }
                                                                      >
                                                                        <option>
                                                                          {item}
                                                                        </option>
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
                                                              FOREX,CFDS and
                                                              other Instruments
                                                            </Label>
                                                            <select className="form-select">
                                                              <option
                                                                defaultValue
                                                              >
                                                                Select-option
                                                              </option>
                                                              {states &&
                                                                states.ForexCfdsAndOtherInstruments.map(
                                                                  item => {
                                                                    return (
                                                                      <React.Fragment
                                                                        key={
                                                                          item
                                                                        }
                                                                      >
                                                                        <option>
                                                                          {item}
                                                                        </option>
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
                                                              Derivative
                                                              products are
                                                              suitable as part
                                                              of my investment
                                                              objectives and
                                                              attitude towards
                                                              risk and i am abel
                                                              to access the risk
                                                              involved trading
                                                              them, including
                                                              the possibility
                                                              that i may lose
                                                              all of my capital.
                                                            </Label>
                                                            <select className="form-select">
                                                              <option
                                                                defaultValue
                                                              >
                                                                Select-option
                                                              </option>
                                                              {states &&
                                                                states.InitialInvestment.map(
                                                                  item => {
                                                                    return (
                                                                      <React.Fragment
                                                                        key={
                                                                          item
                                                                        }
                                                                      >
                                                                        <option>
                                                                          {item}
                                                                        </option>
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
                                                              I have previous
                                                              qualifications
                                                              and/or work
                                                              experience in the
                                                              financial service
                                                              industry
                                                            </Label>
                                                            <select className="form-select">
                                                              <option
                                                                defaultValue
                                                              >
                                                                Select-option
                                                              </option>
                                                              {states &&
                                                                states.WorkExperience.map(
                                                                  item => {
                                                                    return (
                                                                      <React.Fragment
                                                                        key={
                                                                          item
                                                                        }
                                                                      >
                                                                        <option>
                                                                          {item}
                                                                        </option>
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
                                                              Expected inital
                                                              amount of
                                                              investment in USD?
                                                            </Label>
                                                            <select className="form-select">
                                                              <option
                                                                defaultValue
                                                              >
                                                                Select-option
                                                              </option>
                                                              {states &&
                                                                states.InitialInvestment.map(
                                                                  item => {
                                                                    return (
                                                                      <React.Fragment
                                                                        key={
                                                                          item
                                                                        }
                                                                      >
                                                                        <option>
                                                                          {item}
                                                                        </option>
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
                                                            I have read,
                                                            understood and
                                                            accept the Privecy
                                                            Policy,Risk
                                                            Disclosures and
                                                            Terms & Conditions.
                                                          </div>
                                                        </Col>
                                                      </Row>
                                                      <div
                                                        className="actions clearfix"
                                                        style={{
                                                          textAlign: "right",
                                                        }}
                                                      >
                                                        <Button
                                                          style={{
                                                            marginRight: "15px",
                                                            backgroundColor:
                                                              "#556ee6",
                                                          }}
                                                          type="button"
                                                          className={
                                                            activeTab === 1
                                                              ? "previous disabled"
                                                              : "previous"
                                                          }
                                                        >
                                                          <Link
                                                            style={{
                                                              color: "#fff",
                                                            }}
                                                            to="#"
                                                            onClick={() => {
                                                              toggleTab(
                                                                activeTab - 1
                                                              )
                                                            }}
                                                          >
                                                            Previous
                                                          </Link>
                                                        </Button>
                                                        <Button
                                                          style={{
                                                            backgroundColor:
                                                              "#556ee6",
                                                          }}
                                                        >
                                                          <Link
                                                            className={
                                                              activeTab === 5
                                                                ? "next "
                                                                : "next"
                                                            }
                                                            style={{
                                                              color: "#fff",
                                                            }}
                                                            to="#"
                                                            onClick={() => {
                                                              toggleTab(
                                                                activeTab + 1
                                                              )
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
                                                            <Label>
                                                              Notifications
                                                            </Label>
                                                            <Select
                                                              // defaultValue={["mail", "database"]}
                                                              isMulti
                                                              name="notifications"
                                                              options={
                                                                state &&
                                                                state.Notifications
                                                              }
                                                              className="basic-multi-select"
                                                              classNamePrefix="select"
                                                              onChange={
                                                                validation.handleChange
                                                              }
                                                              value={
                                                                validation
                                                                  .values
                                                                  .notifications ||
                                                                ""
                                                              }
                                                            />
                                                          </div>
                                                        </Col>
                                                      </Row>
                                                      <Row>
                                                        <Col lg="12">
                                                          <div className="mt-3">
                                                            I have read,
                                                            understood and
                                                            accept the Privecy
                                                            Policy,Risk
                                                            Disclosures and
                                                            Terms & Conditions.
                                                          </div>
                                                        </Col>
                                                      </Row>
                                                      <div
                                                        className="actions clearfix"
                                                        style={{
                                                          textAlign: "right",
                                                        }}
                                                      >
                                                        <Button
                                                          style={{
                                                            marginRight: "15px",
                                                            backgroundColor:
                                                              "#556ee6",
                                                          }}
                                                          type="button"
                                                          className={
                                                            activeTab === 1
                                                              ? "previous disabled"
                                                              : "previous"
                                                          }
                                                        >
                                                          <Link
                                                            style={{
                                                              color: "#fff",
                                                            }}
                                                            to="#"
                                                            onClick={() => {
                                                              toggleTab(
                                                                activeTab - 1
                                                              )
                                                            }}
                                                          >
                                                            Previous
                                                          </Link>
                                                        </Button>
                                                        <Button>
                                                          <Link
                                                            className={
                                                              activeTab === 5
                                                                ? "next "
                                                                : "next"
                                                            }
                                                            style={{
                                                              color: "#fff",
                                                            }}
                                                            to="#"
                                                            onClick={() => {
                                                              toggleTab(
                                                                activeTab + 1
                                                              )
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
                                                            <Label>
                                                              Ib Type
                                                            </Label>
                                                            <select className="form-select">
                                                              <option
                                                                defaultValue
                                                              >
                                                                Select-option
                                                              </option>
                                                              {states &&
                                                                states.IbType.map(
                                                                  item => {
                                                                    return (
                                                                      <React.Fragment
                                                                        key={
                                                                          item
                                                                        }
                                                                      >
                                                                        <option>
                                                                          {item}
                                                                        </option>
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
                                                              Target Country
                                                            </Label>
                                                            <select className="form-select">
                                                              <option
                                                                defaultValue
                                                              >
                                                                Select-option
                                                              </option>
                                                              {states &&
                                                                states.TargetCountry.map(
                                                                  item => {
                                                                    return (
                                                                      <React.Fragment
                                                                        key={
                                                                          item
                                                                        }
                                                                      >
                                                                        <option>
                                                                          {item}
                                                                        </option>
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
                                                              How do you Acquire
                                                              Clients
                                                            </Label>
                                                            <select className="form-select">
                                                              <option
                                                                defaultValue
                                                              >
                                                                Select-option
                                                              </option>
                                                              {states &&
                                                                states.AcquireClients.map(
                                                                  item => {
                                                                    return (
                                                                      <React.Fragment
                                                                        key={
                                                                          item
                                                                        }
                                                                      >
                                                                        <option>
                                                                          {item}
                                                                        </option>
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
                                                              Website or Social
                                                              Link
                                                            </Label>
                                                            <Input type="text" />
                                                          </div>
                                                        </Col>
                                                      </Row>
                                                      <Row>
                                                        <Col lg="12">
                                                          <div className="mb-3">
                                                            <Label>
                                                              Are You IB with
                                                              any other brokers?
                                                            </Label>
                                                            <select className="form-select">
                                                              <option
                                                                defaultValue
                                                              >
                                                                Select-option
                                                              </option>
                                                              {states &&
                                                                states.CurrentClients.map(
                                                                  item => {
                                                                    return (
                                                                      <React.Fragment
                                                                        key={
                                                                          item
                                                                        }
                                                                      >
                                                                        <option>
                                                                          {item}
                                                                        </option>
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
                                                              How many Client do
                                                              you have
                                                              currently?
                                                            </Label>
                                                            <select className="form-select">
                                                              <option
                                                                defaultValue
                                                              >
                                                                Select-option
                                                              </option>
                                                              {states &&
                                                                states.CurrentClients.map(
                                                                  item => {
                                                                    return (
                                                                      <React.Fragment
                                                                        key={
                                                                          item
                                                                        }
                                                                      >
                                                                        <option>
                                                                          {item}
                                                                        </option>
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
                                                              How many clients
                                                              do you expect
                                                              introducing in the
                                                              first months?
                                                            </Label>
                                                            <select className="form-select">
                                                              <option
                                                                defaultValue
                                                              >
                                                                Select-option
                                                              </option>
                                                              {states &&
                                                                states.ClientsExpectInFirstThreeMonthes.map(
                                                                  item => {
                                                                    return (
                                                                      <React.Fragment
                                                                        key={
                                                                          item
                                                                        }
                                                                      >
                                                                        <option>
                                                                          {item}
                                                                        </option>
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
                                                              Expecting Average
                                                              Monthly Trading
                                                              Volume
                                                            </Label>
                                                            <select className="form-select">
                                                              <option
                                                                defaultValue
                                                              >
                                                                Select-option
                                                              </option>
                                                              {states &&
                                                                states.ExpectedAvgMonthlyTradingVolume.map(
                                                                  item => {
                                                                    return (
                                                                      <React.Fragment
                                                                        key={
                                                                          item
                                                                        }
                                                                      >
                                                                        <option>
                                                                          {item}
                                                                        </option>
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
                                                            I have read,
                                                            understood and
                                                            accept the Privecy
                                                            Policy,Risk
                                                            Disclosures and
                                                            Terms & Conditions.
                                                          </div>
                                                        </Col>
                                                      </Row>
                                                      <div
                                                        className="actions clearfix"
                                                        style={{
                                                          textAlign: "right",
                                                        }}
                                                      >
                                                        <Button
                                                          style={{
                                                            marginRight: "15px",
                                                            backgroundColor:
                                                              "#556ee6",
                                                          }}
                                                          type="button"
                                                          className={
                                                            activeTab === 1
                                                              ? "previous disabled"
                                                              : "previous"
                                                          }
                                                        >
                                                          <Link
                                                            style={{
                                                              color: "#fff",
                                                            }}
                                                            to="#"
                                                            onClick={() => {
                                                              toggleTab(
                                                                activeTab - 1
                                                              )
                                                            }}
                                                          >
                                                            Previous
                                                          </Link>
                                                        </Button>
                                                        <Button
                                                          style={{
                                                            backgroundColor:
                                                              "#556ee6",
                                                          }}
                                                          type="submit"
                                                          className={
                                                            activeTab === 5
                                                              ? "next "
                                                              : "next"
                                                          }
                                                        >
                                                          {/* <Link
                                    style={{ color: "#fff" }}
                                    to="#"
                                    onClick={() => {
                                      toggleTab(activeTab + 1)
                                    }}
                                  > */}
                                                          Submit
                                                          {/* </Link> */}
                                                        </Button>
                                                      </div>
                                                    </Form>
                                                  </div>
                                                </TabPane>
                                              </TabContent>
                                            </div>
                                          </div>
                                        </CardBody>
                                      </Card>
                                    </Col>
                                  </Row>
                                </ModalBody>
                              </Modal>

                              {isLoading && (
                                <div className="text-center my-3">
                                  <Link to="#" className="text-success">
                                    <i className="bx bx-loader bx-spin font-size-18 align-middle me-2" />
                                    {/* {alert("loader is working")} */}
                                    Load more
                                  </Link>
                                </div>
                              )}

                              <Row>
                                <Col xl="12">
                                  <div>
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
