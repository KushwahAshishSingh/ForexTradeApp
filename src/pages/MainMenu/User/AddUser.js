import React, { useState } from "react"
import MetaTags from "react-meta-tags"
import {
    Card, CardBody, Col, Container, Form, FormGroup, Input, Label, NavItem, NavLink, Row, TabContent, TabPane, FormFeedback
} from "reactstrap"
// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";
import classnames from "classnames"
import { Link } from "react-router-dom"
import Select from 'react-select';

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb";

const AddUser = () => {
    const [activeTab, setactiveTab] = useState(1)

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

    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            sales_agent: '',
            fullname: '',
        },
        validationSchema: Yup.object({
            sales_agent: Yup.string().required("Please Select"),
            fullname: Yup.string().required("Please Enter Your Name"),
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            //     dispatch(loginUser(values,));
            //     resetForm({ values: '' });
        }
    });


    return (
        <React.Fragment>
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
                                                        className={classnames({ current: activeTab === 1 })}
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
                                                        className={classnames({ active: activeTab === 2 })}
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
                                                        className={classnames({ active: activeTab === 3 })}
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
                                                        className={classnames({ active: activeTab === 4 })}
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
                                                        className={classnames({ active: activeTab === 5 })}
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
                                                    <Form onSubmit={(e) => {
                                                        e.preventDefault();
                                                        validation.handleSubmit();
                                                        return false;
                                                    }}>
                                                        <Row>
                                                            <Col lg="12">
                                                                <div className="mb-3">
                                                                    <Label>Sales Agent <span style={{ color: 'red' }}>*</span></Label>
                                                                    <Select
                                                                        onChange={validation.handleChange}
                                                                        onBlur={validation.handleBlur}
                                                                        value={validation.values.sales_agent || ""}
                                                                        invalid={
                                                                            validation.touched.sales_agent && validation.errors.sales_agent ? true : false
                                                                        }
                                                                        name="sales_agent" />
                                                                    {validation.touched.sales_agent && validation.errors.sales_agent ? (
                                                                        <FormFeedback type="invalid">{validation.errors.sales_agent}</FormFeedback>
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
                                                                        name="fullname"
                                                                        type="text"
                                                                        className="form-control"
                                                                        id="basicpill-firstname-input1"
                                                                        placeholder="Enter Your Full Name"
                                                                        onChange={validation.handleChange}
                                                                        onBlur={validation.handleBlur}
                                                                        value={validation.values.fullname || ""}
                                                                        invalid={
                                                                            validation.touched.fullname && validation.errors.fullname ? true : false
                                                                        }
                                                                    />
                                                                    {validation.touched.fullname && validation.errors.fullname ? (
                                                                        <FormFeedback type="invalid">{validation.errors.fullname}</FormFeedback>
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
                                                                <FormGroup className="pr-4"
                                                                    check
                                                                    inline
                                                                >
                                                                    <Input type="checkbox" />
                                                                    <Label check>
                                                                        Phone Verified
                                                                    </Label>
                                                                </FormGroup>
                                                                <FormGroup
                                                                    check
                                                                    inline
                                                                >
                                                                    <Input type="checkbox" />
                                                                    <Label check>
                                                                        Email Verified
                                                                    </Label>
                                                                </FormGroup>
                                                                <FormGroup
                                                                    check
                                                                    inline
                                                                >
                                                                    <Input type="checkbox" />
                                                                    <Label check>
                                                                        KYC Verified
                                                                    </Label>
                                                                </FormGroup>
                                                                <FormGroup
                                                                    check
                                                                    inline
                                                                >
                                                                    <Input type="checkbox" />
                                                                    <Label check>
                                                                        Send Welcome Email
                                                                    </Label>
                                                                </FormGroup>
                                                                <FormGroup
                                                                    check
                                                                    inline
                                                                >
                                                                    <Input type="checkbox" />
                                                                    <Label check>
                                                                        Send Email Verification
                                                                    </Label>
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col lg="12">
                                                                <div className="mt-3">
                                                                    I have read, understood and accept the Privecy Policy,Risk Disclosures and Terms & Conditions.
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
                                                                            <option defaultValue>
                                                                                English
                                                                            </option>
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
                                                                            <option defaultValue>
                                                                                India
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
                                                                        <Label for="exampleFile">
                                                                            Logo
                                                                        </Label>
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
                                                                            I have read, understood and accept the Privecy Policy,Risk Disclosures and Terms & Conditions.
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
                                                                        <Label>Total Estimated Net Worth($)?</Label>
                                                                        <select className="form-select">
                                                                            <option defaultValue>
                                                                                Select
                                                                            </option>
                                                                            <option value="VI">Visa</option>
                                                                            <option value="MC">MasterCard</option>
                                                                            <option value="DI">Discover</option>
                                                                        </select>
                                                                    </div>
                                                                </Col>

                                                                <Col lg="6">
                                                                    <div className="mb-3">
                                                                        <Label>Total Estimated Annual Income($)?</Label>
                                                                        <select className="form-select">
                                                                            <option defaultValue>
                                                                                Select
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
                                                                        <Label>Your Employment Status</Label>
                                                                        <select className="form-select">
                                                                            <option defaultValue>
                                                                                Select
                                                                            </option>
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
                                                                            <option defaultValue>
                                                                                Select
                                                                            </option>
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
                                                                        <Label>FOREX,CFDS and other Instruments</Label>
                                                                        <select className="form-select">
                                                                            <option defaultValue>
                                                                                Select
                                                                            </option>
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
                                                                        <Label>Derivative products are suitable as part of my investment objectives and attitude towards risk
                                                                            and i am abel to access the risk involved trading them, including the possibility that i may lose
                                                                            all of my capital.
                                                                        </Label>
                                                                        <select className="form-select">
                                                                            <option defaultValue>
                                                                                Select
                                                                            </option>
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
                                                                        <Label>I have previous qualifications and/or work experience in the financial service industry</Label>
                                                                        <select className="form-select">
                                                                            <option defaultValue>
                                                                                Select
                                                                            </option>
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
                                                                        <Label>Expected inital amount of investment in USD?</Label>
                                                                        <select className="form-select">
                                                                            <option defaultValue>
                                                                                Select
                                                                            </option>
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
                                                                        I have read, understood and accept the Privecy Policy,Risk Disclosures and Terms & Conditions.
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
                                                                        I have read, understood and accept the Privecy Policy,Risk Disclosures and Terms & Conditions.
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
                                                                            <option defaultValue>
                                                                                Select
                                                                            </option>
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
                                                                            <option defaultValue>
                                                                                Select
                                                                            </option>
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
                                                                            <option defaultValue>
                                                                                Select
                                                                            </option>
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
                                                                        <Label>Are You IB with any other brokers?</Label>
                                                                        <select className="form-select">
                                                                            <option defaultValue>
                                                                                Select
                                                                            </option>
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
                                                                        <Label>How many Client do you have currently?</Label>
                                                                        <select className="form-select">
                                                                            <option defaultValue>
                                                                                Select
                                                                            </option>
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
                                                                        <Label>How many clients do you expect introducing in the first months?</Label>
                                                                        <select className="form-select">
                                                                            <option defaultValue>
                                                                                Select
                                                                            </option>
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
                                                                        <Label>Expecting Average Monthly Trading Volume</Label>
                                                                        <select className="form-select">
                                                                            <option defaultValue>
                                                                                Select
                                                                            </option>
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
                                                                        I have read, understood and accept the Privecy Policy,Risk Disclosures and Terms & Conditions.
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
                                                <li
                                                    className={activeTab === 5 ? "next " : "next"}
                                                >
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
        </React.Fragment>
    )
}

export default AddUser
