import React from 'react';

import Portfolio from '../components/portfolio-components/Portfolio';

export default function Home() {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="portfolio">
      <Portfolio />
    </section>
  );
}