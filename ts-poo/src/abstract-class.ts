// Abstract impide la instanciación de una clase
// solo se podrá utilizar a través de una subclase que herede de la principal
export interface Sound {
  name: string,
  duration: number,
  intensity: string
}

export abstract class AbstractSound implements Sound {
  constructor(
    public name: string,
    public duration: number,
    public intensity: string
  ) {}
}

export class Dopler extends AbstractSound {
  constructor(name: string, duration: number, intensity: string) {
    super(name, duration, intensity);
  }
}

const birdSound: Sound = new Dopler('Bird Sound', 25, 'High');
console.log(birdSound);
