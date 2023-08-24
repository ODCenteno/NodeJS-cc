export class Singleton {
  static instance: Singleton | null = null
  // el constructor privado solo puede ser utilizado dentro de la clase
  private constructor (public name: string) {}

  public static getInstance(name: string): Singleton {
    if (Singleton.instance == null) {
      Singleton.instance = new Singleton(name);
    }
    return Singleton.instance;
  }
}

const newSingleton = Singleton.getInstance('service 1');
console.log(newSingleton.name);


