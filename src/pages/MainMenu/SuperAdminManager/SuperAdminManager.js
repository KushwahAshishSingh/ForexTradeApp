import React, { useEffect, useState, useRef } from "react";
import MetaTags from "react-meta-tags";
import PropTypes from "prop-types";
import { withRouter, Link } from "react-router-dom";
//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import { Row, Col, Card, CardBody, FormFeedback, Button, Container, Input, Label, ModalFooter, Modal, ModalBody, ModalHeader, Form } from "reactstrap"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";
import { SamUser } from "store/actions";
import { useDispatch } from "react-redux";


const SuperAdminManager = props => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const dispatch = useDispatch();

    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Please Enter Your Name"),
            email: Yup.string().required("Please Enter Your Email"),
            password: Yup.string().required("Please Enter Your Password")
        }),
        onSubmit: (values) => {
            console.log(values)
            dispatch(SamUser(values, props.history));
        }
    });

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>SuperAdminManager | ForexTrade</title>
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
                                                <Modal isOpen={modal} toggle={toggle}
                                                >
                                                    <ModalHeader toggle={toggle}>
                                                        SuperAdminManager
                                                    </ModalHeader>
                                                    <ModalBody>
                                                        <Form
                                                            className="form-horizontal"
                                                            onSubmit={(e) => {
                                                                e.preventDefault();
                                                                validation.handleSubmit();
                                                                return false;
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
                                                                        validation.touched.name && validation.errors.name ? true : false
                                                                    }
                                                                />
                                                                {validation.touched.name && validation.errors.name ? (
                                                                    <FormFeedback type="invalid">{validation.errors.name}</FormFeedback>
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
                                                                        validation.touched.email && validation.errors.email ? true : false
                                                                    }
                                                                />
                                                                {validation.touched.email && validation.errors.email ? (
                                                                    <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
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
                                                                        validation.touched.password && validation.errors.password ? true : false
                                                                    }
                                                                />
                                                                {validation.touched.password && validation.errors.password ? (
                                                                    <FormFeedback type="invalid">{validation.errors.password}</FormFeedback>
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
                                                        <Th>Company</Th>
                                                        <Th data-priority="1">Last Trade</Th>
                                                        <Th data-priority="3">Trade Time</Th>
                                                        <Th data-priority="1">Change</Th>
                                                        <Th data-priority="3">Prev Close</Th>
                                                    </Tr>
                                                </Thead>
                                                <Tbody>
                                                    <Tr>
                                                        <Th>
                                                            GOOG <span className="co-name">Google Inc.</span>
                                                        </Th>
                                                        <Td>597.74</Td>
                                                        <Td>12:12PM</Td>
                                                        <Td>14.81 (2.54%)</Td>
                                                        <Td>582.93</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Th>
                                                            AAPL <span className="co-name">Apple Inc.</span>
                                                        </Th>
                                                        <Td>378.94</Td>
                                                        <Td>12:22PM</Td>
                                                        <Td>5.74 (1.54%)</Td>
                                                        <Td>373.20</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Th>
                                                            AMZN{" "}
                                                            <span className="co-name">Amazon.com Inc.</span>
                                                        </Th>
                                                        <Td>191.55</Td>
                                                        <Td>12:23PM</Td>
                                                        <Td>3.16 (1.68%)</Td>
                                                        <Td>188.39</Td>
                                                    </Tr>
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
    );
};

SuperAdminManager.propTypes = {
    orders: PropTypes.array,
    onGetOrders: PropTypes.func,
    onAddNewOrder: PropTypes.func,
    onDeleteOrder: PropTypes.func,
    onUpdateOrder: PropTypes.func,
};

export default withRouter(SuperAdminManager);

SuperAdminManager.propTypes = {
    history: PropTypes.object,
};