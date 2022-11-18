import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  private static _halflingCounnter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._halflingCounnter += 1;
  }

  public static createdRacesInstances(): number {
    return Halfling._halflingCounnter;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;
