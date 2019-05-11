import React from 'react';
import { withRouter } from 'react-router-dom';
import './project-card.scss';


const ProjectCard = ({content}) => {
  const {name, url, type, year, tech, api} = content;
  console.log(content);
  return (
    <div className="project-card">
      <div>
        <h1>{name}</h1>
        <div className="info">
          <p>{type}</p>
          <p>{year}</p>
          <p>{tech}</p>
          <p>{api}</p>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ProjectCard);
