import React from "react"
import MetaTags from "react-meta-tags"

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
import { Editor } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

const EmailCreate = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Contents | Skote - React Admin & Dashboard Template</title>
        </MetaTags>
        <Container fluid={true}>
          <Breadcrumbs title="Email" breadcrumbItem="create Email" />
          <Form
            className="form-horizontal"
            // onSubmit={e => {
            //   e.preventDefault()
            //   validation.handleSubmit()
            //   return false
            // }}
          >
            <div className="mb-3">
              <Label>Email Type</Label>
              <select
                className="form-select"
                name="emailtype"
                // onBlur={validation.handleBlur}
                // value={validation.values.emailtype || ""}
                // onChange={validation.handleChange}
              >
                <option>select option</option>
                <option>verfication</option>
                <option>api</option>
                <option>email with api</option>
              </select>
              {/* {validation.touched.emailtype &&
            validation.errors.emailtype ? (
              <FormFeedback type="invalid">
                {validation.errors.emailtype}
              </FormFeedback>
            ) : null}
            </div>

            <div className="mb-3">
              <Label className="form-label">Email Subject</Label>
              <Input
                name="emailsubject"
                className="form-control"
                placeholder="Enter Your Email Subject"
                type="text"
                // onChange={validation.handleChange}
                // onBlur={validation.handleBlur}
                // value={validation.values.emailsubject || ""}
                // invalid={
                //   validation.touched.emailsubject && validation.errors.emailsubject ? true : false
                // }
              />
              {/* {validation.touched.emailsubject && validation.errors.emailsubject ? (
              <FormFeedback type="invalid">
                {validation.errors.emailsubject}
              </FormFeedback>
            ) : null} */}
            </div>

            <Row>
              <Col>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Email Content</CardTitle>

                    <Form method="post">
                      <Editor
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                      />
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <div className="mb-3">
              <Label className="form-label">Email Replace</Label>
              <Input
                name="emailreplace"
                className="form-control"
                placeholder="Enter Your Email Subject"
                type="textarea"
                // onChange={validation.handleChange}
                // onBlur={validation.handleBlur}
                // value={validation.values.emailreplace || ""}
                // invalid={
                //   validation.touched.emailreplace && validation.errors.emailreplace ? true : false
                // }
              />
              {/* {validation.touched.emailreplace && validation.errors.emailreplace ? (
              <FormFeedback type="invalid">
                {validation.errors.emailreplace}
              </FormFeedback>
            ) : null} */}
            </div>

            <div className="mt-3 col-md-12 ">
              <button type="submit" className="btn me-1 btn-primary btn-block">
                Submit
              </button>
            </div>
          </Form>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default EmailCreate
