import React, { useEffect, useState } from "react"
import MetaTags from "react-meta-tags"
// import PropTypes from "prop-types"
import { withRouter, Link, useHistory } from "react-router-dom"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

import { Row, Col, Card, CardBody, Container, Button } from "reactstrap"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"

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

import { useSelector } from "react-redux"

const Tickets = props => {
  const state = useSelector(state => state.TicketReducer.ticket)

  const history = useHistory()

  const defaultSorted = [
    {
      dataField: "id",
      order: "asc",
    },
  ]

  const columns = [
    {
      dataField: "subject",
      text: "Subject",
      sort: true,
    },
    {
      dataField: "reporter",
      text: "Reporter",
      sort: true,
    },
    {
      dataField: "priority",
      text: "Priority",
      sort: true,
    },
    {
      dataField: `${"date"}`,
      text: "Date",
      sort: true,
      defaultSorted: "date",
    },

    {
      dataField: "department",
      text: "Department",
      sort: true,
    },

    {
      dataField: "status",
      text: "Status",
      sort: true,
    },

    {
      dataField: "duedate",
      text: "Due Date",
      sort: true,
    },
  ]

  // const handleValidDate = date => {
  //   const date1 = moment(date).format("DD/MM/YY")
  //   return date1
  // }

  const ticketValuesDatahandler = () => {
    history.push(`/ticket-create`)
  }

  const reports = [
    { title: "OPEN", iconClass: "bx bx-bell", description: "1" },
    { title: "CLOSED", iconClass: "bx bx-select-multiple", description: "73" },
    {
      title: "TICKETS",
      iconClass: "bx bx-aperture",
      description: "74",
    },
    {
      title: "AVG RESPONSE",
      iconClass: "bx bx-chat",
      description: "866.29 Hours",
    },
  ]
  return (
    <>
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Tickets | ForexTrade</title>
          </MetaTags>
          <Container fluid>
            <Breadcrumbs title="Tickets" breadcrumbItem="Ticket" />

            <Row>
              <Col>
                <Card>
                  <CardBody>
                    <PaginationProvider
                      pagination={paginationFactory()}
                      keyField="id"
                      columns={columns}
                      data={state}
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
                                <Col sm="12">
                                  <div className=" text-end mb-2">
                                    <Button
                                      type="button"
                                      className="btn-rectangle"
                                      onClick={ticketValuesDatahandler}
                                    >
                                      Create Tickets
                                    </Button>
                                  </div>
                                  <Row>
                                    {/* Reports Render */}
                                    {reports.map((report, key) => (
                                      <Col md="3" key={"_col_" + key}>
                                        <Card className="mini-stats-wid">
                                          <CardBody>
                                            <div className="d-flex">
                                              <div className="flex-grow-1">
                                                <p className="text-muted fw-medium ">
                                                  {report.title}
                                                </p>
                                                <h5 className="mb-0">
                                                  {report.description}
                                                </h5>
                                              </div>
                                              <div className="avatar-sm rounded-circle bg-primary align-self-center mini-stat-icon">
                                                <span className="avatar-title rounded-circle bg-primary">
                                                  <i
                                                    className={
                                                      "bx " +
                                                      report.iconClass +
                                                      " font-size-24"
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
                                      defaultSorted={defaultSorted}
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

export default withRouter(Tickets)

// Deposit.propTypes = {
//   history: PropTypes.object,
// }
