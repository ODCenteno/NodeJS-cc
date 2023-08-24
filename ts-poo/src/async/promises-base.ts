( // Para tipar promesas se utiliza la sintaxis Promise<type>
  // se necesita un contexto asíncrono, por eso lo metemos en una función
  async () => {
    function delay(time: number): Promise<boolean> {
      const promise = new Promise<boolean>((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, time)
      })
      return promise;
    }
    const rta = await delay(2000);
  }
)()
