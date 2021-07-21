import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ProjectCard from "./ProjectCard";
import _projects from '../../constants/data/projects.json';
import ProjectsFilter from "./ProjectsFilter";
import './projects.scss';
import ProjectPreview from "./ProjectPreview";
import {isMobile} from "../../utils/screen";
import classnames from 'classnames';
import {scrollTo} from "../../utils/dom";
import { StaticQuery, graphql } from "gatsby";


class MyProjects extends Component {
  constructor(props) {
    console.log("props: ", props)
    super(props);
    this.state = {
      current_filter: '2021',
      preview_open: -1,
      selected_project_data: null,
      selected_project: null,
      active_id: '',
      mobile_view: isMobile(),
      scrollLeftPos: 0,
    };
    this.scrollContainerRef = React.createRef();
    this.renderProjects = this.renderProjects.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.checkIfMobile = this.checkIfMobile.bind(this);
    this.centerActiveItem = this.centerActiveItem.bind(this);
    this.handleClosePreview = this.handleClosePreview.bind(this);
    this.handleArrowScroll = this.handleArrowScroll.bind(this);
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    const scrollContainer = ReactDOM.findDOMNode(this.scrollContainerRef);
    if (scrollContainer && (prevState.scrollLeftPos !== this.state.scrollLeftPos)) {
      scrollContainer.scrollLeft += this.state.scrollLeftPos;
    }
  }
  
  centerActiveItem(container, item) {
    if (!item) {
      return;
    }
    const scrollContainer = container.getBoundingClientRect();
    const activeItem = item.getBoundingClientRect();
    this.setState({
      scrollLeftPos: activeItem.left - scrollContainer.left - (scrollContainer.width / 2) + (activeItem.width / 2)
    });
  }
  
  checkIfMobile() {
    this.setState({
      mobile_view: isMobile()
    });
  }
  
  componentDidMount() {
    window.addEventListener('resize', this.checkIfMobile);
    
    
    const checkKeycode = (event) => {
      let keyDownEvent = event || window.event,
        keycode = (keyDownEvent.which) ? keyDownEvent.which : keyDownEvent.keyCode;
      switch (keycode) {
        case 37: // left key
          this.handleArrowScroll('left');
          break;
        case 39: // right key
          this.handleArrowScroll('right');
          break;
        default:
          return; // exit for other keys
      }
      event.preventDefault();
    };
    
    document.onkeydown = checkKeycode;
  }
  
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.checkIfMobile)
  }
  
  renderProjects() {
    const {current_filter, preview_open, selected_project_data, mobile_view} = this.state;
    const {lang} = this.props;
    const selected_project_id = (selected_project_data && selected_project_data.id && preview_open) || -1;
    let renderProjects = _projects.map((item, i) => {
      let renderPreview = window.innerWidth <= 768 && selected_project_id && (
        <ProjectPreview key={i} lang={lang} previewOpen={preview_open} content={{...item, 'number': i}}
                        isMobile={mobile_view}/>);
      if (item.year.includes(current_filter) || current_filter === item.type || current_filter === 'all') {
        return ([<ProjectCard key={i} content={{...item, 'number': i}} previewOpen={preview_open}
                              selectedProjectCB={this.handleSelectedProject}/>,
          renderPreview
        ]);
      }
      return null;
    });
    return renderProjects;
  }
  
  handleFilterChange = (new_filter) => {
    this.setState({
      current_filter: new_filter,
      preview_open: -1,
    });
  };
  
  handleSelectedProject = (element, new_selected_project) => {
    element.preventDefault();
    const {preview_open, mobile_view} = this.state;
    const currElement = element.target;
    const container = ReactDOM.findDOMNode(this.scrollContainerRef);
    this.setState({
      selected_project_data: new_selected_project,
      active_id: element.target.id,
      preview_open: preview_open === new_selected_project.id ? -1 : new_selected_project.id
    }, () => {
      this.state.selected_project_data && !mobile_view &&
      setTimeout(() => {
        this.centerActiveItem(container, currElement);
      }, preview_open === -1 ? 400 : 100);
    });
    
    if (!this.state.mobile_view) {
      const containerOffSet = document.getElementById('projects').offsetTop;
      scrollTo(document.body, containerOffSet, 50);
    }
  };
  
  handleClosePreview() {
    this.setState({
      preview_open: -1
    });
  }
  
  handleArrowScroll(direction) {
    const current_id = document.getElementById(this.state.active_id);
    if (direction === 'right' && current_id && current_id.nextElementSibling) {
      current_id.nextElementSibling.click();
    }
    if (direction === 'left' && current_id && current_id.previousSibling) {
      current_id.previousSibling.click();
    }
  }
  
  render() {
    console.log("this.props: ", this.props)
    const {current_filter, selected_project_data, preview_open, mobile_view} = this.state;
    const {lang} = this.props;
    return (
      <main id='projects' className={classnames('projects main-section', {'mobile': mobile_view})}>
        <div
          className={classnames('projects-bg', 'section-bg', {'mobile': mobile_view, 'desktop': preview_open !== -1})}/>
        {
          !mobile_view && selected_project_data &&
          <section className='project-preview-desktop-wrapper'>
            <ProjectPreview
              lang={lang}
              previewOpen={preview_open}
              content={selected_project_data}
              closeCB={this.handleClosePreview}
            />
          </section>
        }
        {
          (mobile_view || (preview_open === -1)) &&
          <section className="header">
            <h1 className="title">Projects</h1>
          </section>
        }
        <section
          id='projects-wrapper'
          className={classnames('projects-wrapper', {'scroll-projects': preview_open !== -1 && !mobile_view})}
        >
          {
            (mobile_view || (preview_open === -1)) &&
            <ProjectsFilter currentFilter={current_filter} changeFilterCB={this.handleFilterChange}/>
          }
          {
            preview_open !== -1 && !mobile_view &&
            <div className='arrow arrow-left' onClick={(e) => this.handleArrowScroll('left')}>
              <i className="fas fa-chevron-left"></i>
            </div>
          }
          {
            preview_open !== -1 && !mobile_view &&
            <div className='arrow arrow-right' onClick={(e) => this.handleArrowScroll('right')}>
              <i className="fas fa-chevron-right"></i>
            </div>
          }
          <div
            className='inner-projects-wrapper'
            ref={(ref) => (this.scrollContainerRef = ref)}
          >
            <div id={'project-cards'} className="project-cards">
              {this.renderProjects()}
            </div>
          </div>
        </section>
      </main>
    );
  }
};

export default function Projects(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          allImageSharp {
              nodes {
                  fluid {
                      src
                  }
              }
          }
        }
      `}
      render={data => <MyProjects data={data} {...props} />}
    />
  )
}

