// Para evitar el callback hell debemos crear funciones intermedias
// Se puede utilizar la recursividad para repetir procesos

function hola(nombre, miCallback) {
  setTimeout(function() {
    console.log(`hola, ${nombre}`);
    miCallback(nombre);
  }, 1500)
}

function hablar(callbackHablar) {
  setTimeout(function() {
    console.log('bla bla bla');
    callbackHablar();
  }, 1000);
}

function adios(nombre, otroCallback) {
  setTimeout(function() {
    console.log('adios ', nombre)
    otroCallback();
  }, 1000);
}

function conversacion(nombre, veces, callback) {
  if (veces > 0) {
    hablar(function() {
      conversacion(nombre, --veces, callback);
    });
  } else {
    adios(nombre, callback);
  }
}

console.log(' iniciando proceso');
hola('Daniel', function(nombre) {
  conversacion(nombre, 5, function() {
    console.log('Terminando proceso...');
  })
})