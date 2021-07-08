import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { useTrail, animated as a } from "react-spring";
import './banner.scss';

import SpringScale from '../../_animations/SpringScale';

const Banner = ({content, lang}) => {
  return (
    <main className="banner">
      <SpringScale scale={{start: 2.5, end: 1}} duration={3500} blur={{start: '15px', end: '0'}}>
        <div className="banner-image"></div>
      </SpringScale>
      <div className="banner-text">
        <SpringScale>
          <h1>{content.text.headline[lang]}</h1>
          <h3>{content.text.sub_headline[lang]}</h3>
        </SpringScale>
      </div>
    </main>
  );
};

export default withRouter(Banner);
