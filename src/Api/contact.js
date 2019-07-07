import axios from 'axios';

const sendEmail = (form_data, emailResponse) => {
  axios.post('https://still-spire-83012.herokuapp.com/api/email/portfolio-contact', form_data)
  .then(response => {
    return response.data.accepted && emailResponse('success');
  })
  .catch(err => {
    return err && emailResponse('error');
  });
};

export {
  sendEmail
}
