import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './contact.scss';
import {sendEmail} from "../../Api/contact";
import classnames from 'classnames';
import Loader from "../_global/Loader";
import PopupBox from "../_global/PopupBox";
import SpringScale from "../_animations/SpringScale";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      form_valid: false,
      is_loading: false,
      form_response: {},
      show_popup_box: false
    };
    this.submitForm = this.submitForm.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validateInputs = this.validateInputs.bind(this);
    this.closePopupBox = this.closePopupBox.bind(this);
  }
  
  submitForm(e) {
    e.preventDefault();
    const formElement = e.target;
    const {name, email, message, form_valid} = this.state;
    const data = {
      name,
      email,
      message
    };
    const emailStatus = (myData) => {
      return this.setState({
          form_response: myData,
          is_loading: false,
          show_popup_box: true
        }, () => {
          if (this.state.form_response.success) {
            this.setState({
              name: '',
              email: '',
              message: '',
              form_valid: false,
            });
            formElement.reset();
          }
        }
      )
    };
    if (form_valid) {
      this.setState({is_loading: true});
      sendEmail(data, emailStatus);
    }
  }
  
  validateEmail(email) {
    const regExp = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return regExp.test(email);
  }
  
  validateInputs(e) {
    const currentInput = e.target;
    this.setState({
      [currentInput.name]: currentInput.value,
    }, () => {
      this.setState({
        form_valid: this.validateForm(),
      })
    });
  }
  
  validateForm() {
    const {name, email, message} = this.state;
    return !!(name !== "" && email !== "" && message !== "" && this.validateEmail(email));
  }
  
  closePopupBox() {
    this.setState({
      show_popup_box: false
    });
  }
  
  render() {
    const {name, email, message, form_valid, is_loading, form_response, show_popup_box} = this.state;
    return (
      <main className="contact main-section">
        <div className="contact-bg section-bg"/>
        <PopupBox
          closeCB={this.closePopupBox}
          isVisible={show_popup_box}
          text={form_response && form_response.success ? `Thanks ${form_response.name}, your email was sent!` : `Sorry ${form_response.name}, There was an error. Please try again!`}
        />
        <section className="contact-header">
          <div>
            <h1>
              Contact Me
            </h1>
          </div>
        </section>
        <SpringScale trackScreen={true} reAnimate={true} duration={500}>
        <section className="contact-form-wrapper">
          <Loader isVisible={is_loading}/>
          <form onChange={this.validateInputs} onSubmit={this.submitForm}>
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
        </SpringScale>
      </main>
    );
  }
}

export default withRouter(Contact);
