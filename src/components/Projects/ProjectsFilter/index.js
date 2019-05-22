import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './projects-filter.scss';
import {projects_filter} from '../../../constants/data/global';
import classnames from 'classnames';


function ProjectsFilter ({currentFilter, changeFilterCB}) {
  this.renderNavItems () {
    return (<div className="nav-filter-items">
      {
        Object.keys(projects_filter).map((item, i) => {
          return (<div
            key={i}
            onClick={changeFilterCB.bind(this, item)}
            className={classnames('nav-item' , {'active': currentFilter === item})}
          >
            {projects_filter[item]}
          </div>)
        })
      }
    </div>);
  };
  
    return (
      <main className="projects-filter">
        <section>
          <div>{currentFilter}</div>
          {this.renderNavItems()}
        </section>
      </main>
    )
};

export default withRouter(ProjectsFilter);
