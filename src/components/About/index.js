import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './about.scss';

const About = () => {
  return(
    <main className="about main-section">
      <section className='header'>
        <h1>About</h1>
      </section>
      <section className='about-me'>
        <h2>About Me</h2>
        <p>
          I grew up fixing computers in Long Beach, CA. I'm now living in Irvine, CA and working as a Web Engineer at
          the video game company NCSOFT. The work I do include building web applications, internal tools, npm packages,
          and bug fixing.
          Most of my free time is spent in coffee shops improving my skills in web development and recently mobile app development.
        </p>
        <p>
          When I'm not coding, you'll find me hiking, exploring a new city, at a brewery, gaming, biking or
          skating.
        </p>
      </section>
      <section className='skills'>
        <h2>My Skills</h2>
         <p>I've worked with many different technologies over the last few years. Below is a list of technologies
           I've used over the years.
         </p>
        <ul className='tech-list'>
          <li>JS</li>
          <li>Node</li>
          <li>CSS3</li>
        </ul>
      </section>
    </main>
  );
};

export default withRouter(About);
