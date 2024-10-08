import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); // For redirecting to the home page

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send the form data to the backend
    console.log('Form submitted:', formData);

    // Show the success modal
    setShowModal(true);

    // Redirect to the home page after 2 seconds
    setTimeout(() => {
      setShowModal(false);
      navigate('/'); // Redirect to the home page
    }, 2000);
  };

  return (
    <section>
      <Container className="my-5" id="contact">
        <h1 className="display-4 text-center mb-4">Contact Us</h1>
        <p className="lead text-center mb-4">
          Have any questions? Feel free to contact us using the form below.
        </p>
        <Row>
          <Col md={8} className="mx-auto">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Enter your message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-3">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>

        {/* Success Modal */}
        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Body>
            <h5 className="text-center">Message sent successfully!</h5>
          </Modal.Body>
        </Modal>
      </Container>
    </section>
  );
};

export default Contact;
