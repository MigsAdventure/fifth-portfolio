import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { useTrail, animated as a } from "react-spring";
import './banner.scss';

import FadeInScale from '../../_animations/FadeInScale';

const Banner = ({content, lang}) => {
  return (
    <main className="banner">
      <FadeInScale scale={{start: 2.5, end: 1}} duration={3500}>
        <div className="banner-image"></div>
      </FadeInScale>
      <div className="banner-text">
        <FadeInScale>
          <h1>{content.text.headline[lang]}</h1>
          <h3>{content.text.sub_headline[lang]}</h3>
        </FadeInScale>
      </div>
    </main>
  );
};

export default withRouter(Banner);
