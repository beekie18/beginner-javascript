import { BigNumber } from './bignumber.js';

export function Vec2(x, y) {
  this.x = new BigNumber(x);
  this.y = new BigNumber(y);
  this.toString = () => `${x.toString(36)}, ${y.toString(36)}`;
}
