import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

class Header extends Component {
    render() {
        return(
            <div>
                <Jumbotron fluid>
                <Container>
                    <h1>React Bootstrap Tutorial</h1>
                    <p>
                    This is a modified jumbotron that occupies the entire horizontal space of
                    its parent.
                    </p>
                </Container>
                </Jumbotron>

            </div>


        );
    }
}

export default Header;