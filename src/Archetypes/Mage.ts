import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: EnergyType;
  private static _mageCounter = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage._mageCounter += 1;
  }

  public static createdArchetypeInstances(): number {
    return Mage._mageCounter;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Mage;
