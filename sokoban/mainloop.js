import { BigNumber } from './bignumber.js';
import {
  sokoCells,
  sokostringFromRoomID,
  roomIDFromSokostring,
} from './converter.js';

const sokostring = 'CTBEWCTBEWCTBEWCTBEWCTBEP';
const roomID = roomIDFromSokostring(sokostring);
console.log(sokostringFromRoomID(roomID));
