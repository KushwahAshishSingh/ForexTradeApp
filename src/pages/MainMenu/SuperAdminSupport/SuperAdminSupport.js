import React, { useEffect, useState, useRef } from "react"
import MetaTags from "react-meta-tags"
import PropTypes from "prop-types"
import { withRouter, Link } from "react-router-dom"
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
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
// Formik validation
import * as Yup from "yup"
import { useFormik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import {
  SasUser,
  getSuperAdminSupport,
} from "store/Main-Menu/SuperAdminSupport/action"

import DeleteModal from "components/Common/DeleteModal"

const SuperAdminSupport = props => {
  const [modal, setModal] = useState(false)
  const [managerSupport, setMangerSupport] = useState()

  const toggle = () => setModal(!modal)

  const dispatch = useDispatch()

  const state = useSelector(state => {
    // console.log(state.SuperAdminSupportReducer.users.data)
    return state.SuperAdminSupportReducer.users.data
  })
  console.log(state, "lklljljjl")

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      name: (managerSupport && managerSupport.name) || "",
      email: (managerSupport && managerSupport.email) || "",
      password: (managerSupport && managerSupport.password) || "",
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
      dispatch(SasUser(newUser))
      toggle()
    },
  })

  const [isEdit, setIsEdit] = useState(true)

  useEffect(() => {
    dispatch(getSuperAdminSupport())
    // setIsEdit(true)
  }, [])

  useEffect(() => {
    setMangerSupport(state)
    setIsEdit(false)
  }, [state])

  const [deleteModal, setDeleteModal] = useState(false)

  // const onClickDelete = users => {
  //   setDeleteModal(true)
  // }

  return (
    <React.Fragment>
      <DeleteModal
        show={deleteModal}
        // onDeleteClick={handleDeleteUser}
        onCloseClick={() => setDeleteModal(false)}
      />
      <div className="page-content">
        <MetaTags>
          <title>SuperAdminSupport | ForexTrade</title>
        </MetaTags>
        <Container fluid>
          <Breadcrumbs title="Main Menu" breadcrumbItem="Super Admin Manager" />
          <Row>
            <Col>
              <Card>
                <CardBody>
                  <Row className="mb-2">
                    <Col sm="12">
                      <div className="text-sm-end">
                        <Button
                          type="button"
                          color="success"
                          className="btn-rounded  mb-2 me-2"
                          onClick={toggle}
                        >
                          <i className="mdi mdi-plus me-1" />
                          Add New
                        </Button>
                        <Modal isOpen={modal} toggle={toggle}>
                          <ModalHeader toggle={toggle}>
                            SuperAdminSupport
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
                                <Label className="form-label">Password</Label>
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
                      </div>
                    </Col>
                  </Row>
                  <div className="table-rep-plugin">
                    <div
                      className="table-responsive mb-0"
                      data-pattern="priority-columns"
                    >
                      <Table
                        id="tech-companies-1"
                        className="table table-striped table-bordered"
                      >
                        <Thead>
                          <Tr>
                            <Th data-priority="1">Name</Th>
                            <Th data-priority="3">Email</Th>
                            <Th data-priority="3">Action</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {state &&
                            state.map((item, key) => {
                              return (
                                <>
                                  <Tr key={key}>
                                    <Td>{item.name}</Td>
                                    <Td>{item.email}</Td>
                                    <Td>
                                      <Link className="text-success" to="#">
                                        <i
                                          className="mdi mdi-pencil font-size-18"
                                          id="edittooltip"
                                          onClick={toggle}
                                        ></i>
                                      </Link>
                                      <Link className="text-danger" to="#">
                                        <i
                                          className="mdi mdi-delete font-size-18"
                                          id="deletetooltip"
                                          onClick={() => setDeleteModal(true)}
                                        ></i>
                                      </Link>
                                    </Td>
                                  </Tr>
                                </>
                              )
                            })}
                        </Tbody>
                      </Table>
                    </div>
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

SuperAdminSupport.propTypes = {
  orders: PropTypes.array,
  onGetOrders: PropTypes.func,
  onAddNewOrder: PropTypes.func,
  onDeleteOrder: PropTypes.func,
  onUpdateOrder: PropTypes.func,
}

export default withRouter(SuperAdminSupport)

SuperAdminSupport.propTypes = {
  history: PropTypes.object,
}
