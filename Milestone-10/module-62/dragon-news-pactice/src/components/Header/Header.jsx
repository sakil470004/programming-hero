import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';
import { Button,  Navbar } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
const Header = () => {
    return (
        <div>
            <div className='text-center'>
                <img src={logo} />
                <p><small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore animi sdfsfsfsdsdfsdf</small></p>
                <p>{moment().format("dddd, MMMM Do YYYY")}</p>
            </div>
            <div className='d-flex '>
                <Button variant='danger'>
                    Latest
                </Button>
                <Marquee className='text-danger'>
                    I can be a React component, multiple React components, or just some text. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, dignissimos....
                </Marquee>
            </div>
            <Navbar bg="light" expand="lg">

                <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Button variant='danger'>
                        Profile
                    </Button>
                    <Button variant='secondary'>
                        Login
                    </Button>
                </Navbar.Collapse>

            </Navbar>
        </div>
    );
};

export default Header;