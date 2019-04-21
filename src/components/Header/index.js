import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Banner from "./Banner";

const Header = () => {
  return (
    <main className="header">
      <section>
        <Banner />
      </section>
    </main>
  );
};

export default withRouter(Header);
