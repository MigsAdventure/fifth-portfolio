import React from 'react';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import './project-preview.scss';
import Button from "../../_global/Button";
import { projects } from "../../../constants/data/global";

const ProjectPreview = ({content, previewOpen, isMobile, lang}) => {
  console.log(lang);
  const {id, url, tech, responsibilities, description} = content;
  const {btn, headers} = projects;
  const screenSize = isMobile ? 'desktop' : 'mobile';
  const importImage = (path) => {
    try {
      return require('../../../assets/images/' + path);
    } catch (err) {
      return require( '../../../assets/images/global/' + `aion-site-card-logo.jpeg`);
    }
  };
  return (
     <main
       className={classnames('project-preview', {'preview-open': previewOpen === id})}
     >
       <a className='project-preview-image' href={url}>
         <img src={importImage(`${screenSize}/screenshots/${id}-site.jpeg`)} alt={content.name}/>
       </a>
      <section className='project-info'>
        <div className="description">
          <h3>Description</h3>
          <p>{description}</p>
        </div>
        <div className='responsibilities'>
          <h3>{headers.resp[lang]}</h3>
          <ul className="resp-list">
            {
              responsibilities.map((item, i) => {
                return <li key={i} className="resp-item">{item}</li>
              })
            }
          </ul>
        </div>
          <div className="tech">
            <h3>{headers.tech[lang]}</h3>
            <p>{tech}</p>
          </div>
        <div className="cta">
          <Button
            type="btn"
            text={btn[lang]}
            url={url}
            isExternal={true}
            arrow='right'
          />
        </div>
      </section>
    </main>
  );
};

export default withRouter(ProjectPreview);
