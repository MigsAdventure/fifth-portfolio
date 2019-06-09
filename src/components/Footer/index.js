import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { footer } from '../../constants/data/global.js';
import './footer.scss'

const Footer = ({lang}) => {
  const current_year = new Date().getFullYear();
  return (
    <main className="footer">
      <section>
        <p>{footer.copyright} &#169; {current_year}</p>
      </section>
    </main>
  );
};

export default withRouter(Footer);
