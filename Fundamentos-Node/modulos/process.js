// No es necesario importar process, ya que es global

process.on('exit', () => {
  console.log('El proceso terminó');
})

process.on('uncaughtException', (err, origen) => {
  console.error(`Hay un error que no se ha capturado: ${err.message}`)
  console.log(origen)
});

funcionQueNoExiste();