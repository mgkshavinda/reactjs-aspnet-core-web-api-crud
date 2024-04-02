import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

const FormComponent = () => {
  return (
    <div>
      <Container>
        <Form>
          <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter First Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Last Name" />
          </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type='emial' placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridAge">
              <Form.Label>Age</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </Container>
    </div>
  )
}

export default FormComponent