import React from 'react';
import Banner from "./Banner";

const Header = ({context}) => {
  return (
    <main className="header">
      <section>
          <Banner context={context} />
      </section>
    </main>
  );
};

export default Header;
