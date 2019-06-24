import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import ProjectCard from "./ProjectCard";
import _projects from '../../constants/data/projects.json';
import ProjectsFilter from "./ProjectsFilter";
import './projects.scss';
import ProjectPreview from "./ProjectPreview";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_filter: '2019',
      preview_open: -1,
      selected_project: null
    };
    this.renderProjects = this.renderProjects.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleSelectedProject = this.handleSelectedProject.bind(this);
  }
  
  renderProjects() {
    const {current_filter, preview_open} = this.state;
    let renderProjects = _projects.map((item, i) => {
      let renderPreview = window.innerWidth <= 768 && (
        <ProjectPreview previewOpen={preview_open} content={{...item, 'number': i}}/>);
      if (item.year.includes(current_filter) || current_filter === item.type) {
        return ([<ProjectCard content={{...item, 'number': i}} selectedProjectCB={this.handleSelectedProject}/>,
          renderPreview
        ]);
      } else if (current_filter === 'all') {
        return ([<ProjectCard content={{...item, 'number': i}} selectedProjectCB={this.handleSelectedProject}/>,
          renderPreview
        ]);
      }
      return null;
    });
      return renderProjects
  }
  
  handleFilterChange = (new_filter) => {
    this.setState({
      current_filter: new_filter,
      preview_open: false,
    });
  };
  
  handleSelectedProject = (new_selected_project) => {
    this.setState({
      selected_project: new_selected_project,
      preview_open: this.state.preview_open === new_selected_project.id ? -1 : new_selected_project.id
    });
  };
  
  render() {
    const {current_filter, selected_project, preview_open} = this.state;
    return (
      <main className="about">
        <section className="header">
          <h1 className="title">Projects</h1>
        </section>
        <section className="projects-wrapper">
          <ProjectsFilter currentFilter={current_filter} changeFilterCB={this.handleFilterChange}/>
          {this.renderProjects()}
        </section>
      </main>
    );
  }
}

export default withRouter(Projects);