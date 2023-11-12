import { Col, Row } from "react-bootstrap";
import './Footer.css'
function Footer() {
  return (
    <div className="footer px-2 mt-5">
      <Row>
        <Col md="4">
          <h4>Follow Us</h4>
          <h5 className="text-danger">Chef Hero</h5>
          <ul className="list-unstyled">
            <li><p >Facebook</p></li>
            <li><p >Twitter</p></li>
            <li><p >Instagram</p></li>
          </ul>
        </Col>
        <Col md="4">
          <h4>About Us</h4>
          <small>
            Chef Hero is a premier food and catering company that offers a wide range of services to meet the diverse needs of its clients. At Chef Hero, we understand that food is not just nourishment, but also a key element in creating unforgettable experiences. Our goal is to provide exceptional food and service to every client, whether it's a small gathering or a large corporate event.
           
          </small>
        </Col>
        <Col md="4">
          <h4>Contact Us</h4>
          <ul className="list-unstyled">
            <li><p >Email</p></li>
            <li><p >Phone</p></li>
            <li><p >Address</p></li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <p>&copy; 2023 <span className="text-danger">Chef Hero</span>. All rights reserved.</p>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
