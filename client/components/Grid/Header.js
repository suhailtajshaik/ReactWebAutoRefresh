import React, { Component, PropTypes } from 'react';

export default class Header extends Component {
  render() {
    const { children } = this.props;
    return (
      <thead>{children}</thead>
    );
  }
}
