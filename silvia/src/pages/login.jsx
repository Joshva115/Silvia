import React from "react";
import { Formik } from "formik";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { loginSchema } from "../schemas/validationSchema";

const onSubmit = (values, actions) => {
  console.log(actions);
  console.log(values);
};

const login = () => {
  return (
    <Formik
      validationSchema={loginSchema}
      onSubmit={onSubmit}
      initialValues={{
        email: "",
        password: "",
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form onSubmit={handleSubmit}>
          <Container className="d-flex align-items-center justify-content-center py-5">
            <Card className="card shadow-lg p-5">
              <Form>
                <Card.Title className="pb-2 display-5 mt-5 text-center">
                  Login Test
                </Card.Title>
                <Form.Group className="mb-3 pt-3">
                  <Form.Label className="lead">Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email Address"
                    aria-describedby="inputGroupPrepend"
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.email && touched.email ? "input-error" : ""
                    }
                  />
                  {errors.email && touched.email && (
                    <p className="error">{errors.email}</p>
                  )}
                  <Form.Text className="text-muted">
                    We'll <b>never</b> share your data with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="lead">Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    id="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.password && touched.password ? "input-error" : ""
                    }
                  />
                  {errors.password && touched.password && (
                    <p className="error">{errors.password}</p>
                  )}
                </Form.Group>
                <Form.Group className="col-md-12 text-center pt-1">
                  <Button
                    variant="btn btn-lg w-100"
                    className="custom-btn"
                    type="submit"
                  >
                    Login
                  </Button>
                </Form.Group>
                <Form.Group className="pb-2">
                  <Container className="text-left">
                    <Card className="text-center mt-3">
                      <Card.Footer className="border-0">
                        <Card.Body className="text-center">
                          {" "}
                          Don't have an account?{" "}
                          <a href="/register" className="text-dark">
                            Create One
                          </a>
                        </Card.Body>
                      </Card.Footer>
                    </Card>
                  </Container>
                </Form.Group>
              </Form>
            </Card>
          </Container>
        </Form>
      )}
    </Formik>
  );
};

export default login;
