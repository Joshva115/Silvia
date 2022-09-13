import React from "react";
import { Formik } from "formik";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { loginSchema } from "../schemas/validationSchema";
import "./general.css";
const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const test = () => {
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
          <Container>
            <h3 class="text-left display-5 pt-4">
              Create Account Test Environment
            </h3>
            <Form className="row g-2 mt-3">
              <Form.Group className="mb-1 col-md-6">
                <Form.Label className="lead">First Name</Form.Label>
                <Form.Control id="name" type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group className="col-md-6 w-10">
                <Form.Label className="lead">Surname</Form.Label>
                <Form.Control id="surname" type="text" placeholder="Surname" />
              </Form.Group>
              <Form.Group className="col-md-6 w-10">
                <Form.Label className="lead">Email Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Email Address"
                  id="email"
                />
              </Form.Group>
              <Form.Group className="mb-1 col-md-6">
                <Form.Label className="lead">Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  id="username"
                />
              </Form.Group>
              <Form.Group className="mb-1 col-md-4">
                <Form.Label className="lead">Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="1234 Main St"
                  id="address"
                />
                <Form.Text className="text-muted">
                  We'll <b>never</b> share your information with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="col-md-4">
                <Form.Label className="lead">City</Form.Label>
                <Form.Control
                  type="text"
                  id="city"
                  placeholder="Sydney"
                  maxLength={10}
                />
              </Form.Group>
              <Form.Group className="col-md-4">
                <Form.Label className="lead">Zip</Form.Label>
                <Form.Control
                  type="text"
                  id="zip"
                  placeholder="2567"
                  maxLength={4}
                />
              </Form.Group>
              <Form.Group className="mb-1 col-md-6">
                <Form.Label className="lead">Password</Form.Label>
                <Form.Control
                  id="password"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group className="col-md-6 w-10">
                <Form.Label className="lead">Confirm Password</Form.Label>
                <Form.Control
                  id="confirmPassword"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group class="col-md-12 text-center pt-3">
                <Button
                  variant="btn btn-lg w-75"
                  className="custom-btn"
                  type="submit"
                >
                  Test Environment
                </Button>
              </Form.Group>
            </Form>
          </Container>
        </Form>
      )}
    </Formik>
  );
};

export default test;
