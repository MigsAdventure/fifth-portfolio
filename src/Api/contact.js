import axios from 'axios';

const sendEmail = (form_data) => {
  axios.post('https://https://still-spire-83012.herokuapp.com/api/email/portfolio-contact', form_data)
  .then(data => {
    console.log('axios data: ', data);
  })
  .catch(err => err);
};

export {
  sendEmail
}
