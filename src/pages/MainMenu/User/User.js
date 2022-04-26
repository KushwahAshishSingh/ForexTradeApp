import React, { useEffect, useState, useRef } from "react";
import MetaTags from "react-meta-tags";
import PropTypes from "prop-types";
import { withRouter, Link, useHistory } from "react-router-dom";
//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import { Row, Col, Card, CardBody, FormFeedback, Button, Container, Input, Label, ModalFooter, Modal, ModalBody, ModalHeader, Form } from "reactstrap"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { AdminUsers, getUser } from "store/actions";
// datatable related plugins
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, { PaginationProvider, PaginationListStandalone, SizePerPageDropdownStandalone } from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min';
import "../../../assets/scss/datatables.scss"


const User = props => {
    const history = useHistory();
    const dispatch = useDispatch();
    const state = useSelector((state) => {
        return state?.UserReducer?.User?.data
    })

    useEffect(() => {
        dispatch(getUser())
    }, [])

    const toggle = () => {
        history.push('/add-user')
    }



    // Select All Button operation
    const selectRow = {
        mode: 'checkbox'
    }

    const { SearchBar } = Search;

    const defaultSorted = [{
        dataField: 'id',
        order: 'asc'
    }];

    const pageOptions = {
        sizePerPage: 10,
        totalSize: state && state.length, // replace later with size(customers),
        custom: true,
    }

    const columns = [{
        dataField: 'name',
        text: 'Name',
        sort: true
    },
    {
        dataField: 'email',
        text: 'Email',
        sort: true
    },
    ];

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
                                        keyField='id'
                                        columns={columns}
                                        data={state && state}
                                    >
                                        {({ paginationProps, paginationTableProps }) => (
                                            <ToolkitProvider
                                                keyField='id'
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
                                                                    <Button
                                                                        type="button"
                                                                        color="success"
                                                                        className="btn-rounded  mb-2 me-2"
                                                                        onClick={toggle}
                                                                    >
                                                                        <i className="mdi mdi-plus me-1" />
                                                                        Add New User
                                                                    </Button>
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
                                                )
                                                }
                                            </ToolkitProvider>
                                        )
                                        }</PaginationProvider>


                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment >
    );
};

User.propTypes = {
    orders: PropTypes.array,
    onGetOrders: PropTypes.func,
    onAddNewOrder: PropTypes.func,
    onDeleteOrder: PropTypes.func,
    onUpdateOrder: PropTypes.func,
};

export default withRouter(User);

User.propTypes = {
    history: PropTypes.object,
};