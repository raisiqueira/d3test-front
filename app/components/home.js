import React, { Component } from 'react';

import Navbar from './navbarSite';
import PageTitle from './pageTitle';
import Steps from './steps';
import MainForm from './main-form';
import ErrorBox from './error-box';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      submitErr: false
    };
  }

  submitFormError(submitErr) {
    return (submitErr) => {
      this.setState({
        submitErr
      });
    };
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <PageTitle pageTitle="Cadastro" />
        </div>
        <Steps />
        {this.state.submitErr && <ErrorBox show={true} />}
        <MainForm
          submitErr={this.state.submitErr} 
          submitFormError={this.submitFormError(this.state.submitErr)}
        />
      </div>
    );
  }
}

export default Home;
