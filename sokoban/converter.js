import BigNumber from './bignumber.js';

const coordchars =
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabscdefghijklmnopqrstuvwxyz';
const sokochars = 'PACTBEW';

const N = new BigNumber('1490116119384765625'); // 5**(25-1) * 5**2 * 2
const coprime = new BigNumber('1490116119384765629'); // coprime with N
const modinv = new BigNumber('1117587089538574219'); // found with wolfram alpha

export const sokoCells = 25;

export const generateSokostringFromRoomID = (roomID) => {
  const sokostring = '';
  const sokonum = roomID.multipliedBy(coprime).mod(N);
  const player_position = sokonum.mod(25);
  for (let i = 0; i < sokoCells; i += 1) {
    sokostring.concat(sokochars[remainder]);
    sokoCells = sokoCells.idiv(5);
  }
};

export const getX = (x, direction, spaces = 1) => {
  if (direction === 'up' || direction === 'down') {
    return x;
  }
  if (direction === 'right') {
    return x + spaces;
  }
  if (direction === 'left') {
    return x - spaces;
  }
};
