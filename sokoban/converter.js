import { BigNumber } from './bignumber.js';
import { Vec2 } from './vec2.js';

const sokochars = 'CTBEW'; // Crate, Target, Both, Empty, Wall. Not included: Player

const N = new BigNumber('1490116119384765625'); // 5**(25-1) * 5**2
const coprime = new BigNumber('1490116119384765629'); // coprime with N
const modinv = new BigNumber('1117587089538574219'); // found with wolfram alpha
const maxrx = new BigNumber('1220703125'); // sqrt(N), to make a square arcade

const sokoCells = 25;

const sokostringFromRoomID = (roomID) => {
  let sokostring = '';
  let sokonum = roomID.multipliedBy(coprime).mod(N);
  const playerPosition = sokonum.mod(sokoCells);
  sokonum = sokonum.idiv(sokoCells);
  for (let i = 0; i < sokoCells - 1; i += 1) {
    if (playerPosition.isEqualTo(i)) sokostring = sokostring.concat('P');
    const remainder = sokonum.mod(5);
    sokostring = sokostring.concat(sokochars[remainder.toNumber()]);
    sokonum = sokonum.idiv(5);
  }
  if (playerPosition.isEqualTo(sokoCells - 1))
    sokostring = sokostring.concat('P');
  return sokostring;
};

const roomIDFromSokostring = (sokostring) => {
  let roomID = new BigNumber(0);
  let foundPlayer = 0;
  for (let i = 0; i < sokostring.length; i += 1) {
    const iSokochar = sokostring[i];
    if (iSokochar === 'P') {
      roomID = roomID.plus(i);
      foundPlayer = 1;
    } else {
      const iSokocharnum = new BigNumber(sokochars.indexOf(iSokochar));
      roomID = roomID.plus(
        new BigNumber(5).pow(i - foundPlayer + 2).times(iSokocharnum)
      );
    }
  }
  return roomID.times(modinv).mod(N);
};

const rxyFromRoomID = (roomID) =>
  new Vec2(roomID.mod(maxrx), roomID.idiv(maxrx));
const roomIDFromRxy = (rxy) => rxy.y.times(maxrx).plus(rxy.x);

export const rxyFromSokostring = (sokostring) =>
  rxyFromRoomID(roomIDFromSokostring(sokostring));

export const sokostringFromRxy = (rxy) =>
  sokostringFromRoomID(roomIDFromRxy(rxy));
