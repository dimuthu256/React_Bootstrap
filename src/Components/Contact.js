import React, { Component } from "react";
import { Form, Button, Col} from "react-bootstrap";
import classes from "./Contact.css";
import { FormErrors } from "./FormErrors";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      formErrors: { email: "", password: "" },
      emailValid: false,
      passwordValid: false,
      formValid: false,
    };
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " is invalid";
        break;
      case "password":
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? "" : " is too short";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid,
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.passwordValid,
    });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }

  render() {
    return (
      <div>
        <h2>Contact Us</h2>
        <p>
          Stare at ceiling lay on arms while you're using the keyboard so this
          human feeds me, i should be a god wack the mini furry mouse but all of
          a sudden cat goes crazy get suspicious of own shadow then go play with
          toilette paper. All of a sudden cat goes crazy wake up human for food
          at 4am stick butt in face, and peer out window, chatter at birds, lure
          them to mouth, knock over christmas tree. Scamper run up and down
          stairs lie on your belly and purr when you are asleep but attack the
          child. Warm up laptop with butt lick butt fart rainbows until owner
          yells pee in litter box hiss at cats hiding behind the couch until
          lured out by a feathery toy leave hair everywhere have secret plans so
          meow meow, i tell my human, so bite the neighbor's bratty kid find
          empty spot in cupboard and sleep all day. Need to chase tail wake up
          human for food at 4am. Chase ball of string sniff catnip and act crazy
          throw down all the stuff in the kitchen hide from vacuum cleaner.
        </p>

        <span className="panel panel-default">
            <FormErrors formErrors={this.state.formErrors} />
        </span>

        <div className={classes.ContactForm}>
          <Form className={classes.Form}>
            <Form.Row>
              <Form.Group
                as={Col}
                controlId="formGridEmail"
                className={`${this.errorClass(this.state.formErrors.email)}`}
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  required
                  value={this.state.email}
                  onChange={this.handleUserInput}
                />
              </Form.Group>

              <Form.Group
                as={Col}
                controlId="formGridPassword"
                className={`${this.errorClass(this.state.formErrors.password)}`}
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                  value={this.state.password}
                  onChange={this.handleUserInput}
                />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              disabled={!this.state.formValid}
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Contact;
