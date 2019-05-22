import React from 'react';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import './project-preview.scss';


const ProjectPreview = ({content, previewOpen, selectedProject}) => {
  console.log(content);
  const {year, name} = content;
  return (
     <main className={classnames('project-preview', {'preview-open': previewOpen})}>
      <section>
      <h1>{year}</h1>
      <h1>{name}</h1>
      </section>
    </main>
  );
};

export default withRouter(ProjectPreview);
