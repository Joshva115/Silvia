import React from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import { useFormik } from "formik";
import { validationScehma } from "../schemas/validationSchema";
const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};
const BasicFrom = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
  });

  function login() {
    <div>
      <Container className="d-flex align-items-center justify-content-center py-5">
        <Card className="card shadow-lg p-5">
          <Form onSubmit={handleSubmit}>
            <Card.Title className="pb-2 display-5 mt-5 text-center">
              Login
            </Card.Title>
            <Form.Group className="mb-3 pt-3">
              <Form.Label className="lead">Email address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Email Address"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email ? "input-error" : ""}
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
            <Form.Group className="mb-3">
              <Form.Check type="checkbox" label="Remember me" />
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
    </div>;
  }
};
export default login;
