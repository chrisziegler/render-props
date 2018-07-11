import React, { Component, Fragment } from 'react';

export default class Toggle extends Component {
  state = {
    on: false
  };

  toggle = () => {
    this.setState({
      on: !this.state.on
    });
  };

  render() {
    // destructure
    const { render } = this.props;
    // run/interpolate our JS inside curly brackets inside JSX
    // render is a prop that is a function, and needs to be invoked
    // we can include any value we want in this component as
    // parameters for its children wherever it is used
    return (
      <Fragment>
        {render({
          on: this.state.on,
          toggle: this.toggle
        })}
      </Fragment>
    );
  }
}
