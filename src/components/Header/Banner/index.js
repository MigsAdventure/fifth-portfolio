import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './banner.scss';

const Banner = (props) => {
  const { content } = props;
  return (
    <main className="banner">
        <div className="banner-image"></div>
        <div className="banner-text">
          <h1>{content.text.headline.en}</h1>
          <h3>{content.text.sub_headline.en}</h3>
        </div>
    </main>
  );
};

export default withRouter(Banner);
