import React from 'react';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import './project-preview.scss';

const ProjectPreview = ({content, previewOpen, isMobile}) => {
  const {year, name, id, url} = content;
  const screenSize = isMobile ? 'desktop' : 'mobile';
  return (
     <main
       className={classnames('project-preview', {'preview-open': previewOpen === id})}
     >
       <a className='project-preview-image' href={url}>
         <img src={require(`../../../assets/images/${screenSize}/${id}-site.jpeg`)} alt={content.name}/>
       </a>
      <section className='project-info'>
      <h1>{year}</h1>
      <h1>{name}</h1>
      </section>
    </main>
  );
};

export default withRouter(ProjectPreview);
