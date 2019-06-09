import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './contact.scss';
import { sendEmail } from "../../Api/contact";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
    this.submitForm = this.submitForm.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }
  
  submitForm(e) {
    e.preventDefault();
    const currentInput = e.target;
    this.setState({
      [currentInput.name] : currentInput.value,
    }, () => {
      this.setState({
        is_valid: this.validateForm()
      })
    });
    
  }
  
  validateForm() {
    return !!(this.state.name !== "" && this.state.email !=="" && this.state.message !=="");
  }

  render() {
    const {name, email, message, is_valid} = this.state;
    console.log('state: ', this.state);
    console.log('this.validateForm(): ', this.validateForm());
  
    return (
      <main className="contact">
        <section className="contact-form-wrapper">
          <form onChange={this.submitForm}>
            <label htmlFor="name">Name</label>
            <input name="name" className="form-input name" type="text" required/>
            <label htmlFor="email">Email</label>
            <input name="email" className="form-input email" type="email" required/>
            <label htmlFor="message">Message</label>
            <input name="message" className="form-input message" type="text" required/>
            <button disabled={!is_valid} type="submit">Send Message!</button>
          </form>
        </section>
      </main>
    );
  }
}

export default withRouter(Contact);