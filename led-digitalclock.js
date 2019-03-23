var moment = require("moment");
var five = require("johnny-five");
var Galileo = require("galileo-io");
var board = new five.Board({
  io: new Galileo()
});
board.on("ready", function() {
  var digits = new five.Led.Digits({
    pins: {
      data: 2,
      cs: 3,
      clock: 4,
    }
  });
  setInterval(function() {
    digits.print(time());
  }, 1000);
});
function time() {
  / *
  La pantalla deseada se ve algo
  como estos ejemplos:
  02.25.54 P
  12.30.00 A
  momento no tiene una opción para
  una sola letra meridiem (ni debería,
    eso sería una tontería), así que necesitamos
    manipular la cadena un poco para que
    Si la cadena coincide con nuestra pantalla deseada.
    * /
    return moment().format("hh.mm.ssA")
    .replace(/([AP])M/, " $1");
  }
