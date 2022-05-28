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
} from "reactstrap"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
// Formik validation
import * as Yup from "yup"
import { useFormik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { getStaff, StaffUsers } from "store/actions"
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

const Staff = props => {
  const [modal, setModal] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const history = useHistory()
  const dispatch = useDispatch()
  const state = useSelector(state => {
    return state?.StaffReducer?.Staff?.data
  })

  const toggle = () => setModal(!modal)

  useEffect(() => {
    dispatch(getStaff())
    if (state?.length > 0) {
      setIsLoading(false)
    }
  }, [])

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      name: "",
      email: "",
      password: "",
      permissions: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Please Enter Your Name"),
      email: Yup.string().required("Please Enter Your Email"),
      password: Yup.string().required("Please Enter Your Password"),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(StaffUsers(values, props.history))
      setModal(!modal)
      resetForm({ values: "" })
      // console.log("valllllll", values)
    },
  })

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
      dataField: "email",
      text: "Email",
      sort: true,
    },
  ]

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Staff | ForexTrade</title>
        </MetaTags>
        <Container fluid>
          <Breadcrumbs title="Main Menu" breadcrumbItem="Staff" />
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
                                {}
                                <div className="text-sm-end">
                                  <Button
                                    type="button"
                                    color="success"
                                    className="btn-rounded  mb-2 me-2"
                                    onClick={toggle}
                                  >
                                    <i className="mdi mdi-plus me-1" />
                                    Add New Staff
                                  </Button>
                                  <Modal
                                    isOpen={modal}
                                    toggle={toggle}
                                    backdrop="static"
                                  >
                                    <ModalHeader toggle={toggle}>
                                      Admin Staff
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
                                          <Label className="form-label">
                                            Name
                                          </Label>
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
                                          <Label className="form-label">
                                            Email
                                          </Label>
                                          <Input
                                            name="email"
                                            className="form-control"
                                            placeholder="Enter email"
                                            type="email"
                                            onChange={validation.handleChange}
                                            onBlur={validation.handleBlur}
                                            value={
                                              validation.values.email || ""
                                            }
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
                                            value={
                                              validation.values.password || ""
                                            }
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

                                        <Row>
                                          <Col lg="12">
                                            <div className="mb-3">
                                              <Label>Permission</Label>
                                              <select
                                                className="form-select"
                                                onBlur={validation.handleBlur}
                                                name="permissions"
                                                value={
                                                  validation.values
                                                    .permissions || ""
                                                }
                                                onChange={
                                                  validation.handleChange
                                                }
                                              >
                                                <option>select option</option>
                                                <option>create</option>
                                                <option>read</option>
                                                <option>update</option>
                                              </select>
                                              {validation.touched.permissions &&
                                              validation.errors.permissions ? (
                                                <FormFeedback type="invalid">
                                                  {
                                                    validation.errors
                                                      .permissions
                                                  }
                                                </FormFeedback>
                                              ) : null}
                                            </div>
                                          </Col>
                                        </Row>

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
                                </div>
                              </Col>
                            </Row>

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

export default withRouter(Staff)

Staff.propTypes = {
  history: PropTypes.object,
}
