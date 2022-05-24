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

const FormEditors = () => {
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
                // value={validation.values.accountNumber || ""}
                // onChange={validation.handleChange}
              >
                <option>select option</option>
                <option>verfication</option>
                <option>api</option>
                <option>email with api</option>
              </select>
              {/* {validation.touched.accountNumber &&
            validation.errors.accountNumber ? (
              <FormFeedback type="invalid">
                {validation.errors.accountNumber}
              </FormFeedback>
            ) : null} */}
            </div>

            <div className="mb-3">
              <Label className="form-label">Email Subject</Label>
              <Input
                name="name"
                className="form-control"
                placeholder="Enter Your Email Subject"
                type="text"
                // onChange={validation.handleChange}
                // onBlur={validation.handleBlur}
                // value={validation.values.name || ""}
                // invalid={
                //   validation.touched.name && validation.errors.name ? true : false
                // }
              />
              {/* {validation.touched.name && validation.errors.name ? (
              <FormFeedback type="invalid">
                {validation.errors.name}
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
                name="name"
                className="form-control"
                placeholder="Enter Your Email Subject"
                type="textarea"
                // onChange={validation.handleChange}
                // onBlur={validation.handleBlur}
                // value={validation.values.name || ""}
                // invalid={
                //   validation.touched.name && validation.errors.name ? true : false
                // }
              />
              {/* {validation.touched.name && validation.errors.name ? (
              <FormFeedback type="invalid">
                {validation.errors.name}
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

export default FormEditors
