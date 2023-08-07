import { BigNumber } from './bignumber.js';

const coordchars =
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabscdefghijklmnopqrstuvwxyz';
const sokochars = 'CTBEW'; // Crate, Target, Both, Empty, Wall. Not included: Player

const N = new BigNumber('1490116119384765625'); // 5**(25-1) * 5**2
const coprime = new BigNumber('1490116119384765629'); // coprime with N
const modinv = new BigNumber('1117587089538574219'); // found with wolfram alpha

export const sokoCells = 25;

export const sokostringFromRoomID = (roomID) => {
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

export const roomIDFromSokostring = (sokostring) => {
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
  return roomID;
};
