import React, { useEffect, useState } from "react"
import MetaTags from "react-meta-tags"
import PropTypes from "prop-types"
import { isEmpty } from "lodash"
import "react-datepicker/dist/react-datepicker.css"
import DatePicker from "react-datepicker"

import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormFeedback,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap"
import * as Yup from "yup"
import { useFormik } from "formik"

import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin, { Draggable } from "@fullcalendar/interaction"
import BootstrapTheme from "@fullcalendar/bootstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

import {
  addNewEvent as onAddNewEvent,
  deleteEvent as onDeleteEvent,
  getCategories as onGetCategories,
  getEvents as onGetEvents,
  updateEvent as onUpdateEvent,
} from "../../store/actions"

import DeleteModal from "./DeleteModal"

//css
import "@fullcalendar/bootstrap/main.css"

//redux
import { useSelector, useDispatch } from "react-redux"

const Calender = props => {
  const dispatch = useDispatch()
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  const [event, setEvent] = useState({})

  // events validation
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      name: (event && event.name) || "",
      venue: (event && event.venue) || "",
      user: (event && event.user) || "",
      lead: (event && event.lead) || "",
      date: (event && event.date) || "",
      enddate: (event && event.enddate) || "",
      comments: (event && event.comments) || "",
      alert: (event && event.alert) || "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Please Enter Your Event Name"),
      venue: Yup.string().required("Please Select Your Category"),
      enddate: Yup.string().required("Please Select Your enddate"),
      date: Yup.string().required("Please Select Your startdate"),
    }),
    onSubmit: values => {
      if (isEdit) {
        const updateEvent = {
          id: event.id,
          name: values.name,
          venue: values.venue,
          user: values.user,
          lead: values.lead,
          date: values.date,
          enddate: values.enddate,
          comments: values.comments,
          alert: values.alert,
          classNames: values.category + " text-white",
          start: event.start,
        }
        // update event
        dispatch(onUpdateEvent(updateEvent))
        validation.resetForm()
      } else {
        const newEvent = {
          id: Math.floor(Math.random() * 100),
          name: values["name"],
          venue: values["venue"],
          user: values["user"],
          lead: values["lead"],
          date: values["date"],
          enddate: values["enddate"],
          comments: values["comments"],
          alert: values["alert"],
          start: selectedDay ? selectedDay.date : new Date(),
          className: values.category + " text-white",
        }
        // save new event
        dispatch(onAddNewEvent(newEvent))
        validation.resetForm()
      }
      setSelectedDay(null)
      toggle()
    },
  })

  // category validation
  const categoryValidation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      name: (event && event.name) || "",
      venue: (event && event.venue) || "",
      user: (event && event.user) || "",
      lead: (event && event.lead) || "",
      date: (event && event.date) || "",
      enddate: (event && event.enddate) || "",
      comments: (event && event.comments) || "",
      alert: (event && event.alert) || "",
    },
    validationSchema: Yup.object({
      // title: Yup.string().required("Please Enter Your Order Id"),
      // category: Yup.string().required("Please Enter Your Billing Name"),
      name: Yup.string().required("Please Enter Your Event Name"),
      venue: Yup.string().required("Please Select Your Category"),
      enddate: Yup.string().required("Please Select Your enddate"),
      date: Yup.string().required("Please Select Your startdate"),
    }),
    onSubmit: values => {
      console.log("values", values)
      const newEvent = {
        id: Math.floor(Math.random() * 100),
        name: values["name"],
        venue: values["venue"],
        user: values["user"],
        lead: values["lead"],
        date: values["date"],
        enddate: values["enddate"],
        comments: values["comments"],
        alert: values["alert"],
        start: selectedDay ? selectedDay.date : new Date(),
        className: values.event_category
          ? values.event_category + " text-white"
          : "bg-danger text-white",
      }
      // save new event

      dispatch(onAddNewEvent(newEvent))
      toggleCategory()
    },
  })

  const { events, categories } = useSelector(state => ({
    events: state.calendar.events,
    categories: state.calendar.categories,
  }))

  const [modal, setModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const [modalcategory, setModalcategory] = useState(false)

  const [selectedDay, setSelectedDay] = useState(0)
  const [isEdit, setIsEdit] = useState(false)

  useEffect(() => {
    dispatch(onGetCategories())
    dispatch(onGetEvents())
    new Draggable(document.getElementById("external-events"), {
      itemSelector: ".external-event",
    })
  }, [])

  useEffect(() => {
    if (!modal && !isEmpty(event) && !!isEdit) {
      setTimeout(() => {
        setEvent({})
        setIsEdit(false)
      }, 500)
    }
  }, [modal, event])

  /**
   * Handling the modal state
   */
  const toggle = () => {
    if (modal) {
      setModal(false)
      setEvent(null)
    } else {
      setModal(true)
    }
  }

  const toggleCategory = () => {
    setModalcategory(!modalcategory)
  }

  /**
   * Handling date click on calendar
   */
  const handleDateClick = arg => {
    const date = arg["date"]
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()

    const currectDate = new Date()
    const currentHour = currectDate.getHours()
    const currentMin = currectDate.getMinutes()
    const currentSec = currectDate.getSeconds()
    const modifiedDate = new Date(
      year,
      month,
      day,
      currentHour,
      currentMin,
      currentSec
    )
    const modifiedData = { ...arg, date: modifiedDate }

    setSelectedDay(modifiedData)
    toggle()
  }

  /**
   * Handling click on event on calendar
   */
  const handleEventClick = arg => {
    const event = arg.event
    setEvent({
      id: event.id,
      title: event.title,
      title_category: event.title_category,
      start: event.start,
      className: event.classNames,
      category: event.classNames[0],
      event_category: event.classNames[0],
    })
    console.log(event, "sfsdf")
    setIsEdit(true)
    toggle()
  }

  /**
   * On delete event
   */
  const handleDeleteEvent = () => {
    dispatch(onDeleteEvent(event))
    setDeleteModal(false)
    toggle()
  }

  /**
   * On category darg event
   */
  const onDrag = event => {
    event.preventDefault()
  }

  /**
   * On calendar drop event
   */
  const onDrop = event => {
    const date = event["date"]
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()

    const currectDate = new Date()
    const currentHour = currectDate.getHours()
    const currentMin = currectDate.getMinutes()
    const currentSec = currectDate.getSeconds()
    const modifiedDate = new Date(
      year,
      month,
      day,
      currentHour,
      currentMin,
      currentSec
    )

    const draggedEl = event.draggedEl
    const modifiedData = {
      id: Math.floor(Math.random() * 100),
      title: draggedEl.innerText,
      start: modifiedDate,
      className: draggedEl.className,
    }
    dispatch(onAddNewEvent(modifiedData))
  }

  return (
    <React.Fragment>
      <DeleteModal
        show={deleteModal}
        onDeleteClick={handleDeleteEvent}
        onCloseClick={() => setDeleteModal(false)}
      />
      <div className="page-content">
        <MetaTags>
          <title>Calendar | Skote - React Admin & Dashboard Template</title>
        </MetaTags>
        <Container fluid={true}>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Skote" breadcrumbItem="Calendar" />
          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <Row>
                    <Col lg={12}>
                      <Button
                        color="primary"
                        className="font-16 btn-block"
                        onClick={toggleCategory}
                      >
                        <i className="mdi mdi-plus-circle-outline me-1" />
                        Create Appointment
                      </Button>

                      <div id="external-events" className="mt-3">
                        {/* <p className="text-muted">
                          Drag and drop your event or click in the calendar
                        </p> */}
                        {categories &&
                          categories.map((category, i) => (
                            <div
                              className={`${category.type} external-event text-white p-1 mb-2`}
                              key={"cat-" + category.id}
                              draggable
                              onDrag={event => onDrag(event, category)}
                            >
                              <i className="mdi mdi-checkbox-blank-circle me-2 vertical-middle" />
                              {category.title}
                            </div>
                          ))}
                      </div>

                      {/* <div className="mt-5 d-none d-xl-block"> */}
                      {/* <h5 className="text-center">How It Works ?</h5>

                        <ul className="ps-3">
                          <li className="text-muted mb-3">
                            It has survived not only five centuries, but also
                            the leap into electronic typesetting, remaining
                            essentially unchanged.
                          </li>
                          <li className="text-muted mb-3">
                            Richard McClintock, a Latin professor at
                            Hampden-Sydney College in Virginia, looked up one of
                            the more obscure Latin words, consectetur, from a
                            Lorem Ipsum passage.
                          </li>
                          <li className="text-muted mb-3">
                            It has survived not only five centuries, but also
                            the leap into electronic typesetting, remaining
                            essentially unchanged.
                          </li>
                        </ul> */}
                      {/* </div> */}
                    </Col>
                    <Col className="col-lg-12">
                      {/* fullcalendar control */}
                      <FullCalendar
                        plugins={[
                          BootstrapTheme,
                          dayGridPlugin,
                          interactionPlugin,
                        ]}
                        slotDuration={"00:15:00"}
                        handleWindowResize={true}
                        themeSystem="bootstrap"
                        headerToolbar={{
                          left: "prev,next today",
                          center: "title",
                          right: "dayGridMonth,dayGridWeek,dayGridDay",
                        }}
                        events={events}
                        editable={true}
                        droppable={true}
                        selectable={true}
                        dateClick={handleDateClick}
                        eventClick={handleEventClick}
                        drop={onDrop}
                      />

                      {/* New/Edit event modal */}
                      <Modal isOpen={modal} className={props.className}>
                        <ModalHeader toggle={toggle} tag="h4">
                          {!!isEdit ? "Edit Event" : "Add Event"}
                        </ModalHeader>
                        <ModalBody>
                          <Form
                            onSubmit={e => {
                              e.preventDefault()
                              validation.handleSubmit()
                              return false
                            }}
                          >
                            {/* <Row form>
                              <Col className="col-12 mb-3">
                                <Label className="form-label">Event Name</Label>
                                <Input
                                  name="title"
                                  type="text"
                                  // value={event ? event.title : ""}
                                  onChange={validation.handleChange}
                                  onBlur={validation.handleBlur}
                                  value={validation.values.title || ""}
                                  invalid={
                                    validation.touched.title &&
                                    validation.errors.title
                                      ? true
                                      : false
                                  }
                                />
                                {validation.touched.title &&
                                validation.errors.title ? (
                                  <FormFeedback type="invalid">
                                    {validation.errors.title}
                                  </FormFeedback>
                                ) : null}
                              </Col>
                              <Col className="col-12 mb-3">
                                <Label className="form-label">
                                  Select Category
                                </Label>
                                <Input
                                  type="select"
                                  name="category"
                                  // value={event ? event.category : "bg-primary"}
                                  onChange={validation.handleChange}
                                  onBlur={validation.handleBlur}
                                  value={validation.values.category || ""}
                                  invalid={
                                    validation.touched.category &&
                                    validation.errors.category
                                      ? true
                                      : false
                                  }
                                >
                                  <option value="bg-danger">Danger</option>
                                  <option value="bg-success">Success</option>
                                  <option value="bg-primary">Primary</option>
                                  <option value="bg-info">Info</option>
                                  <option value="bg-dark">Dark</option>
                                  <option value="bg-warning">Warning</option>
                                </Input>
                                {validation.touched.category &&
                                validation.errors.category ? (
                                  <FormFeedback type="invalid">
                                    {validation.errors.category}
                                  </FormFeedback>
                                ) : null}
                              </Col>
                            </Row> */}
                            <Row form>
                              <Col className="col-12 mb-3">
                                <Label className="form-label">Name</Label>
                                <Input
                                  name="name"
                                  type="text"
                                  required
                                  // value={event ? event.title : ""}
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
                              </Col>
                              <Col className="col-12 mb-3">
                                <Label className="form-label">Venue</Label>
                                <Input
                                  name="venue"
                                  type="text"
                                  required
                                  // value={event ? event.title : ""}
                                  onChange={validation.handleChange}
                                  onBlur={validation.handleBlur}
                                  value={validation.values.venue || ""}
                                  invalid={
                                    validation.touched.venue &&
                                    validation.errors.venue
                                      ? true
                                      : false
                                  }
                                />
                                {validation.touched.venue &&
                                validation.errors.venue ? (
                                  <FormFeedback type="invalid">
                                    {validation.errors.venue}
                                  </FormFeedback>
                                ) : null}
                              </Col>
                              <Col className="col-12 mb-3">
                                <Label className="form-label">User</Label>
                                <Input
                                  type="select"
                                  name="user"
                                  // value={event ? event.category : "bg-primary"}
                                  onChange={validation.handleChange}
                                  onBlur={validation.handleBlur}
                                  value={validation.values.user || ""}
                                  invalid={
                                    validation.touched.user &&
                                    validation.errors.user
                                      ? true
                                      : false
                                  }
                                >
                                  <option value="bg-danger">Select</option>
                                  <option value="bg-danger">Ashish</option>
                                  <option value="bg-success">Chandra</option>
                                  <option value="bg-primary">Surya</option>
                                </Input>
                                {validation.touched.user &&
                                validation.errors.user ? (
                                  <FormFeedback type="invalid">
                                    {validation.errors.user}
                                  </FormFeedback>
                                ) : null}
                              </Col>
                              <Col className="col-12 mb-3">
                                <Label className="form-label">Lead</Label>
                                <Input
                                  type="select"
                                  name="lead"
                                  // value={event ? event.category : "bg-primary"}
                                  onChange={validation.handleChange}
                                  onBlur={validation.handleBlur}
                                  value={validation.values.lead || ""}
                                  invalid={
                                    validation.touched.lead &&
                                    validation.errors.lead
                                      ? true
                                      : false
                                  }
                                >
                                  <option value="bg-danger">Select</option>
                                  <option value="bg-danger">Ashish</option>
                                  <option value="bg-success">Chandra</option>
                                  <option value="bg-primary">Surya</option>
                                </Input>
                                {validation.touched.lead &&
                                validation.errors.lead ? (
                                  <FormFeedback type="invalid">
                                    {validation.errors.lead}
                                  </FormFeedback>
                                ) : null}
                              </Col>

                              <Col className="col-12 mb-3">
                                <Label className="form-label">Start Date</Label>

                                <div>
                                  <DatePicker
                                    placeholderText=" dd-mm-yyyy"
                                    // dateFormat={date}
                                    onBlur={validation.handleBlur}
                                    selected={startDate}
                                    onChange={date => {
                                      return setStartDate(date)
                                    }}
                                    minDate={new Date()}
                                    invalid={
                                      validation.touched.start &&
                                      validation.errors.start
                                        ? true
                                        : false
                                    }
                                  />
                                </div>

                                {validation.touched.start &&
                                validation.errors.start ? (
                                  <FormFeedback type="invalid">
                                    {validation.errors.start}
                                  </FormFeedback>
                                ) : null}
                              </Col>
                              <Col className="col-12 mb-3">
                                <Label className="form-label">End Date</Label>

                                <DatePicker
                                  placeholderText=" dd-mm-yyyy"
                                  // dateFormat={date}
                                  onBlur={validation.handleBlur}
                                  selected={endDate}
                                  onChange={date => {
                                    return setEndDate(date)
                                  }}
                                  minDate={new Date(startDate)}
                                  invalid={
                                    validation.touched.start &&
                                    validation.errors.start
                                      ? true
                                      : false
                                  }
                                />
                                {validation.touched.enddate &&
                                validation.errors.enddate ? (
                                  <FormFeedback type="invalid">
                                    {validation.errors.enddate}
                                  </FormFeedback>
                                ) : null}
                              </Col>
                              <Col className="col-12 mb-3">
                                <Label className="form-label">Comments</Label>
                                <Input
                                  name="comments"
                                  type="textarea"
                                  // value={event ? event.title : ""}
                                  onChange={validation.handleChange}
                                  onBlur={validation.handleBlur}
                                  value={validation.values.comments || ""}
                                  invalid={
                                    validation.touched.comments &&
                                    validation.errors.comments
                                      ? true
                                      : false
                                  }
                                />
                                {validation.touched.comments &&
                                validation.errors.comments ? (
                                  <FormFeedback type="invalid">
                                    {validation.errors.comments}
                                  </FormFeedback>
                                ) : null}
                              </Col>
                              <Col className="col-12 mb-3">
                                <Label className="form-label">Alert</Label>
                                <Input
                                  type="select"
                                  name="alert"
                                  // value={event ? event.category : "bg-primary"}
                                  onChange={validation.handleChange}
                                  onBlur={validation.handleBlur}
                                  value={validation.values.alert || ""}
                                  invalid={
                                    validation.touched.alert &&
                                    validation.errors.alert
                                      ? true
                                      : false
                                  }
                                >
                                  <option value="bg-danger">
                                    1 Day before
                                  </option>
                                  <option value="bg-success">
                                    1 week before
                                  </option>
                                  <option value="bg-primary">
                                    1 Month before
                                  </option>
                                </Input>
                                {validation.touched.alert &&
                                validation.errors.alert ? (
                                  <FormFeedback type="invalid">
                                    {validation.errors.alert}
                                  </FormFeedback>
                                ) : null}
                              </Col>
                            </Row>
                            <Row>
                              <Col>
                                <div className="text-end">
                                  <button
                                    type="button"
                                    className="btn btn-light me-2"
                                    onClick={toggle}
                                  >
                                    Close
                                  </button>
                                  {!!isEdit && (
                                    <button
                                      type="button"
                                      className="btn btn-danger me-2"
                                      onClick={() => setDeleteModal(true)}
                                    >
                                      Delete
                                    </button>
                                  )}
                                  <button
                                    type="submit"
                                    className="btn btn-success save-event"
                                  >
                                    Save
                                  </button>
                                </div>
                              </Col>
                            </Row>
                          </Form>
                        </ModalBody>
                      </Modal>

                      <Modal
                        isOpen={modalcategory}
                        toggle={toggleCategory}
                        className={props.className}
                      >
                        <ModalHeader toggle={toggleCategory} tag="h4">
                          Add a category
                        </ModalHeader>
                        <ModalBody>
                          <Form
                            onSubmit={e => {
                              e.preventDefault()
                              categoryValidation.handleSubmit()
                              return false
                            }}
                          >
                            <Row form>
                              <Col className="col-12 mb-3">
                                <Label className="form-label">Name</Label>
                                <Input
                                  name="name"
                                  type="text"
                                  required
                                  // value={event ? event.title : ""}
                                  onChange={categoryValidation.handleChange}
                                  onBlur={categoryValidation.handleBlur}
                                  value={categoryValidation.values.name || ""}
                                  invalid={
                                    categoryValidation.touched.name &&
                                    categoryValidation.errors.name
                                      ? true
                                      : false
                                  }
                                />
                                {categoryValidation.touched.name &&
                                categoryValidation.errors.name ? (
                                  <FormFeedback type="invalid">
                                    {categoryValidation.errors.name}
                                  </FormFeedback>
                                ) : null}
                              </Col>
                              <Col className="col-12 mb-3">
                                <Label className="form-label">Venue</Label>
                                <Input
                                  name="venue"
                                  type="text"
                                  required
                                  // value={event ? event.title : ""}
                                  onChange={categoryValidation.handleChange}
                                  onBlur={categoryValidation.handleBlur}
                                  value={categoryValidation.values.venue || ""}
                                  invalid={
                                    categoryValidation.touched.venue &&
                                    categoryValidation.errors.venue
                                      ? true
                                      : false
                                  }
                                />
                                {categoryValidation.touched.venue &&
                                categoryValidation.errors.venue ? (
                                  <FormFeedback type="invalid">
                                    {categoryValidation.errors.venue}
                                  </FormFeedback>
                                ) : null}
                              </Col>
                              <Col className="col-12 mb-3">
                                <Label className="form-label">User</Label>
                                <Input
                                  type="select"
                                  name="user"
                                  // value={event ? event.category : "bg-primary"}
                                  onChange={categoryValidation.handleChange}
                                  onBlur={categoryValidation.handleBlur}
                                  value={categoryValidation.values.user || ""}
                                  invalid={
                                    categoryValidation.touched.user &&
                                    categoryValidation.errors.user
                                      ? true
                                      : false
                                  }
                                >
                                  <option value="bg-danger">Select</option>
                                  <option value="bg-danger">Ashish</option>
                                  <option value="bg-success">Chandra</option>
                                  <option value="bg-primary">Surya</option>
                                </Input>
                                {categoryValidation.touched.user &&
                                categoryValidation.errors.user ? (
                                  <FormFeedback type="invalid">
                                    {categoryValidation.errors.user}
                                  </FormFeedback>
                                ) : null}
                              </Col>
                              <Col className="col-12 mb-3">
                                <Label className="form-label">Lead</Label>
                                <Input
                                  type="select"
                                  name="lead"
                                  // value={event ? event.category : "bg-primary"}
                                  onChange={categoryValidation.handleChange}
                                  onBlur={categoryValidation.handleBlur}
                                  value={categoryValidation.values.lead || ""}
                                  invalid={
                                    categoryValidation.touched.lead &&
                                    categoryValidation.errors.lead
                                      ? true
                                      : false
                                  }
                                >
                                  <option value="bg-danger">Select</option>
                                  <option value="bg-danger">Ashish</option>
                                  <option value="bg-success">Chandra</option>
                                  <option value="bg-primary">Surya</option>
                                </Input>
                                {categoryValidation.touched.lead &&
                                categoryValidation.errors.lead ? (
                                  <FormFeedback type="invalid">
                                    {categoryValidation.errors.lead}
                                  </FormFeedback>
                                ) : null}
                              </Col>

                              <Col className="col-12 mb-3">
                                <Label className="form-label">Start Date</Label>

                                <DatePicker
                                  placeholderText=" dd-mm-yyyy"
                                  // dateFormat={date}
                                  onBlur={categoryValidation.handleBlur}
                                  selected={startDate}
                                  onChange={date => {
                                    return setStartDate(date)
                                  }}
                                  minDate={new Date()}
                                  invalid={
                                    categoryValidation.touched.start &&
                                    categoryValidation.errors.start
                                      ? true
                                      : false
                                  }
                                />
                                {categoryValidation.touched.start &&
                                categoryValidation.errors.start ? (
                                  <FormFeedback type="invalid">
                                    {categoryValidation.errors.start}
                                  </FormFeedback>
                                ) : null}
                              </Col>
                              <Col className="col-12 mb-3">
                                <Label className="form-label">End Date</Label>
                                <DatePicker
                                  placeholderText=" dd-mm-yyyy"
                                  // dateFormat={date}
                                  onBlur={validation.handleBlur}
                                  selected={endDate}
                                  onChange={date => {
                                    return setEndDate(date)
                                  }}
                                  minDate={new Date(startDate)}
                                  invalid={
                                    validation.touched.start &&
                                    validation.errors.start
                                      ? true
                                      : false
                                  }
                                />
                                {categoryValidation.touched.enddate &&
                                categoryValidation.errors.enddate ? (
                                  <FormFeedback type="invalid">
                                    {categoryValidation.errors.enddate}
                                  </FormFeedback>
                                ) : null}
                              </Col>
                              <Col className="col-12 mb-3">
                                <Label className="form-label">Comments</Label>
                                <Input
                                  name="comments"
                                  type="textarea"
                                  // value={event ? event.title : ""}
                                  onChange={categoryValidation.handleChange}
                                  onBlur={categoryValidation.handleBlur}
                                  value={
                                    categoryValidation.values.comments || ""
                                  }
                                  invalid={
                                    categoryValidation.touched.comments &&
                                    categoryValidation.errors.comments
                                      ? true
                                      : false
                                  }
                                />
                                {categoryValidation.touched.comments &&
                                categoryValidation.errors.comments ? (
                                  <FormFeedback type="invalid">
                                    {categoryValidation.errors.comments}
                                  </FormFeedback>
                                ) : null}
                              </Col>
                              <Col className="col-12 mb-3">
                                <Label className="form-label">Alert</Label>
                                <Input
                                  type="select"
                                  name="alert"
                                  // value={event ? event.category : "bg-primary"}
                                  onChange={categoryValidation.handleChange}
                                  onBlur={categoryValidation.handleBlur}
                                  value={categoryValidation.values.alert || ""}
                                  invalid={
                                    categoryValidation.touched.alert &&
                                    categoryValidation.errors.alert
                                      ? true
                                      : false
                                  }
                                >
                                  <option value="bg-danger">
                                    1 Day before
                                  </option>
                                  <option value="bg-success">
                                    1 week before
                                  </option>
                                  <option value="bg-primary">
                                    1 Month before
                                  </option>
                                </Input>
                                {categoryValidation.touched.alert &&
                                categoryValidation.errors.alert ? (
                                  <FormFeedback type="invalid">
                                    {categoryValidation.errors.alert}
                                  </FormFeedback>
                                ) : null}
                              </Col>
                            </Row>
                            <Row>
                              <Col>
                                <div className="text-end">
                                  <button
                                    type="button"
                                    className="btn btn-light me-2"
                                    onClick={toggleCategory}
                                  >
                                    Close
                                  </button>
                                  <button
                                    type="submit"
                                    className="btn btn-success save-event"
                                  >
                                    Save
                                  </button>
                                </div>
                              </Col>
                            </Row>
                          </Form>
                        </ModalBody>
                      </Modal>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

Calender.propTypes = {
  events: PropTypes.array,
  categories: PropTypes.array,
  className: PropTypes.string,
  onGetEvents: PropTypes.func,
  onAddNewEvent: PropTypes.func,
  onUpdateEvent: PropTypes.func,
  onDeleteEvent: PropTypes.func,
  onGetCategories: PropTypes.func,
}

export default Calender
