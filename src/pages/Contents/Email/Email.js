import React, { useEffect, useState } from "react"
import MetaTags from "react-meta-tags"
// import PropTypes from "prop-types"
import { withRouter, useHistory } from "react-router-dom"

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

const emailDetail = [
  {
    email: "introducing broker information",
    subject: "Introducing Broker Updation",
  },

  {
    email: "staff email welcome",
    subject: "staff email welcome",
  },
  {
    email: "	verification otp email",
    subject: "OTP Verification Email - DIZICX",
  },
  {
    email: "ld account create new email",
    subject: "Introducing Broker Updation",
  },
]

const Email = props => {
  const [email, setEmail] = useState(emailDetail)
  const history = useHistory()
  // console.log(bonus, "hekkkkkk")
  const [modal, setModal] = useState(false)

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      email: "",
      subject: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Please Enter Your email"),
      subject: Yup.string().required("Please Enter Your subject"),
    }),
    onSubmit: (values, { resetForm }) => {
      setEmail([...email, values])
      // dispatch(StaffUsers(values, props.history))
      setModal(false)
      resetForm({ values: "" })
    },
  })

  const selectRow = {
    mode: "checkbox",
  }

  const defaultSorted = [
    {
      dataField: "id",
      order: "asc",
    },
  ]

  const pageOptions = {
    sizePerPage: 3,
    // totalSize: state && state.length, // replace later with size(customers),
    custom: true,
  }

  const columns = [
    {
      dataField: "email",
      text: "Email Type",
      sort: true,
    },
    {
      dataField: "subject",
      text: "Subject",
      sort: true,
    },

    {
      dataField: "",
      text: "Settings",
      sort: true,
      formatter: (cellContent, row) => (
        <div className=" col-md-12 me-2 ">
          <button
            className="btn me-1 btn-primary btn-block "
            // onClick={() => setModal(false)}
          >
            Edit
          </button>
          <button className="btn btn-primary btn-block" type="submit">
            Delete
          </button>
        </div>
      ),
    },
  ]

  const createEmailHandler = () => {
    history.push(`/email-create`)
  }

  return (
    <>
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Email | ForexTrade</title>
          </MetaTags>
          <Container fluid>
            <Breadcrumbs title="Content" breadcrumbItem="Email" />
            <Row>
              <Col>
                <Card>
                  <CardBody>
                    <PaginationProvider
                      pagination={paginationFactory(pageOptions)}
                      keyField="id"
                      columns={columns}
                      data={email && email}
                    >
                      {({ paginationProps, paginationTableProps }) => (
                        <ToolkitProvider
                          keyField="id"
                          columns={columns}
                          data={email || []}
                          search
                        >
                          {toolkitProps => (
                            <React.Fragment>
                              <Row className="mb-2">
                                <Col sm="4">
                                  <Button
                                    type="button"
                                    className="btn-rectangle  mb-2 me-2"
                                    onClick={createEmailHandler}
                                  >
                                    Email Create
                                  </Button>
                                  <Button
                                    type="button"
                                    className="btn-rectangle  mb-2 me-2"
                                    onClick={() => setModal(true)}
                                  >
                                    +Add Email Type
                                  </Button>

                                  <Modal
                                    isOpen={modal}
                                    toggle={() => setModal(!modal)}
                                  >
                                    <ModalHeader toggle={() => setModal(false)}>
                                      Add Email Type
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
                                            Email Type
                                            <span>*</span>
                                          </Label>
                                          <Input
                                            name="emailtype"
                                            className="form-control"
                                            placeholder="Enter Your Email Type"
                                            type="name"
                                            onChange={validation.handleChange}
                                            onBlur={validation.handleBlur}
                                            value={
                                              validation.values.emailtype || ""
                                            }
                                            invalid={
                                              validation.touched.emailtype &&
                                              validation.errors.emailtype
                                                ? true
                                                : false
                                            }
                                          />
                                          {validation.touched.emailtype &&
                                          validation.errors.emailtype ? (
                                            <FormFeedback type="invalid">
                                              {validation.errors.emailtype}
                                            </FormFeedback>
                                          ) : null}
                                        </div>
                                        <div className="mb-3">
                                          <Label className="form-label">
                                            Email Subject
                                            <span>*</span>
                                          </Label>
                                          <Input
                                            name="emailsubject"
                                            className="form-control"
                                            placeholder="Enter email"
                                            type="email"
                                            onChange={validation.handleChange}
                                            onBlur={validation.handleBlur}
                                            value={
                                              validation.values.emailsubject ||
                                              ""
                                            }
                                            invalid={
                                              validation.touched.emailsubject &&
                                              validation.errors.emailsubject
                                                ? true
                                                : false
                                            }
                                          />
                                          {validation.touched.emailsubject &&
                                          validation.errors.emailsubject ? (
                                            <FormFeedback type="invalid">
                                              {validation.errors.emailsubject}
                                            </FormFeedback>
                                          ) : null}
                                        </div>

                                        <div className="mt-3 col-md-12 text-end">
                                          <button
                                            className="btn me-1 btn-primary btn-block"
                                            onClick={() => setModal(false)}
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
                                      selectRow={selectRow}
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

export default withRouter(Email)

// Deposit.propTypes = {
//   history: PropTypes.object,
// }
