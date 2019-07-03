import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { footer } from '../../constants/data/global.js';
import './footer.scss'

const Footer = ({lang}) => {
  const current_year = new Date().getFullYear();
  return (
    <main className="footer">
      <section className="social-icons">
        <a className="social-icon resume" href=""><i className="far fa-file" /></a>
        <a className="social-icon github" href=""><i className="fab fa-github-alt" /></a>
        <a className="social-icon linkedin" href=""><i className="fab fa-linkedin" /></a>
      </section>
      <section className="copyright">
        <p>{footer.copyright} &#169; {current_year}</p>
      </section>
    </main>
  );
};

export default withRouter(Footer);
