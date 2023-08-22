class Animal {
  constructor(
    // protected members are only visible to subclasses of the class they’re declared in.
    private _animalName: string = 'Pingu',
    protected _hasOwner: boolean = false
  ) {}

  get fullName(): string {
    console.log(this._animalName);
    return this._animalName;
  }
}

class Snake extends Animal {
  static move(): void {
    console.log('move on!');
  }
}

const mySnake = new Snake();
mySnake.fullName;
Snake.move();

