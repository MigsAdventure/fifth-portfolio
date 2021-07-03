import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './about.scss';
import _about from '../../constants/data/about.json';
import {generateRandomColor} from  "../../utils/general";

const About = ({lang}) => {
  const {about, skills} = _about;
  return (
    <main className="about main-section">
      <div className='about-bg section-bg'/>
      <div className="inner-wrapper">
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
                  <div key={i} className={"item"} style={{backgroundColor: generateRandomColor()}}>{item}</div>
              )
            }
          </div>
        </section>
      </div>
    </main>
  );
};

export default withRouter(About);
