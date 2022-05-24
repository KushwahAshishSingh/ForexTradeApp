import React, { useEffect, useState } from "react"
import MetaTags from "react-meta-tags"
// import PropTypes from "prop-types"
import { withRouter, Link } from "react-router-dom"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

import {
  Row,
  Col,
  Card,
  CardBody,
  Container,
  FormGroup,
  NavLink,
  NavItem,
  FormFeedback,
  Button,
  Input,
  Label,
  ModalFooter,
  Modal,
  ModalBody,
  ModalHeader,
  Form,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"

// Formik validation
import * as Yup from "yup"
import { useFormik } from "formik"

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

const LiveAccounts = props => {
  const [liveAccounts, setLiveAccounts] = useState([])
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      manual: "",
      platform: "",
      acccounttype: "",
      currency: "",
      leverage: "",
      masterpassword: "",
      investorpassword: "",
    },
    validationSchema: Yup.object({
      // masterpassword: Yup.string().required("Please Enter Your password"),
      // amount: Yup.string().required("Please Enter Your Amount"),
      // comment: Yup.string().required("Please Enter Your Comment"),
    }),
    onSubmit: (values, { resetForm }) => {
      // dispatch(StaffUsers(values, props.history))
      setLiveAccounts([...liveAccounts, values])
      setModal(!modal)
      resetForm({ values: "" })
      // console.log(values, "helllooo")
    },
  })

  const defaultSorted = [
    {
      dataField: "id",
      order: "asc",
    },
  ]

  const pageOptions = {
    sizePerPage: 1,
    // totalSize: state && state.length, // replace later with size(customers),
    custom: true,
  }

  const columns = [
    {
      dataField: "accountnumber",
      text: "Account number",
      sort: true,
    },
    {
      dataField: "accounttype",
      text: "Account Type",
      sort: true,
    },
    {
      dataField: "platform",
      text: "Platform type",
      sort: true,
    },
    {
      dataField: "group",
      text: "Group",
      sort: true,
    },

    {
      dataField: "client",
      text: "Client",
      sort: true,
    },

    {
      dataField: "currency",
      text: "Currency",
      sort: true,
    },

    {
      dataField: "leverage",
      text: "Leverage",
      sort: true,
    },
    {
      dataField: "balance",
      text: "Balance",
      sort: true,
    },
    {
      dataField: "createdat",
      text: "Created At",
      sort: true,
    },
    {
      dataField: "agent",
      text: "Agent",
      sort: true,
    },

    {
      dataField: "status",
      text: "Status",
      sort: true,
      // formatter: (cellContent, row) => handleValidDate(row.createdAt),
    },
    {
      dataField: "menu",
      isDummyField: true,
      editable: false,
      text: "Setting",
      // eslint-disable-next-line react/display-name
      formatter: (cellContent, user) => (
        <div className="d-flex gap-3">
          <UncontrolledDropdown direction="left">
            <DropdownToggle href="#" className="card-drop " tag="i">
              <i className="bx bx-cog  font-size-18" />
            </DropdownToggle>

            <DropdownMenu className="dropdown-menu-end">
              <DropdownItem href="#" onClick={{}}>
                {/* <i className="fas fa-pencil-alt text-success me-1" /> */}
                Deposit
              </DropdownItem>
              <DropdownItem href="#" onClick={{}}>
                {/* <i className="fas fa-pencil-alt text-success me-1" /> */}
                WithDrawal
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      ),
    },
  ]

  // const handleValidDate = date => {
  //   const date1 = moment(date).format("DD/MM/YY")
  //   return date1
  // }

  return (
    <>
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Live Accounts | ForexTrade</title>
          </MetaTags>
          <Container fluid>
            <Breadcrumbs title="User" breadcrumbItem="Live Accounts" />
            <Row>
              <Col>
                <Card>
                  <CardBody>
                    <PaginationProvider
                      pagination={paginationFactory(pageOptions)}
                      keyField="id"
                      columns={columns}
                      data={liveAccounts}
                    >
                      {({ paginationProps, paginationTableProps }) => (
                        <ToolkitProvider
                          keyField="id"
                          columns={columns}
                          data={liveAccounts || []}
                          search
                        >
                          {toolkitProps => (
                            <React.Fragment>
                              <Row className="mb-2">
                                <Col sm="4">
                                  <Button
                                    type="button"
                                    className="btn-rectangle  mb-2 me-2"
                                    onClick={toggle}
                                  >
                                    Create Live Accounts
                                  </Button>

                                  <Modal isOpen={modal} toggle={toggle}>
                                    <ModalHeader toggle={toggle}>
                                      Create Live Accounts
                                    </ModalHeader>
                                    <ModalBody>
                                      <Form
                                        className="form-horizontal"
                                        onSubmit={e => {
                                          e.preventDefault()
                                          validation.handleSubmit()
                                          return false
                                        }}
                                      >
                                        <div className="mb-3">
                                          <Label>Manual / Automatic</Label>
                                          <select
                                            className="form-select"
                                            onBlur={validation.handleBlur}
                                            name="manual"
                                            value={
                                              validation.values.manual || ""
                                            }
                                            onChange={validation.handleChange}
                                          >
                                            <option>select option</option>
                                            <option>Manual</option>
                                            <option>Automatic</option>
                                          </select>
                                          {validation.touched.manual &&
                                          validation.errors.manual ? (
                                            <FormFeedback type="invalid">
                                              {validation.errors.manual}
                                            </FormFeedback>
                                          ) : null}
                                        </div>

                                        <div className="mb-3">
                                          <Label>Platform type</Label>
                                          <select
                                            className="form-select"
                                            onBlur={validation.handleBlur}
                                            name="platform"
                                            value={
                                              validation.values.platform || ""
                                            }
                                            onChange={validation.handleChange}
                                          >
                                            <option>select option</option>
                                            <option>MT5</option>
                                          </select>
                                          {validation.touched.platform &&
                                          validation.errors.platform ? (
                                            <FormFeedback type="invalid">
                                              {validation.errors.platform}
                                            </FormFeedback>
                                          ) : null}
                                        </div>

                                        <div className="mb-3">
                                          <Label>Account Type</Label>
                                          <select
                                            className="form-select"
                                            onBlur={validation.handleBlur}
                                            name="accounttype"
                                            value={
                                              validation.values.accounttype ||
                                              ""
                                            }
                                            onChange={validation.handleChange}
                                          >
                                            <option>select option</option>
                                          </select>
                                          {validation.touched.accounttype &&
                                          validation.errors.accounttype ? (
                                            <FormFeedback type="invalid">
                                              {validation.errors.accounttype}
                                            </FormFeedback>
                                          ) : null}
                                        </div>

                                        <div className="mb-3">
                                          <Label>Account Currency</Label>
                                          <select
                                            className="form-select"
                                            onBlur={validation.handleBlur}
                                            name="currency"
                                            value={
                                              validation.values.currency || ""
                                            }
                                            onChange={validation.handleChange}
                                          >
                                            <option>select option</option>
                                          </select>
                                          {validation.touched.currency &&
                                          validation.errors.currency ? (
                                            <FormFeedback type="invalid">
                                              {validation.errors.currency}
                                            </FormFeedback>
                                          ) : null}
                                        </div>

                                        <div className="mb-3">
                                          <Label>Leverage</Label>
                                          <select
                                            className="form-select"
                                            onBlur={validation.handleBlur}
                                            name="leverage"
                                            value={
                                              validation.values.leverage || ""
                                            }
                                            onChange={validation.handleChange}
                                          >
                                            <option>select option</option>
                                          </select>
                                          {validation.touched.leverage &&
                                          validation.errors.leverage ? (
                                            <FormFeedback type="invalid">
                                              {validation.errors.leverage}
                                            </FormFeedback>
                                          ) : null}
                                        </div>

                                        <div className="mb-3">
                                          <Label className="form-label">
                                            Master password
                                          </Label>
                                          <Input
                                            name="masterpassword"
                                            className="form-control"
                                            placeholder="Enter Your password"
                                            type="password"
                                            onChange={validation.handleChange}
                                            onBlur={validation.handleBlur}
                                            value={
                                              validation.values
                                                .masterpassword || ""
                                            }
                                            invalid={
                                              validation.touched
                                                .masterpassword &&
                                              validation.errors.masterpassword
                                                ? true
                                                : false
                                            }
                                          />
                                          {validation.touched.masterpassword &&
                                          validation.errors.masterpassword ? (
                                            <FormFeedback type="invalid">
                                              {validation.errors.masterpassword}
                                            </FormFeedback>
                                          ) : null}
                                        </div>

                                        <div className="mb-3">
                                          <Label className="form-label">
                                            Investor password
                                          </Label>
                                          <Input
                                            name="investorpassword"
                                            className="form-control"
                                            placeholder="Enter Your password"
                                            type="password"
                                            onChange={validation.handleChange}
                                            onBlur={validation.handleBlur}
                                            value={
                                              validation.values
                                                .investorpassword || ""
                                            }
                                            invalid={
                                              validation.touched
                                                .investorpassword &&
                                              validation.errors.investorpassword
                                                ? true
                                                : false
                                            }
                                          />
                                          {validation.touched
                                            .investorpassword &&
                                          validation.errors.investorpassword ? (
                                            <FormFeedback type="invalid">
                                              {
                                                validation.errors
                                                  .investorpassword
                                              }
                                            </FormFeedback>
                                          ) : null}
                                        </div>
                                        <hr />
                                        <div className="mt-3 col-md-12 text-end">
                                          <button
                                            className="btn me-1 btn-primary btn-block"
                                            onClick={e => {
                                              e.preventDefault()
                                              setModal(false)
                                            }}
                                          >
                                            close
                                          </button>
                                          <button
                                            className="btn btn-primary btn-block"
                                            type="submit"
                                          >
                                            Save
                                          </button>
                                        </div>
                                      </Form>
                                    </ModalBody>
                                  </Modal>
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
                                      // defaultSorted={defaultSorted}
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
    </>
  )
}

// Deposit.propTypes = {
//   orders: PropTypes.array,
//   onGetOrders: PropTypes.func,
//   onAddNewOrder: PropTypes.func,
//   onDeleteOrder: PropTypes.func,
//   onUpdateOrder: PropTypes.func,
// }

export default withRouter(LiveAccounts)

// Deposit.propTypes = {
//   history: PropTypes.object,
// }
