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
  UncontrolledTooltip,
} from "reactstrap"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
// Formik validation
import * as Yup from "yup"
import { useFormik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { AdminUsers, getUser } from "store/actions"
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
  console.log(permissions, "jay ho")
  const [editUser, setEditUser] = useState()
  const history = useHistory()
  const dispatch = useDispatch()
  const state = useSelector(state => {
    return state?.UserReducer?.User?.data
  })

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
    onSubmit: values => {
      const newUser = {
        id: Math.floor(Math.random() * (30 - 20)) + 20,
        name: values["name"],
        email: values["email"],
        password: values["password"],
      }
      // console.log(values)
      //   dispatch(addAdminData(newUser))
      validation.resetForm("")
      toggle()
      // resetForm({ values: "" })
    },
  })

  useEffect(() => {
    dispatch(getUser())
  }, [])

  const toggle = () => {
    history.push("/add-user")
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
          <div className="d-flex gap-3">
            {permissions === "read" ? (
              ""
            ) : (
              <Link
                to="#"
                className="text-success"
                onClick={() => handleOrderClick(order)}
              >
                <i className="mdi mdi-pencil font-size-18" id="edittooltip" />
                <UncontrolledTooltip placement="top" target="edittooltip">
                  Edit
                </UncontrolledTooltip>
              </Link>
            )}
            {/* <Link
              to="#"
              className="text-danger"
              onClick={() => onClickDelete(order)}
            >
              <i className="mdi mdi-delete font-size-18" id="deletetooltip" />
              <UncontrolledTooltip placement="top" target="deletetooltip">
                Delete
              </UncontrolledTooltip>
            </Link> */}
          </div>
        </>
      ),
    },
  ]

  const handleValidDate = date => {
    const date1 = moment(date).format("DD/MM/YY")
    return date1
  }

  return (
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
                                    <SearchBar {...toolkitProps.searchProps} />
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
                                    classes={"table align-middle table-nowrap"}
                                    headerWrapperClasses={"thead-light"}
                                    {...toolkitProps.baseProps}
                                    {...paginationTableProps}
                                  />
                                </div>
                              </Col>
                            </Row>

                            <Row className="align-items-md-center mt-30">
                              <Col className="inner-custom-pagination d-flex">
                                <div className="d-inline">
                                  <SizePerPageDropdownStandalone
                                    {...paginationProps}
                                  />
                                </div>
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
