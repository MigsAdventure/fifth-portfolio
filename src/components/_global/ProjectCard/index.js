import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './project-card.scss';


const ProjectCard = ({lang}) => {
  return (
    <main className="project-card">
      <section>
        this is a card
      </section>
    </main>
  );
};

export default withRouter(ProjectCard);
