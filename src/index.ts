import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Monster from './Monster';

const player1 = new Character('');
for (let i = 0; i < 5; i += 1) {
  player1.levelUp();
}

const player2 = new Character('');
const player3 = new Character('');

const monster1 = new Monster();
const monster2 = new Monster();

const pvp = new PVP(player2, player3);
const pve = new PVE(player1, [monster1, monster2]);

function runBattles(battles: Battle[]): void {
  battles.forEach((battle) => battle.fight());
}

export { player1, player2, player3, monster1, monster2, pvp, pve, runBattles };
