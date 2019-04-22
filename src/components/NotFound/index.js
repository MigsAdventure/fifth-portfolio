import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


const NotFound = () => {
  return (
    <main className="not-found">
      <section>
      <h1>NOT FOUND!!!!</h1>
      </section>
    </main>
  );
};

export default withRouter(NotFound);
