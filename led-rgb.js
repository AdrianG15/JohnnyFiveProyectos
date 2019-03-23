var temporal = require("temporal");
var five = require("johnny-five");
var board = new five.Board();
board.on("ready", function() {
  // Inicializa el LED RGB
  var led = new five.Led.RGB([6, 5, 3]);
  // Ajustar a intensidad máxima roja
  console.log("100% red");
  led.color("#FF0000");
  temporal.queue([{
    // Después de 3 segundos, atenuar a 30%
    de intensidad
    wait: 3000,
    task: function() {
      console.log("30% red");
      led.intensity(30);
    }
  }, {
    // 3 segundos luego se vuelven azules, aún con una intensidad del 30%
    wait: 3000,
    task: function() {
      console.log("30% blue");
      led.color("#0000FF");
    }
  }, {
    // Otros 3 segundos, van de intensidad azul.
    wait: 3000,
    task: function() {
      console.log("100% blue");
      led.intensity(100);
    }
  }, ]);
});
