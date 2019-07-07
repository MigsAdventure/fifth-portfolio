import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


const NotFound = (props) => {
  return (
    <main className="not-found">
      <section>
      <h1>Sorry, This page doesn't exist!</h1>
        <a onClick={props.history.goBack}>Click here to return to the main page.</a>
      </section>
    </main>
  );
};

export default withRouter(NotFound);
