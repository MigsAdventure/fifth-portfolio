import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './projects-filter.scss';
import {projects_filter} from '../../../constants/data/global';
import classnames from 'classnames';

class ProjectsFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_filter: '2019',
      is_active: false
    }
  }
  
  handleFilterChange(current_filter) {
    this.setState({
      current_filter: current_filter
    })
  };
  
  renderNavItems = () => {
    const is_active = this.state.is_active;
    return (<div className="nav-filter-items">
      {
        Object.keys(projects_filter).map((item, i) => {
          return (<div
            key={i}
            onClick={this.handleFilterChange.bind(this, item)}
            className={classnames({['active']: is_active})}
          >
            {projects_filter[item]}
          </div>)
        })
      }
    </div>);
  };
  
  render() {
    const {current_filter} = this.state;
    return (
      <main className="projects-filter">
        <section>
          <div>{current_filter}</div>
          {this.renderNavItems()}
        </section>
      </main>
    )
  }
}

export default withRouter(ProjectsFilter);
