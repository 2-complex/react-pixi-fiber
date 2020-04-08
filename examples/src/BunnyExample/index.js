import React, { Component } from "react";
import { Container, Stage } from "react-pixi-fiber";
import RotatingBunny from "./RotatingBunny";

const OPTIONS = {
  backgroundColor: 0x1099bb,
};

class BunnyExample extends Component {
  render() {
    return (
      <Stage width={800} height={600} options={OPTIONS}>
        <Container ref={c => (window.example = c)}>
          <RotatingBunny x={200} y={120} texture={0} name="regular" step={0.1} />
        </Container>
      </Stage>
    );
  }
}

export default BunnyExample;
