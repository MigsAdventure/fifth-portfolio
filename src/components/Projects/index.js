import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ProjectCard from "../_global/ProjectCard";
import _projects from '../../constants/data/projects.json';


const Projects = ({lang}) => {
  const renderProjects = (
    _projects.map(item => {
      return <ProjectCard content={item} />
    })
  );
  return (
    <main className="projects">
      <section>
      <h1>Projects page</h1>
        {renderProjects}
      </section>
    </main>
  );
};

export default withRouter(Projects);
