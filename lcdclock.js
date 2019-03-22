var five = require("johnny-five"),
board, lcd;

board = new five.Board();

board.on("ready", function() {
  console.log("Placa lista.");
  lcd = new five.LCD({
    // LCD pin name  RS  EN  DB4 DB5 DB6 DB7
    // Arduino pin # 7    8   9   10  11  12
    pins: [7, 8, 9, 10, 11, 12],
    backlight: 6,
    rows: 2,
    cols: 20
    // Options:
    // bitMode: 4 or 8, defaults to 4
    // lines: number of lines, defaults to 2
    // dots: matrix dimensions, defaults to "5x8"
  });

  lcd.useChar("clock");
  lcd.useChar("heart")

  lcd.cursor(0,0).print("J5 :heart: Arduino Uno");

  startTime();
  this.repl.inject({
    lcd: lcd
  });
});

console.log("\nEsperando a que inicialice el dispositivo...");

//Función para iniciar el reloj
function startTime() {

  //Obtenemos la hora, minutos y segundos y las guardamos en variables
  var today=new Date();
  var h=today.getHours();
  var m=today.getMinutes();
  var s=today.getSeconds();

  //CheckTime nos permite setear que el número de las variables sea de 2 caracteres.
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);

  //Creamos una variable y configuramos la visualización de los datos en formato de hora.
  var time = h+":"+m+":"+s;

  //Configuramos la salida de los datos preseteados
  lcd.cursor(1, 2).print(":clock: "+time+" :clock:");

  var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
  if (i<10) {i = "0" + i};  // agrego un 0 si el número es menor que 10 para que sea de 2 caracteres
  return i;
}
