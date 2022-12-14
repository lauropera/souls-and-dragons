import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _opponents: (Fighter | SimpleFighter)[];

  constructor(player: Fighter, opponents: (Fighter | SimpleFighter)[]) {
    super(player);
    this._opponents = opponents;
  }

  get opponents(): (Fighter | SimpleFighter)[] {
    return this._opponents;
  }

  private allOponentsDefeated(): boolean {
    return this.opponents.every((opponent) => opponent.lifePoints === -1);
  }

  private opponentsTurn() {
    this.opponents.forEach((opponent) => {
      opponent.attack(this.player);
    });
  }

  fight(): number {
    while (this.player.lifePoints !== -1) {
      this.opponents.forEach((opponent) => {
        this.player.attack(opponent);
        this.opponentsTurn();
      });
      if (this.allOponentsDefeated()) break;
    }
    return super.fight();
  }
}

export default PVE;
