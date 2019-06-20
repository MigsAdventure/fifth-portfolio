import React from 'react';
import {withRouter} from 'react-router-dom';
import './project-card.scss';


const ProjectCard = ({content, selectedProjectCB}) => {
  const importImage = (path) => {
    try {
      return require('../../../assets/images/global/' + path);
    } catch (err) {
      return require( '../../../assets/images/global/' + `aion-site-card-logo.jpeg`);
    }
  };
  const {name, url, type, year, tech, api, id} = content;
  return (
    <main
      key={content.number}
      className="project-card"
      onClick={selectedProjectCB.bind(this, content)}
      style={{backgroundImage: `url(${importImage( `${id}-site-card-logo.jpeg`)})`}}
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
