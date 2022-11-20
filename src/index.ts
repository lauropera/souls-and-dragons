// import Character from './Character';
// import Monster from './Monster';

const PVE = require('./Battle');
const Character = require('./Character');
const Monster = require('./Monster')

const player1 = new Character('');
for (let i = 0; i < 500; i++) player1.levelUp();
const monster = new Monster();
const pve1 = new PVE(player1, [monster]);
console.log(pve1);
