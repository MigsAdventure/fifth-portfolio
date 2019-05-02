import React from 'react';
import { withRouter } from 'react-router-dom';
import ProjectCard from "../_global/ProjectCard";
import _projects from '../../constants/data/projects.json';
import './projects.scss';


const Projects = ({lang}) => {
  const renderProjects = (
    _projects.map(item => {
      return <ProjectCard content={item} />
    })
  );
  return (
    <main className="projects">
      <section className="header">
        <h1 className="title">Projects</h1>
      </section>
      <section className="projects-wrapper">
        {renderProjects}
      </section>
    </main>
  );
};

export default withRouter(Projects);
