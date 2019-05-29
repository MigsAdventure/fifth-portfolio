import React from 'react';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import './project-preview.scss';
import {CDN_URL} from "../../../constants/config";

const ProjectPreview = ({content, previewOpen}) => {
  console.log(content);
  console.log('previewOPen: ', previewOpen);
  const {year, name, id} = content;
  return (
     <main
       className={classnames('project-preview', {'preview-open': previewOpen === id})}
       style={{backgroundImage: `url(${CDN_URL}desktop/${id}-site.jpeg)`}}
     >
      <section>
      <h1>{year}</h1>
      <h1>{name}</h1>
      </section>
    </main>
  );
};

export default withRouter(ProjectPreview);
