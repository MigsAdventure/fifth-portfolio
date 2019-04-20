import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

const Header = () => {
  return (
    <main className="header">
      <section>
        <h1>This is the header</h1>
      </section>
    </main>
  );
};

export default withRouter(Header);
