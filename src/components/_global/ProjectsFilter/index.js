import React from 'react';
import { withRouter } from 'react-router-dom';
import './projects-filter.scss';


const ProjectsFilter = ({content}) => {
  const {name, url, type, year, tech, api} = content;
  console.log(content);
  return (
    <main className="project-card">
      <section>
      
      </section>
    </main>
  );
};

export default withRouter(ProjectsFilter);
