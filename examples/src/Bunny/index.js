import React from "react";
import PropTypes from "prop-types";
import { Sprite } from "react-pixi-fiber";
import * as PIXI from "pixi.js";
import bunnys from "./bunnys.png";
import shippy from "./shippy_blue_front.png";

const centerAnchor = new PIXI.Point(0.5, 0.5);

const bunnyTextures = new PIXI.Texture.from(bunnys);
const texturesForBunny = [
  new PIXI.Texture(bunnyTextures.baseTexture, new PIXI.Rectangle(2, 47, 26, 37)),
  new PIXI.Texture(bunnyTextures.baseTexture, new PIXI.Rectangle(2, 86, 26, 37)),
  new PIXI.Texture(bunnyTextures.baseTexture, new PIXI.Rectangle(2, 125, 26, 37)),
  new PIXI.Texture(bunnyTextures.baseTexture, new PIXI.Rectangle(2, 164, 26, 37)),
  new PIXI.Texture(bunnyTextures.baseTexture, new PIXI.Rectangle(2, 2, 26, 37)),
];

const shippyTextures = new PIXI.Texture.from(shippy);
var texturesForShippy = [];
for (var i = 0; i < 32; i++)
{
    texturesForShippy.push(
      new PIXI.Texture(shippyTextures.baseTexture, new PIXI.Rectangle(64*i, 0, 64, 64))
    );
}

function Bunny(props) {
  const texture = texturesForBunny[props.texture];
  const Component = props.as;
  return <Component anchor={centerAnchor} {...props} texture={texture} />;
}
Bunny.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  texture: PropTypes.number,
};
Bunny.defaultProps = {
  as: Sprite,
  texture: 0,
};

function Shippy(props) {
  const texture = texturesForShippy[props.texture];
  const Component = props.as;
  return <Component anchor={centerAnchor} {...props} texture={texture} />;
}
Shippy.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  texture: PropTypes.number,
};
Shippy.defaultProps = {
  as: Sprite,
  texture: 0,
};

let Sprites = {
  Bunny : Bunny,
  Shippy : Shippy,
}

export default Sprites;
