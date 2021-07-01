import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Banner from "./Banner";
import { header } from '../../constants/data/header.js';

const Header = ({lang}) => {
  return (
    <main className="header">
      <section>
          <Banner lang={lang} content={header.banner}/>
      </section>
    </main>
  );
};

export default withRouter(Header);
