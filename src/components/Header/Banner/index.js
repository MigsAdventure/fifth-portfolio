import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './banner.scss';

const Banner = ({content, lang}) => {
  return (
    <main className="banner">
        <div className="banner-image"></div>
        <div className="banner-text">
          <h1>{content.text.headline[lang]}</h1>
          <h3>{content.text.sub_headline[lang]}</h3>
        </div>
    </main>
  );
};

export default withRouter(Banner);
