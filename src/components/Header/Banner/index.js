import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

const Banner = () => {
  return (
    <main className="banner">
      <section>
        <div className="banner-image"></div>
      </section>
    </main>
  );
};

export default withRouter(Banner);
