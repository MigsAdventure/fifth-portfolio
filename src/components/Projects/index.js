import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import ProjectCard from "./ProjectCard";
import _projects from '../../constants/data/projects.json';
import ProjectsFilter from "./ProjectsFilter";
import './projects.scss';
import { projects_filter } from '../../constants/data/global';
import classnames from 'classnames';
import ProjectPreview from "./ProjectPreview";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_filter: '2019',
    };
    this.renderProjects = this.renderProjects.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }
  
  renderProjects() {
    const current_filter = this.state.current_filter;
    console.log('render');
    return _projects.map(item => {
      console.log('item: ', item.year);
      console.log('current: ', current_filter);
      return current_filter == (item.year) && <ProjectCard content={item}/>
    })
  }
  
   handleFilterChange = (new_filter) => {
    this.setState({
      current_filter: new_filter
    });
  };
  
  render() {
    const { current_filter } = this.state;
    return (
      <main className="projects">
        <section className='project-preview-wrapper'>
          <ProjectPreview />
        </section>
        <section className="header">
          <h1 className="title">Projects</h1>
        </section>
        <section className="projects-wrapper">
          <ProjectsFilter currentFilter={current_filter} changeFilterCB={this.handleFilterChange} />
          {this.renderProjects()}
        </section>
      </main>
    );
  }
}

export default withRouter(Projects);
