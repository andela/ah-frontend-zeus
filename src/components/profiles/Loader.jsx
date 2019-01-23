import React, { Component } from 'react';

class Loader extends Component {
  render() {
    return (
      <div id="loader-container" style={{ display: this.props.display }}>
        <div id="loader" />
      </div>
    );
  }
}

export default Loader;
