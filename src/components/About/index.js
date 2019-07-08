import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './about.scss';

import ScrollAnimation from 'react-animate-on-scroll';
import _about from '../../constants/data/about.json';

const About = ({lang}) => {
  const { about, skills } = _about;
  return(
    <main className="about main-section">
      <section className='about-me'>
        <h1>{about.title[lang]}</h1>
        {
          about.paragraphs.map((item, i) => <p key={i}>{item[lang]}</p>)
        }
      </section>
      <section className='skills'>
        <h1>{skills.title[lang]}</h1>
        {
          skills.paragraphs.map((item, i) => <p key={i}>{item[lang]}</p>)
        }
        <div className='skills-list'>
            {
              skills.technologies.map((item, i) =>
                <ScrollAnimation offset={0} key={i} animateIn="slideIn" animateOnce={true}>
                  <div>{item}</div>
                </ScrollAnimation>
                  )
            }
        </div>
      </section>
    </main>
  );
};

export default withRouter(About);
