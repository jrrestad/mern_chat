import React from 'react';
import {Button, Col, Form, Row} from 'react-bootstrap';
import './NameForm.css';

const NameForm = ({setName}) => {
  const handleSubmit = e => {
    e.preventDefault();
    setName(e.target['name'].value);
  }

  return (
    <Row className="NameForm">
      <Col md={5}>
        <h2>Get started chatting!</h2>
        <Form onSubmit={handleSubmit} className="Form">
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              as="input"
              name="name"
              type="text"
              required
            />
          </Form.Group>

          <Button variant="success" type="submit">
            Start Chatting
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default NameForm;
