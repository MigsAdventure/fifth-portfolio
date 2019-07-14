import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import ProjectCard from "./ProjectCard";
import _projects from '../../constants/data/projects.json';
import ProjectsFilter from "./ProjectsFilter";
import './projects.scss';
import ProjectPreview from "./ProjectPreview";
import { isMobile } from "../../utils/screen";
import classnames from 'classnames';
import { scrollTo } from "../../utils/dom";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_filter: '2019',
      preview_open: -1,
      selected_project: null,
      mobile_view: isMobile()
    };
    this.renderProjects = this.renderProjects.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.checkIfMobile = this.checkIfMobile.bind(this);
  }
  
  checkIfMobile() {
    this.setState({
      mobile_view: isMobile()
    });
  }
  
  componentDidMount() {
    window.addEventListener('resize', this.checkIfMobile)
    console.log('mounted');
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.checkIfMobile)
  }
  
  renderProjects() {
    const {current_filter, preview_open, selected_project, mobile_view} = this.state;
    const {lang} = this.props;
    const selected_project_id = (selected_project && selected_project.id && preview_open) || -1;
    let renderProjects = _projects.map((item, i) => {
      let renderPreview = window.innerWidth <= 768 && selected_project_id && (
        <ProjectPreview lang={lang} previewOpen={preview_open} content={{...item, 'number': i}} isMobile={mobile_view} />);
      if (item.year.includes(current_filter) || current_filter === item.type) {
        return ([<ProjectCard content={{...item, 'number': i}} previewOpen={preview_open} selectedProjectCB={this.handleSelectedProject}/>,
          renderPreview
        ]);
      } else if (current_filter === 'all') {
        return ([<ProjectCard content={{...item, 'number': i}} previewOpen={preview_open} selectedProjectCB={this.handleSelectedProject}/>,
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
      preview_open: -1,
    });
  };
  
  handleSelectedProject = (element, new_selected_project) => {
   const {preview_open, mobile_view} = this.state;
   const currElement = element.target;
    
    this.setState({
      selected_project: new_selected_project,
      preview_open: preview_open === new_selected_project.id ? -1 : new_selected_project.id
    },function() {
      this.state.selected_project && preview_open === -1 && !mobile_view &&
        setTimeout(function() {
          currElement && currElement.scrollIntoView({block: "end"});
        }, 300);
    });
    
    if (!this.state.mobile_view) {
      const containerOffSet = document.getElementById('projects').offsetTop;
      scrollTo(document.body, containerOffSet, 50);
    }
  };
  
  render() {
    const {current_filter, selected_project, preview_open, mobile_view} = this.state;
    const { lang } = this.props;
    return (
      <main id='projects' className={classnames('projects main-section', {'mobile': mobile_view})}>
        <div className={classnames('projects-bg', 'section-bg', {'mobile': mobile_view, 'desktop': preview_open !== -1})} />
        <section className='project-preview-desktop-wrapper'>
          {
            !mobile_view && selected_project &&
            <ProjectPreview lang={lang} previewOpen={preview_open} content={selected_project} />
          }
        </section>
        {
          (mobile_view || (preview_open === -1)) &&
          <section className="header">
            <h1 className="title">Projects</h1>
          </section>
        }
        <section className={classnames('projects-wrapper', {'scroll-projects': preview_open !== -1 && !mobile_view})}>
          {
            (mobile_view || (preview_open === -1)) &&
            <ProjectsFilter currentFilter={current_filter} changeFilterCB={this.handleFilterChange}/>
          }
          <div className="project-cards">
            {this.renderProjects()}
          </div>
        </section>
      </main>
    );
  }
}

export default withRouter(Projects);