import React from "react"
import MetaTags from "react-meta-tags"

import { useHistory } from "react-router-dom"

import {
  Form,
  Card,
  CardBody,
  Col,
  Row,
  CardTitle,
  Label,
  FormFeedback,
  Input,
  Container,
  Button,
} from "reactstrap"

// Form Editor

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

import { CKEditor } from "@ckeditor/ckeditor5-react"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

// Formik Validation
import { useFormik } from "formik"
import * as Yup from "yup"

import { useDispatch } from "react-redux"
import { getCreateTicket, addNewCreateDetail } from "store/actions"

const CreateTickets = props => {
  const history = useHistory()
  const dispatch = useDispatch()

  // const current = new Date()
  // const date = `${current.getDate()}-${
  //   current.getMonth() + 1
  // }-${current.getFullYear()}`

  // console.log(date, "date++++")

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      department: "",
      subject: "",
      reporter: "",
      priority: "",
      tags: "",
      message: "",
    },

    validationSchema: Yup.object({
      department: Yup.string().required("Please select an option"),
      subject: Yup.string().required("Please Enter Your Subject"),
      priority: Yup.string().required("Please Enter Your priority"),
    }),
    onSubmit: (values, { resetForm }) => {
      const ticketValue = {
        department: values["department"],
        subject: values["subject"],
        reporter: values["reporter"],
        tags: values["tags"],
        message: values["message"],
        priority: values["priority"],
      }
      dispatch(addNewCreateDetail(ticketValue))
      // props.onTicketValues
      history.push("/tickets")
      resetForm({ values: "" })
    },
  })

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Contents | Skote - React Admin & Dashboard Template</title>
        </MetaTags>
        <Container fluid={true}>
          <Breadcrumbs title="Ticket" breadcrumbItem="create Ticket" />
          <Form
            className="form-horizontal"
            onSubmit={e => {
              e.preventDefault()
              validation.handleSubmit()
              return false
            }}
          >
            <div className="mb-3">
              <Label>Department</Label>
              <select
                className="form-select"
                name="department"
                onBlur={validation.handleBlur}
                value={validation.values.department || ""}
                onChange={validation.handleChange}
              >
                <option>select option</option>
                <option>Accounts</option>
                <option>Support</option>
                <option>Compliance</option>
              </select>
              {validation.touched.department && validation.errors.department ? (
                <FormFeedback type="invalid">
                  {validation.errors.department}
                </FormFeedback>
              ) : null}
            </div>

            <div className="mb-3">
              <Label className="form-label">Subject</Label>
              <Input
                name="subject"
                className="form-control"
                placeholder="Enter Your Email Subject"
                type="text"
                onChange={validation.handleChange}
                onBlur={validation.handleBlur}
                value={validation.values.subject || ""}
                invalid={
                  validation.touched.subject && validation.errors.subject
                    ? true
                    : false
                }
              />
              {validation.touched.subject && validation.errors.subject ? (
                <FormFeedback type="invalid">
                  {validation.errors.subject}
                </FormFeedback>
              ) : null}
            </div>

            <div className="mb-3">
              <Label>Reporter</Label>
              <select
                className="form-select"
                name="reporter"
                onBlur={validation.handleBlur}
                value={validation.values.reporter || ""}
                onChange={validation.handleChange}
              >
                <option>select option</option>
                <option>Ankit</option>
                <option>Ashish</option>
                <option>Kunal</option>
              </select>
              {validation.touched.reporter && validation.errors.reporter ? (
                <FormFeedback type="invalid">
                  {validation.errors.reporter}
                </FormFeedback>
              ) : null}
            </div>

            <div className="mb-3">
              <Label>Priority</Label>
              <select
                className="form-select"
                name="priority"
                onBlur={validation.handleBlur}
                value={validation.values.priority || ""}
                onChange={validation.handleChange}
              >
                <option>select option</option>
                <option>Low</option>
                <option>High</option>
                <option>Medium</option>
                <option>Urgent</option>
              </select>
              {validation.touched.priority && validation.errors.priority ? (
                <FormFeedback type="invalid">
                  {validation.errors.priority}
                </FormFeedback>
              ) : null}
            </div>

            <Row>
              <Col>
                <Label>Message</Label>
                <Card>
                  <CardBody>
                    <Form method="post">
                      <CKEditor
                        editor={ClassicEditor}
                        data="<p>Message</p>"
                        onReady={editor => {
                          // You can store the "editor" and use when it is needed.
                          console.log("Editor is ready to use!", editor)
                        }}
                        onChange={(event, editor) => {
                          const data = editor.getData()
                        }}
                      />
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <div className="mb-3">
              <Label className="form-label">Tags</Label>
              <Input
                name="tags"
                className="form-control"
                placeholder="Enter Your Email Subject"
                type="text"
                onChange={validation.handleChange}
                onBlur={validation.handleBlur}
                value={validation.values.tags || ""}
                invalid={
                  validation.touched.tags && validation.errors.tags
                    ? true
                    : false
                }
              />
              {validation.touched.tags && validation.errors.tags ? (
                <FormFeedback type="invalid">
                  {validation.errors.tags}
                </FormFeedback>
              ) : null}
            </div>

            <div className="mt-3 col-md-12 ">
              <button type="submit" className="btn me-1 btn-primary btn-block">
                Open
              </button>
            </div>
          </Form>
        </Container>
      </div>
    </React.Fragment>
  )
}
// CreateTickets.propTypes = {
//   onTicketValues: PropTypes.func,
// }
export default CreateTickets
