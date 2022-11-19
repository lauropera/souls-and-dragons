import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _adversary: Fighter;

  constructor(player: Fighter, adversary: Fighter) {
    super(player);
    this._adversary = adversary;
  }

  get adversary(): Fighter {
    return this._adversary;
  }

  fight(): number {
    while (this.player.lifePoints !== -1) {
      this.player.attack(this.adversary);
      this.adversary.attack(this.player);
      if (this.adversary.lifePoints === -1) break;
    }
    return super.fight();
  }
}

export default PVP;
