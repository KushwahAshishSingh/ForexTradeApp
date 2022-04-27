import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import WelcomeComp from "./WelcomeComp";
import MonthlyEarning from "./MonthlyEarning";
//import Charts
import StackedColumnChart from "./StackedColumnChart";
import {
    Container,
    Row,
    Col,
    Button,
    Card,
    CardBody,
    Input,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Table,
} from "reactstrap";
import { Link } from "react-router-dom";
import classNames from "classnames";

const DashboardContent = () => {

    const [periodData, setPeriodData] = useState([]);
    const [periodType, setPeriodType] = useState("yearly");

    const onChangeChartPeriod = pType => {
        setPeriodType(pType);
        // dispatch(onGetChartsData(pType));
    };

    const reports = [
        { title: "Orders", iconClass: "bx-copy-alt", description: "1,235" },
        { title: "Revenue", iconClass: "bx-archive-in", description: "$35, 723" },
        {
            title: "Average Price",
            iconClass: "bx-purchase-tag-alt",
            description: "$16.2",
        },
    ];
    return (
        <React.Fragment>
            {/* Render Breadcrumb */}


            <Row>
                <Col xl="4">
                    <WelcomeComp />
                    <MonthlyEarning />
                </Col>
                <Col xl="8">
                    <Row>
                        {/* Reports Render */}
                        {reports.map((report, key) => (
                            <Col md="4" key={"_col_" + key}>
                                <Card className="mini-stats-wid">
                                    <CardBody>
                                        <div className="d-flex">
                                            <div className="flex-grow-1">
                                                <p className="text-muted fw-medium">
                                                    {report.title}
                                                </p>
                                                <h4 className="mb-0">{report.description}</h4>
                                            </div>
                                            <div className="avatar-sm rounded-circle bg-primary align-self-center mini-stat-icon">
                                                <span className="avatar-title rounded-circle bg-primary">
                                                    <i
                                                        className={
                                                            "bx " + report.iconClass + " font-size-24"
                                                        }
                                                    ></i>
                                                </span>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>

                    <Card>
                        <CardBody>
                            <div className="d-sm-flex flex-wrap">
                                <h4 className="card-title mb-4">Email Sent</h4>
                                <div className="ms-auto">
                                    <ul className="nav nav-pills">
                                        <li className="nav-item">
                                            <Link
                                                to="#"
                                                className={classNames(
                                                    { active: periodType === "weekly" },
                                                    "nav-link"
                                                )}
                                                onClick={() => {
                                                    onChangeChartPeriod("weekly");
                                                }}
                                                id="one_month"
                                            >
                                                Week
                                            </Link>{" "}
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                to="#"
                                                className={classNames(
                                                    { active: periodType === "monthly" },
                                                    "nav-link"
                                                )}
                                                onClick={() => {
                                                    onChangeChartPeriod("monthly");
                                                }}
                                                id="one_month"
                                            >
                                                Month
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                to="#"
                                                className={classNames(
                                                    { active: periodType === "yearly" },
                                                    "nav-link"
                                                )}
                                                onClick={() => {
                                                    onChangeChartPeriod("yearly");
                                                }}
                                                id="one_month"
                                            >
                                                Year
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* <div className="clearfix"></div> */}
                            <StackedColumnChart periodData={periodData} />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default DashboardContent