import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './about.scss';
import _about from '../../constants/data/about.json';
import SpringSlide from "../_animations/SpringSlide";
import GsapStagger from "../_animations/GsapStagger";

const About = ({lang}) => {
  const {about, skills} = _about;
  return (
    <main className="about main-section">
      <div className='about-bg section-bg'/>
      <div className="inner-wrapper">
        <SpringSlide componentStyle={false} reAnimate={true} trackScreen={true} animateMargin={"20% 0px -20% 0px"}>
        <section className='about-me'>
          <h1>{about.title[lang]}</h1>
          {
            about.paragraphs.map((item, i) => <p key={i}>{item[lang]}</p>)
          }
        </section>
        </SpringSlide>
        <SpringSlide componentStyle={false} reAnimate={true}  trackScreen={true} direction={"left"} animateMargin={"0% 0px -30% 0px"}>
        <section className='skills'>
          <h1>{skills.title[lang]}</h1>
          {
            skills.paragraphs.map((item, i) => <p key={i}>{item[lang]}</p>)
          }
          <div className='skills-list'>
            <GsapStagger items={skills.technologies} />
          </div>
        </section>
        </SpringSlide>
      </div>
    </main>
  );
};

export default withRouter(About);
