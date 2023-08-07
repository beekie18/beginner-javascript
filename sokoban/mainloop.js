import { BigNumber } from './bignumber.js';
import { Vec2 } from './vec2.js';
import { rxyFromSokostring, sokostringFromRxy } from './converter.js';

const sokostring = 'BPEWCBWETCCCEEBCEEECBTCCC';
const rxy = rxyFromSokostring(sokostring);
console.log(rxy.toString());
console.log(sokostringFromRxy(rxy));
console.log(sokostringFromRxy(new Vec2(867919, 698142)));

const canvas = document.querySelector('#mainscreen');
const ctx = canvas.getContext('2d');
const { width, height } = canvas;
ctx.clearRect(0, 0, canvas.width, canvas.height);

// https://stackoverflow.com/questions/3420975/html5-canvas-zooming
