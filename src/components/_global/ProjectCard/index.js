import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './project-card.scss';


const ProjectCard = ({content}) => {
  const {name, url, type, year, tech, api} = content;
  console.log(content);
  return (
    <main className="project-card">
      <section>
        <h1>{name}</h1>
        <div className="info">
          <p>{type}</p>
          <p>{year}</p>
          <p>{tech}</p>
          <p>{api}</p>
        </div>
      </section>
    </main>
  );
};

export default withRouter(ProjectCard);
