import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const ServiceSection = () => {
  return (
    <section id="services" className="mt-5 ">
      <Container>
      
          <Col>
          <h2 className='mt-5 mb-3 text-danger'>Our Service</h2>
            <hr className="mx-auto" />
          </Col>
      
        <Row xs={1} md={2} lg={3}>
          <Col >
            <Card className="mb-4">
              <Card.Img
                variant="top"
                style={{maxHeight:'400px',objectFit:'cover'}}
                src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGVsaXZlcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              />
              <Card.Body>
                <Card.Title>Food Delivery</Card.Title>
                <Card.Text>
                Food delivery is a service that allows customers to order food from a restaurant or food establishment and have it delivered to their location. 
                </Card.Text>
                <Button variant="outline-danger">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col >
            <Card className="mb-4">
              <Card.Img
              style={{maxHeight:'400px',objectFit:'cover'}}
                variant="top"
                src="https://images.unsplash.com/photo-1625944527261-06c90f1901e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fENhdGVyaW5nJTIwU2VydmljZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              />
              <Card.Body>
                <Card.Title>Catering Services</Card.Title>
                <Card.Text>
                Catering services typically include menu planning, food preparation and presentation, delivery and set-up, and cleanup after the event. The catering company may also provide additional services such as bartending, rental of equipment and furniture, and event planning and coordination.
                </Card.Text>
                <Button variant="outline-danger">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col >
            <Card className="mb-4">
              <Card.Img
              style={{maxHeight:'400px',objectFit:'cover'}}
                variant="top"
                src="https://images.unsplash.com/photo-1578425570266-f54ed5c862ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fFByaXZhdGUlMjBDaGVmfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              />
              <Card.Body>
                <Card.Title>Private Chef</Card.Title>
                <Card.Text>
                Private chefs may work full-time or part-time, depending on the needs of the client. They may also be responsible for planning menus that meet the dietary restrictions or preferences of the client, such as gluten-free, vegan, or kosher meals.
                </Card.Text>
                <Button variant="outline-danger">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServiceSection;
