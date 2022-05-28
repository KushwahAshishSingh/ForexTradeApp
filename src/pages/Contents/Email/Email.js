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
  FormFeedback,
  Button,
  Input,
  Label,
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
} from "react-bootstrap-table2-paginator"
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min"
import "../../../assets/scss/datatables.scss"

import { addEmailType } from "store/actions"

import { useDispatch, useSelector } from "react-redux"

const Email = () => {
  const dispatch = useDispatch()
  const state = useSelector(state => state.emailReducer.emailtype)
  // const [email, setEmail] = useState([state, ...emailDetail])
  const history = useHistory()

  const [modal, setModal] = useState(false)

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      emailtype: "",
      emailsubject: "",
    },
    validationSchema: Yup.object({
      emailtype: Yup.string().required("Please Enter Your email"),
      emailsubject: Yup.string().required("Please Enter Your subject"),
    }),
    onSubmit: (values, { resetForm }) => {
      const addEmaildata = {
        emailtype: values["emailtype"],
        emailsubject: values["emailsubject"],
      }
      console.log(addEmaildata, "dsfdsfsd")
      // setEmail([...email, values])
      dispatch(addEmailType(addEmaildata))
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

  const columns = [
    {
      dataField: "emailtype",
      text: "Email Type",
      sort: true,
    },
    {
      dataField: "emailsubject",
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
                                    backdrop="static"
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
                                            type="text"
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
                                  <div>
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
