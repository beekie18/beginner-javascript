import { BigNumber } from './bignumber.js';

const coordchars =
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabscdefghijklmnopqrstuvwxyz';
const sokochars = 'CTBEW';

const N = new BigNumber('1490116119384765625'); // 5**(25-1) * 5**2 * 2
const coprime = new BigNumber('1490116119384765629'); // coprime with N
const modinv = new BigNumber('1117587089538574219'); // found with wolfram alpha

export const sokoCells = 25;

export const generateSokostringFromRoomID = (roomID) => {
  const sokostring = '';
  let sokonum = roomID.multipliedBy(coprime).mod(N);
  const playerPosition = sokonum.mod(sokoCells);
  sokonum = sokonum.idiv(sokoCells);
  for (let i = 0; i < sokoCells - 1; i += 1) {
    if (playerPosition.isEqualTo(i)) sokostring.concat('P');
    const remainder = sokonum.mod(5);
    sokostring.concat(sokochars[remainder.toNumber()]);
    sokonum = sokonum.idiv(5);
  }
  if (playerPosition.isEqualTo(sokoCells - 1)) sokostring.concat('P');
  return sokostring;
};
