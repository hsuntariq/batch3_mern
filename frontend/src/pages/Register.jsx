import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
const Register = () => {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: "",
  });
  // destructure the fields
  const { name, email, password } = formFields;
  const handleChange = (e) => {
    e.preventDefault();
    setFormFields((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <Container className="col-md-6 border p-3 shadow mt-4 rounded">
        <Form>
          <div className="display-1 text-center">Register</div>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={name}
              onChange={handleChange}></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={handleChange}></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={handleChange}></Form.Control>
          </Form.Group>
          <Button variant="primary" className="my-2 w-100">
            Register
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Register;
