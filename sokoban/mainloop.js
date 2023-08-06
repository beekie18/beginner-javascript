import { BigNumber } from './bignumber.js';
import { sokoCells, generateSokostringFromRoomID } from './converter.js';

console.log(generateSokostringFromRoomID(new BigNumber(123456789)));
