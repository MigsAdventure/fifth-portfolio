import React from 'react';
import {withRouter} from 'react-router-dom';
import './project-card.scss';
import classnames from 'classnames';

const ProjectCard = ({content, selectedProjectCB, previewOpen}) => {
  const importImage = (path) => {
    try {
      return require('../../../assets/images/global/' + path);
    } catch (err) {
      return require( '../../../assets/images/global/' + `aion-site-card-logo.jpeg`);
    }
  };
  const {name, url, type, year, tech, api, id, number} = content;
  const project_years = year.length > 1 ? year[year.length - 1] + '-' + year[0] : year;
  return (
    <main
      key={content.number}
      onClick={selectedProjectCB.bind(this, content)}
      className={classnames('project-card',  {'active': previewOpen === id}, {'inactive': previewOpen !== id && previewOpen !== -1})}
      style={{backgroundImage: `url(${importImage( `${id}-site-card-logo.jpeg`)})`}}
    >
      <section>
        <div className="title-wrapper">
          <h1>{name}</h1>
        </div>
        <div className="info">
          <p className="type">{type}</p>
          <p className="year">{project_years}</p>
        </div>
      </section>
    </main>
  );
};

export default withRouter(ProjectCard);
