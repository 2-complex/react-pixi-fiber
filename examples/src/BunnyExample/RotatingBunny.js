import React, { Component } from "react";
import PropTypes from "prop-types";
import { withApp } from "react-pixi-fiber";
import Sprites from "../Bunny";

// http://pixijs.io/examples/#/basics/basic.js
class RotatingBunny extends Component {
  state = {
    rotation: 0,
    texture: 0,
    x: 10,
    y: 10,
  };

  componentDidMount() {
    this.props.app.ticker.add(this.animate);
  }

  componentWillUnmount() {
    this.props.app.ticker.remove(this.animate);
  }

  animate = delta => {
    // just for fun, let's rotate mr rabbit a little
    // delta is 1 if running at 100% performance
    // creates frame-independent tranformation
    this.setState(state => ({
      ...state,
      rotation: state.rotation + this.props.step * delta,
      x: Math.random() * 500,
      y: Math.random() * 500,
      texture: Math.floor(state.rotation) % 32,
    }));
  };

  render() {
    const { step, ...props } = this.props;
    return <Sprites.Shippy {...props} x = {this.state.x} y = {this.state.y} rotation={0} texture={this.state.texture} />;
  }
}
RotatingBunny.propTypes = {
  app: PropTypes.object.isRequired,
  step: PropTypes.number,
};
RotatingBunny.defaultProps = {
  step: 0,
};

export default withApp(RotatingBunny);
