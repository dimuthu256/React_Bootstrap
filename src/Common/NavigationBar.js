import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import { Nav, Navbar, Form, Button, FormControl } from 'react-bootstrap';
import Header from '../assets/mac_logo_1.jpg';
import Image from 'react-bootstrap/Image';
import classes from './NavigationBar.css';

class Navigation extends Component {
    render(){
        return(
            <Navbar bg="dark" variant="dark">
            {/* <Navbar.Brand href="/"><img src={Header} alt="react-bootstrap" height="30"></img></Navbar.Brand> */}
            <Navbar.Brand href="/"><Image src={Header} roundedCircle height="32"/></Navbar.Brand>
            
            <Nav className={[classes.nav, "mr-auto"].join(' ')}>
                <Nav.Link ><Link to="/">Home</Link></Nav.Link>
                <Nav.Link ><Link to="/about">About</Link></Nav.Link>
                <Nav.Link ><Link to="/contact">Contact</Link></Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar> 
        );
    }
}

export default Navigation;