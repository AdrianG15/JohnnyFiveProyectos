//Cargamos la librería de jonny-five
var five = require("johnny-five");
//Declaramos la placa con que vamos a trabajar
var board = new five.Board();

//Cuando este lista la board, se ejecuta el programa
board.on("ready", function() {
  //Iniciamos el pin13 y lo declaramos en una variable
  var led = new five.Led(13);
  //Con la instrucción blink hacemos que se encienda y apague en 5ms (1/2 segundo)
  led.strobe(1000);

  this.repl.inject({
    ledC: led
  })
});
//Este metodo nos mostrará los posibles errores que se presenten
board.on("error", function(err){
  console.log(err);
});
