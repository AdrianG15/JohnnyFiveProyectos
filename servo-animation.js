var five = require("johnny-five");
var board = new five.Board();
board.on("ready", function() {
  var servo = new five.Servo(10);
  var animation = new five.Animation(servo);
  animation.enqueue({
    cuePoints: [0, 0.25, 0.75, 1],
    keyFrames: [90, { value: 180, easing: "inQuad" }, { value: 0, easing: "outQuad" }, 90],
    duration: 2000
  });
  board.repl.inject({
    servo: servo,
    animation: animation
  });
});
