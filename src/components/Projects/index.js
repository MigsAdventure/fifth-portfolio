import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import ProjectCard from "./ProjectCard";
import _projects from '../../constants/data/projects.json';
import ProjectsFilter from "./ProjectsFilter";
import './projects.scss';
import {projects_filter} from '../../constants/data/global';
import classnames from 'classnames';
import ProjectPreview from "./ProjectPreview";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_filter: '2019',
      preview_open: false,
      selected_project: null
    };
    this.renderProjects = this.renderProjects.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleSelectedProject = this.handleSelectedProject.bind(this);
  }
  
  renderProjects() {
    const current_filter = this.state.current_filter;
    if (current_filter === 'all') {
      return _projects.map((item, i) => <ProjectCard content={{...item, 'id': i}} selectedProjectCB={this.handleSelectedProject} />);
    }
    return _projects.map((item, i) => (current_filter === item.year || current_filter === item.type) &&
      <ProjectCard content={{...item, 'id': i}} selectedProjectCB={this.handleSelectedProject} />);
  }
  
  handleFilterChange = (new_filter) => {
    this.setState({
      current_filter: new_filter
    });
  };
  
  handleSelectedProject = (new_selected_project) => {
    this.setState({
      selected_project: new_selected_project
    });
  };
  
  render() {
    const {current_filter, selected_project, preview_open} = this.state;
    return (
      <main className="projects">
        <section className='project-preview-wrapper'>
          {
            selected_project && <ProjectPreview previewOpen={preview_open} content={selected_project}/>
          }
        </section>
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