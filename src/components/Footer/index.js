import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { footer } from '../../constants/data/global.js';
import './footer.scss'

const Footer = ({lang}) => {
  const current_year = new Date().getFullYear();
  const { copyright, social } = footer;
  return (
    <main className="footer">
      <section className="social-icons">
        <a className="social-icon resume" target="_blank" rel="noopener noreferrer" href={require(`../../${social.resume}`)}><i className="far fa-file" /></a>
        <a className="social-icon github" target="_blank" rel="noopener noreferrer" href={social.github}><i className="fab fa-github-square"></i></a>
        <a className="social-icon linkedin" target="_blank" rel="noopener noreferrer" href={social.linkedin}><i className="fab fa-linkedin" /></a>
      </section>
      <section className="copyright">
        <p>{copyright} &#169; {current_year}</p>
      </section>
    </main>
  );
};

export default withRouter(Footer);
