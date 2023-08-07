import { BigNumber } from './bignumber.js';
import { Vec2 } from './vec2.js';
import { rxyFromSokostring, sokostringFromRxy } from './converter.js';

const sokostring = 'BPEWCBWETCCCEEBCEEECBTCCC';
const rxy = rxyFromSokostring(sokostring);
console.log(rxy.toString());
console.log(sokostringFromRxy(rxy));
console.log(sokostringFromRxy(new Vec2(867919, 698142)));
