import MetaTags from "react-meta-tags"
import React, { useState, useEffect } from "react"
import {
  Container,
  Row,
  Col,
  Card,
  Alert,
  CardBody,
  Button,
  Label,
  Input,
  FormFeedback,
  Form,
} from "reactstrap"

// Formik Validation
import * as Yup from "yup"
import { useFormik } from "formik"

//redux
import { useSelector, useDispatch } from "react-redux"

import { withRouter } from "react-router-dom"

//Import Breadcrumb
import Breadcrumb from "../../../components/Common/Breadcrumb"
import avatar from "../../../assets/images/users/avatar-1.jpg"
// actions
import { editProfile, resetProfileFlag } from "../../../store/actions"

const ViewProfile = props => {
  const dispatch = useDispatch()

  const [email, setemail] = useState("")
  const [name, setname] = useState("")
  const [roleType, setRoleType] = useState("")
  const [idx, setidx] = useState(1)

  const { error, success } = useSelector(state => ({
    error: state.Profile.error,
    success: state.Profile.success,
  }))

  useEffect(() => {
    if (localStorage.getItem("authUser")) {
      const obj = JSON.parse(localStorage.getItem("authUser"))
      // console.log(obj, "johnsong")
      if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
        setname(obj.displayName)
        setemail(obj.email)
        setidx(obj.uid)
      } else if (
        process.env.REACT_APP_DEFAULTAUTH === "fake" ||
        process.env.REACT_APP_DEFAULTAUTH === "jwt"
      ) {
        setname(obj.name)
        setemail(obj.email)
        setidx(obj.id)
        setRoleType(obj.roleType)
      }
      setTimeout(() => {
        dispatch(resetProfileFlag())
      }, 3000)
    }
  }, [dispatch, success])

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      username: name || "",
      idx: idx || "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Please Enter Your UserName"),
    }),
    onSubmit: values => {
      dispatch(editProfile(values))
    },
  })

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Profile | Skote - React Admin & Dashboard Template</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumb title="Skote" breadcrumbItem="Profile" />

          <Row>
            <Col lg="6">
              {error && error ? <Alert color="danger">{error}</Alert> : null}
              {success ? <Alert color="success">{success}</Alert> : null}

              <Card>
                <CardBody>
                  <div className="d-flex">
                    <div className="ms-3">
                      <img
                        src={avatar}
                        alt=""
                        className="avatar-md rounded-circle img-thumbnail"
                      />
                    </div>
                    <div className="flex-grow-1 align-self-center">
                      <div className="text-muted">
                        <h5>{name}</h5>
                        <p className="mb-2">E-Mail: {email}</p>
                        <p className="mb-2">Id no: {idx}</p>
                        <p className="ms-0">Role-Type :{roleType}</p>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          {/* <h4 className="card-title mb-4">Change User Name</h4>

          <Card>
            <CardBody>
              <Form
                className="form-horizontal"
                onSubmit={e => {
                  e.preventDefault()
                  validation.handleSubmit()
                  return false
                }}
              >
                <div className="form-group">
                  <Label className="form-label">User Name</Label>
                  <Input
                    name="username"
                    // value={name}
                    className="form-control"
                    placeholder="Enter User Name"
                    type="text"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.username || ""}
                    invalid={
                      validation.touched.username && validation.errors.username
                        ? true
                        : false
                    }
                  />
                  {validation.touched.username && validation.errors.username ? (
                    <FormFeedback type="invalid">
                      {validation.errors.username}
                    </FormFeedback>
                  ) : null}
                  <Input name="idx" value={idx} type="hidden" />
                </div>
                <div className="text-center mt-4">
                  <Button type="submit" color="danger">
                    Update User Name
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card> */}
        </Container>
      </div>
    </React.Fragment>
  )
}

export default withRouter(ViewProfile)

// import React from "react"
// import MetaTags from "react-meta-tags"
// import { Link } from "react-router-dom"
// import { Card, CardBody, Col, Container, Row } from "reactstrap"

// //import images
// import smallImage from "../../../assets/images/small/img-1.jpg"

// const ViewProfile = () => {
//   return (
//     <React.Fragment>
//       <div className="page-content">
//         <MetaTags>
//           <title>Alerts | Skote - React Admin & Dashboard Template</title>
//         </MetaTags>
//         <Container fluid={true}>
//           <Row>
//             <Col xl={6}>
//               <Card>
//                 <CardBody>
//                   <h4 className="card-title">Default Examples</h4>
//                   <p className="card-title-desc">
//                     In the example below, we take a typical card component and
//                     recreate it with placeholders applied to create a “loading
//                     card”. Size and proportions are the same between the two.
//                   </p>

//                   <Row className="gap-4">
//                     <Col lg={5}>
//                       <Card className="shadow-none border mb-0">
//                         <img
//                           src={smallImage}
//                           className="card-img-top"
//                           alt="..."
//                         />

//                         <CardBody>
//                           <h5 className="card-title">Card title</h5>
//                           <p className="card-text">
//                             Some quick example text to build on the card title
//                             and make up the bulk of the card&apos;s content.
//                           </p>
//                           <Link to="#" className="btn btn-primary">
//                             Go somewhere
//                           </Link>
//                         </CardBody>
//                       </Card>
//                     </Col>

//                     <Col lg={5}>
//                       <Card
//                         className="shadow-none border mb-0"
//                         aria-hidden="true"
//                       >
//                         <img
//                           src={smallImage}
//                           className="card-img-top"
//                           alt="..."
//                         />
//                         <CardBody>
//                           <h5 className="card-title placeholder-glow">
//                             <span className="placeholder col-6"></span>
//                           </h5>
//                           <p className="card-text placeholder-glow">
//                             <span className="placeholder col-7"></span>
//                             <span className="placeholder col-4"></span>
//                             <span className="placeholder col-4"></span>
//                             <span className="placeholder col-6"></span>
//                             <span className="placeholder col-8"></span>
//                           </p>
//                           <Link
//                             to="#"
//                             tabIndex="-1"
//                             className="btn btn-primary disabled placeholder col-6"
//                           ></Link>
//                         </CardBody>
//                       </Card>
//                     </Col>
//                   </Row>
//                 </CardBody>
//               </Card>
//             </Col>

//             <Col xl={6}>
//               <Card>
//                 <CardBody>
//                   <h4 className="card-title">Placeholders with Grid column</h4>
//                   <p className="card-title-desc">
//                     Create placeholders with the <code>.placeholder</code> class
//                     and a grid column class (e.g., <code>.col-6</code>) to set
//                     the <code>width</code>. They can replace the text inside an
//                     element or be added as a modifier class to an existing
//                     component.
//                   </p>

//                   <div>
//                     <p aria-hidden="true">
//                       <span className="placeholder col-6"></span>
//                     </p>

//                     <Link
//                       to="#"
//                       tabIndex="-1"
//                       className="btn btn-primary disabled placeholder col-4"
//                       aria-hidden="true"
//                     ></Link>
//                   </div>
//                 </CardBody>
//               </Card>

//               <Card>
//                 <CardBody>
//                   <h4 className="card-title">Placeholders Width</h4>
//                   <p className="card-title-desc">
//                     You can change the <code>width</code> through grid column
//                     classes, width utilities, or inline styles.
//                   </p>

//                   <div>
//                     <span className="placeholder col-6"></span>
//                     <span className="placeholder w-75"></span>
//                     <span
//                       className="placeholder"
//                       style={{ width: "25%" }}
//                     ></span>
//                   </div>
//                 </CardBody>
//               </Card>
//             </Col>
//           </Row>

//           <Row>
//             <Col xl={6}>
//               <Card>
//                 <CardBody>
//                   <h4 className="card-title">Placeholders Color</h4>
//                   <p className="card-title-desc">
//                     By default, the <code>placeholder</code> uses{" "}
//                     <code>currentColor</code>. This can be overridden with a
//                     custom color or utility class.
//                   </p>

//                   <div>
//                     <span className="placeholder col-12"></span>
//                     <span className="placeholder col-12 bg-primary"></span>
//                     <span className="placeholder col-12 bg-secondary"></span>
//                     <span className="placeholder col-12 bg-success"></span>
//                     <span className="placeholder col-12 bg-danger"></span>
//                     <span className="placeholder col-12 bg-warning"></span>
//                     <span className="placeholder col-12 bg-info"></span>
//                     <span className="placeholder col-12 bg-light"></span>
//                     <span className="placeholder col-12 bg-dark"></span>
//                   </div>
//                 </CardBody>
//               </Card>
//             </Col>

//             <Col xl={6}>
//               <Card>
//                 <CardBody>
//                   <h4 className="card-title">Placeholders Sizing</h4>
//                   <p className="card-title-desc">
//                     The size of <code>.placeholder</code>s are based on the
//                     typographic style of the parent element. Customize them with
//                     sizing modifiers: <code>.placeholder-lg</code>,{" "}
//                     <code>.placeholder-sm</code>, or{" "}
//                     <code>.placeholder-xs</code>.
//                   </p>

//                   <div>
//                     <span className="placeholder col-12 placeholder-lg"></span>
//                     <span className="placeholder col-12"></span>
//                     <span className="placeholder col-12 placeholder-sm"></span>
//                     <span className="placeholder col-12 placeholder-xs"></span>
//                   </div>
//                 </CardBody>
//               </Card>
//             </Col>
//           </Row>

//           <Row>
//             <Col xl={6}>
//               <Card>
//                 <CardBody>
//                   <h4 className="card-title">Animation in Placeholders</h4>
//                   <p className="card-title-desc">
//                     Animate placeholders with <code>.placeholder-glow</code> or{" "}
//                     <code>.placeholder-wave</code> to better convey the
//                     perception of something being <em>actively</em> loaded.
//                   </p>

//                   <div className="">
//                     <p className="placeholder-glow">
//                       <span className="placeholder col-12"></span>
//                     </p>

//                     <p className="placeholder-wave mb-0">
//                       <span className="placeholder col-12"></span>
//                     </p>
//                   </div>
//                 </CardBody>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </React.Fragment>
//   )
// }

// export default ViewProfile
