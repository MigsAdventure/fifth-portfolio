import React from 'react';
import './banner.scss';
import SpringScale from '../../_animations/SpringScale';
import { useStaticQuery, graphql } from "gatsby";

export default function Banner({context}) {
  return (
    <main className="banner">
      <SpringScale finalTransition={{filter: 'blur(0)'}}  updateImage={true} changeElOnEnd={true}  classNames={'banner-image loaded-image'} scale={{start: 2.5, end: 1}} duration={3500} blur={{start: '15px', end: '0'}}>
        <div className="banner-image"></div>
      </SpringScale>
      <div className="banner-text">
        <SpringScale>
          <h1>{context.Title}</h1>
          <h1>{context.Subtitle}</h1>
        </SpringScale>
      </div>
    </main>
  );
}
