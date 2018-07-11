import { Component } from 'react';

export default class Toggle extends Component {
  state = {
    on: false
  };

  toggle = () => {
    this.setState({
      on: !this.state.on
    });
  };
  // this is the React render() function
  render() {
    const { children } = this.props;

    return children({
      on: this.state.on,
      toggle: this.toggle
    });
  }
}
