import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Nav/LeftNav';
import RightNav from '../Nav/RightNav';

const Main = () => {
    return (
        <Container>
            <Header />
            <div>
                <Row className="justify-content-md-center">
                    <Col md="3">
                      <LeftNav></LeftNav>
                    </Col>
                    <Col md="6">
                        Main Content comming soon ....
                    </Col>
                    <Col md="3">
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </div>
            {/* <Outlet/> */}
            <Footer />
        </Container>
    );
};

export default Main;