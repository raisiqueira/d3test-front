import React, { Component} from 'react';

class Steps extends Component {

  render() {
    return (
      <div className="container">
        <ul className="steps">
          <li className="steps-item">1</li>
          <li className="steps-item">2</li>
          <li className="steps-item">3</li>
          <li className="steps-item steps-item-active">4</li>
        </ul>
      </div>
    );
  };
};

export default Steps;
