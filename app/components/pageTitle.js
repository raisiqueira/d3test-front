import React, {Component} from 'react';

class PageTitle extends Component {

  render () {
      return (
        <div className="text-center">
            <h1>{this.props.pageTitle}</h1>
        </div>
      );
  };
};

export default PageTitle;
