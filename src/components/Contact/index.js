import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './contact.scss';
import {sendEmail} from "../../Api/contact";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      form_valid: false,
    };
    this.submitForm = this.submitForm.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }
  
  submitForm(e) {
    e.preventDefault();
    const currentInput = e.target;
    this.setState({
      [currentInput.name]: currentInput.value,
    }, () => {
      this.setState({
        form_valid: this.validateForm(),
      })
    });
  }
  
  validateEmail(email) {
    const regExp = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return regExp.test(email);
  }
  
  validateForm() {
    const {name, email, message} = this.state;
    return !!(name !== "" && email !== "" && message !== "" && this.validateEmail(email));
  }
  
  render() {
    const {name, email, message, form_valid} = this.state;
    return (
      <main className="contact">
        <section className="contact-header">
          <div>
            <h1>
              Contact Me
            </h1>
          </div>
        </section>
        <section className="contact-form-wrapper">
          <form onChange={this.submitForm}>
            <div className="input-wrapper">
              <label htmlFor="name">Name</label>
              <input name="name" className="form-input name" type="text" required/>
            </div>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input name="email" className="form-input email" type="email" required/>
            </div>
            <div className="input-wrapper">
              <label htmlFor="message">Message</label>
              <textarea name="message" className="form-input message" type="text" required/>
            </div>
            <button className='submit-btn' disabled={!form_valid} type="submit">Send Message!</button>
          </form>
        </section>
      </main>
    );
  }
}

export default withRouter(Contact);