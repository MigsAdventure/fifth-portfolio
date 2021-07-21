import React from 'react';
import Banner from "./Banner";

const Header = ({lang}) => {
  return (
    <main className="header">
      <section>
          <Banner lang={lang} />
      </section>
    </main>
  );
};

export default Header;
