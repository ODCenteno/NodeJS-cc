export interface Driver {
  database: string;
  password: string;
  port: number;

  // Se pueden definir los métodos de una clase
  connect(): void;
}

// Para utilizar una interfaz en una clase se utiliza la palabra 'implements'
class postgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}

  connect() {
    // code
  }
}
