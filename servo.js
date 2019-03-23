var five = require("johnny-five");
var board = new five.Board();
board.on("ready", function() {
  var servo = new five.Servo(10);
  var servo = new five.Servo({
    id: "MyServo",
    pin: 10,
    type: "standard",
    range: [0,180],
    fps: 100,
    invert: false,
    startAt: 90,
    center: true,
  });
  this.repl.inject({
    servo: servo
  });
  servo.sweep();
});
