import React from 'react';
import {withRouter} from 'react-router-dom';
import './project-card.scss';


const ProjectCard = ({content, selectedProjectCB}) => {
  console.log(content);
  const {name, url, type, year, tech, api, id} = content;
  return (
    <main
      key={name}
      className="project-card"
      onClick={selectedProjectCB.bind(this, content)}
    >
      <section>
        <h1>{name}</h1>
        <div className="info">
          <p>{type}</p>
          <p>{year}</p>
          <p>{tech}</p>
          <p>{api}</p>
          <p>{id}</p>
        </div>
      </section>
    </main>
  );
};

export default withRouter(ProjectCard);
