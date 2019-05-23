import React from 'react';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import './project-preview.scss';

const ProjectPreview = ({content, previewOpen}) => {
  console.log(content);
  console.log('previewOPen: ', previewOpen);
  const {year, name, id} = content;
  return (
     <main className={classnames('project-preview', {'preview-open': previewOpen === id})}>
      <section>
      <h1>{year}</h1>
      <h1>{name}</h1>
      </section>
    </main>
  );
};

export default withRouter(ProjectPreview);
