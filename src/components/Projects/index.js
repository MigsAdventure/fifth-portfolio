import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ProjectCard from "../_global/ProjectCard";


const Projects = ({lang}) => {
  return (
    <main className="projects">
      <section>
      <h1>Projects page</h1>
        <ProjectCard lang={lang}/>
      </section>
    </main>
  );
};

export default withRouter(Projects);
