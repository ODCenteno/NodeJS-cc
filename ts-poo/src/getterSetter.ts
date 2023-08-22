// Se debe de cumplir la convención de underscore para la variable privada
class Person {
  constructor(
    private _name: string = 'Daniel',
    private _lastName: string = 'Centeno'
  ) {}

  get fullName() {
    return `${this._name} ${this._lastName}`;
  }
}

const hero = new Person();
// Hacia afuera funciona como una propiedad
console.log(hero.fullName);

class Thing {
  _size = 0;

  get size(): number {
    return this._size;
  }

  set size(value: string | number | boolean) {
    let num = Number(value);

    // Don't allow NaN, Infinity, etc
    if (!Number.isFinite(num)) {
      this._size = 0;
      return;
    }

    this._size = num;
  }
}
