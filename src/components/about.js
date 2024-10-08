import React from 'react';
import { Accordion } from 'react-bootstrap';

const About = () => {
  return (
    <section>
      <div className="container my-5" id="about">
  <h1 className="display-4 text-center mb-4">About Us</h1>
  <p className="lead text-center mb-4">
    Welcome to <strong>AAA</strong>, your trusted partner in the real estate market. We specialize in connecting buyers and sellers with their dream properties, ensuring a seamless experience for all.
  </p>

  {/* Accordion for Mission, Values, Team, and Contact */}
  <Accordion defaultActiveKey="0" alwaysOpen={false}>
    <Accordion.Item eventKey="0">
      <Accordion.Header>Our Mission</Accordion.Header>
      <Accordion.Body>
      <ul className="list-group list-group-flush">
          <li className="list-group-item">I  Our mission is to empower individuals and families to achieve their real estate goals. Whether you’re looking to buy your first home, sell your property, or invest in real estate, we are here to guide you every step of the way.</li>
        </ul>
      
      </Accordion.Body>
    </Accordion.Item>
    
    <Accordion.Item eventKey="1">
      <Accordion.Header>Our Values</Accordion.Header>
      <Accordion.Body>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Integrity: We believe in honest communication and transparency.</li>
          <li className="list-group-item">Excellence: We strive for excellence in every transaction.</li>
          <li className="list-group-item">Client-Centric: Your needs and goals are our top priority.</li>
        </ul>
      </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="2">
      <Accordion.Header>Our Team</Accordion.Header>
      <Accordion.Body>
      <ul className="list-group list-group-flush">
          <li className="list-group-item"> Our team consists of experienced real estate professionals who are passionate about helping you find the perfect property.</li>
        </ul>
      </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="3">
      <Accordion.Header>Get in Touch</Accordion.Header>
      <Accordion.Body>
      <ul className="list-group list-group-flush">
          <li className="list-group-item">  If you have any questions or would like to learn more about our services, please contact us at +251-9............</li>
        </ul>
      
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
</div>

    </section>
  );
};

export default About;
