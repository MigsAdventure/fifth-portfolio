import React from 'react';
import './project-card.scss';
import classnames from 'classnames';

const ProjectCard = ({content, selectedProjectCB, previewOpen}) => {
  const importImage = (path) => {
    try {
      console.log("path: ", path)
      return '/static/' + path;
    } catch (err) {
      console.log("err: ", err)
      return  '/static/' + `aion-site-card-logo.jpeg`;
    }
  };
  const {name, type, year, id} = content;
  const project_years = year.length > 1 ? year[year.length - 1] + '-' + year[0] : year;
  console.log("id: ", id)
  return (
    <main
      key={content.number}
      id={content.id}
      onClick={(e) => selectedProjectCB(e, content)}
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

export default ProjectCard;
