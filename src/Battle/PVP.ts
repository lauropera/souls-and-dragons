import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _opponent: Fighter;

  constructor(player: Fighter, opponent: Fighter) {
    super(player);
    this._opponent = opponent;
  }

  get opponent(): Fighter {
    return this._opponent;
  }

  private isBattleInProgress(): boolean {
    return this.player.lifePoints > 0 && this.opponent.lifePoints > 0;
  }

  fight(): number {
    while (this.isBattleInProgress()) {
      this.player.attack(this.opponent);
      this.opponent.attack(this.player);
    }
    return super.fight();
  }
}

export default PVP;
