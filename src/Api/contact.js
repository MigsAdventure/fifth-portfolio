import axios from 'axios';

const sendEmail = (form_data, emailResponse) => {
  axios.post('https://still-spire-83012.herokuapp.com/api/email/portfolio-contact', form_data)
  .then(response => {
    return response.data.accepted && emailResponse({success: true, name: form_data.name});
  })
  .catch(err => {
    return err && emailResponse({success: false, name: form_data.name});
  });
};

export {
  sendEmail
}
