var five = require("johnny-five"),
board, motor, led;
board = new five.Board();
board.on("ready", function() {
  motor = new five.Motor({
    pin: 5
  });
  board.repl.inject({
    motor: motor
  });
  motor.on("start", function() {
    console.log("start", Date.now());
    board.wait(2000, function() {
      motor.stop();
    });
  });
  // "stop" events fire when the motor is stopped.
  motor.on("stop", function() {
    console.log("stop", Date.now());
  });
  motor.start();
  // stop()
  // Stop the motor. `isOn` property set to |false|
});
