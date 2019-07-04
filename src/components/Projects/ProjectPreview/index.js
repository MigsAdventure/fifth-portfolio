import React from 'react';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import './project-preview.scss';

const ProjectPreview = ({content, previewOpen, isMobile}) => {
  const {year, name, id, url, tech} = content;
  const screenSize = isMobile ? 'desktop' : 'mobile';
  const importImage = (path) => {
    try {
      return require('../../../assets/images/' + path);
    } catch (err) {
      return require( '../../../assets/images/global/' + `aion-site-card-logo.jpeg`);
    }
  };
  return (
     <main
       className={classnames('project-preview', {'preview-open': previewOpen === id})}
     >
       <a className='project-preview-image' href={url}>
         <img src={importImage(`${screenSize}/screenshots/${id}-site.jpeg`)} alt={content.name}/>
       </a>
      <section className='project-info'>
          <ul className="responsibilites">
            {/*<li className="type">{type}</li>*/}
            {/*<li className="year">{project_years}</li>*/}
          </ul>
          <div className="tech">
            <p>{tech}</p>
          </div>
        <div className="cta">
          <a href={url}>Go To Site</a>
        </div>
      </section>
    </main>
  );
};

export default withRouter(ProjectPreview);
