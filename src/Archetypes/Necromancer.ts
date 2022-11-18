import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _necromancerCounter = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer._necromancerCounter += 1;
  }

  public static createdArchetypeInstances(): number {
    return Necromancer._necromancerCounter;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;
