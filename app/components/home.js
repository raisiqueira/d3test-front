import React from 'react';

import Navbar from './navbarSite';
import PageTitle from './pageTitle';
import Steps from './steps';
import Forms from './forms';

const Home = props => (
  <div>
    <Navbar />
    <div className="container">
      <PageTitle pageTitle="Cadastro" />
    </div>
    <Steps />
    <Forms />
  </div>
);

export default Home;
