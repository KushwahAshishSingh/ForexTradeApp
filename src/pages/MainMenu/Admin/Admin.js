import React, { useEffect, useState, useRef } from "react"
import MetaTags from "react-meta-tags"
import PropTypes from "prop-types"
import { withRouter, Link, useHistory } from "react-router-dom"
//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import {
  Row,
  Col,
  Card,
  CardBody,
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
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"

import BootstrapTable from "react-bootstrap-table-next"
import paginationFactory, {
  PaginationProvider,
} from "react-bootstrap-table2-paginator"

import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min"

import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
// Formik validation
import * as Yup from "yup"
import { useFormik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { AdminUser, getAdmin, adminProfile } from "store/actions"
import DeleteModal from "../../../components/Common/DeleteModal"

const Admin = props => {
  const permissions = JSON.parse(localStorage.getItem("authUser")).permissions
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)
  const history = useHistory()

  const dispatch = useDispatch()

  const state = useSelector(state => {
    return state?.Admin?.Admin?.data
  })
  // console.log(state, "+++++")
  useEffect(() => {
    dispatch(getAdmin())
  }, [])

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Please Enter Your Name"),
      email: Yup.string().required("Please Enter Your Email"),
      password: Yup.string().required("Please Enter Your Password"),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(AdminUser(values, props.history))
      setModal(!modal)
      resetForm({ values: "" })
    },
  })

  // VIEW PROFILE
  const adminViewProfile = id => {
    console.log(id, "sdfsdfdsf")
    dispatch(adminProfile(id))
    history.push(`/admin-profile/${id}`)
  }

  const { SearchBar } = Search

  const selectRow = {
    mode: "checkbox",
  }

  const defaultSorted = [
    {
      dataField: "id",
      order: "asc",
    },
  ]

  const columns = [
    {
      dataField: "name",
      text: "Name",
      sort: true,
    },
    {
      dataField: "email",
      text: "Email",
      sort: true,
    },

    {
      dataField: "action",
      isDummyField: true,
      text: "Action",
      // eslint-disable-next-line react/display-name
      formatter: (cellContent, id) => (
        <>
          <UncontrolledDropdown direction="left">
            {permissions === "create" || permissions === "read" ? null : (
              <>
                <DropdownToggle href="#" className="card-drop " tag="i">
                  <i className="bx bx-cog  font-size-18" />
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-end">
                  <DropdownItem
                    href="#"
                    onClick={() => adminViewProfile(id.id)}
                  >
                    {/* <i className="fas fa-pencil-alt text-success me-1" /> */}
                    View
                  </DropdownItem>

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
                    Demo Account Update
                  </DropdownItem>
                </DropdownMenu>
              </>
            )}
          </UncontrolledDropdown>
        </>
      ),
    },
  ]

  const [deleteModal, setDeleteModal] = useState(false)

  return (
    <React.Fragment>
      <DeleteModal
        show={deleteModal}
        // onDeleteClick={handleDeleteUser}
        onCloseClick={() => setDeleteModal(false)}
      />
      <div className="page-content">
        <MetaTags>
          <title>Admin | ForexTrade</title>
        </MetaTags>
        <Container fluid>
          <Breadcrumbs title="Main Menu" breadcrumbItem="Admin" />
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
                                    <SearchBar {...toolkitProps.searchProps} />
                                    <i className="bx bx-search-alt search-icon" />
                                  </div>
                                </div>
                              </Col>
                              <Col sm="8">
                                <div className="text-sm-end">
                                  {permissions === "read" ||
                                  permissions === "update" ? null : (
                                    <>
                                      <Button
                                        type="button"
                                        color="success"
                                        className="btn-rounded  mb-2 me-2"
                                        onClick={toggle}
                                      >
                                        <i className="mdi mdi-plus me-1" />
                                        Add New
                                      </Button>
                                    </>
                                  )}
                                </div>
                              </Col>
                            </Row>
                            <Modal
                              isOpen={modal}
                              toggle={toggle}
                              backdrop="static"
                            >
                              <ModalHeader toggle={toggle}>Admin</ModalHeader>
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
                                    <Label className="form-label">Name</Label>
                                    <Input
                                      name="name"
                                      className="form-control"
                                      placeholder="Enter Your Name"
                                      type="name"
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
                                  <div className="mb-3">
                                    <Label className="form-label">Email</Label>
                                    <Input
                                      name="email"
                                      className="form-control"
                                      placeholder="Enter email"
                                      type="email"
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

                                  <div className="mb-3">
                                    <Label className="form-label">
                                      Password
                                    </Label>
                                    <Input
                                      name="password"
                                      value={validation.values.password || ""}
                                      type="password"
                                      placeholder="Enter Password"
                                      onChange={validation.handleChange}
                                      onBlur={validation.handleBlur}
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

                                  <div className="mt-3 d-grid">
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

                            <Row>
                              <Col xl="12">
                                <div>
                                  <BootstrapTable
                                    keyField={"id"}
                                    responsive
                                    bordered={false}
                                    striped={false}
                                    selectRow={selectRow}
                                    // defaultSorted={defaultSorted}
                                    classes={"table align-middle table-nowrap"}
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
  )
}

Admin.propTypes = {
  orders: PropTypes.array,
  onGetOrders: PropTypes.func,
  onAddNewOrder: PropTypes.func,
  onDeleteOrder: PropTypes.func,
  onUpdateOrder: PropTypes.func,
}

export default withRouter(Admin)

Admin.propTypes = {
  history: PropTypes.object,
}
