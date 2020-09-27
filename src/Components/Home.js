import React, { Component } from "react";
import Slider from "./Slider";
import { Jumbotron, Container } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <div>
        <Slider fluid></Slider>
        <Jumbotron>
          <Container>
            <p>
              Stare at ceiling lay on arms while you're using the keyboard so
              this human feeds me, i should be a god wack the mini furry mouse
              but all of a sudden cat goes crazy get suspicious of own shadow
              then go play with toilette paper. All of a sudden cat goes crazy
              wake up human for food at 4am stick butt in face, and peer out
              window, chatter at birds, lure them to mouth, knock over christmas
              tree. Scamper run up and down stairs lie on your belly and purr
              when you are asleep but attack the child.
            </p>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;
