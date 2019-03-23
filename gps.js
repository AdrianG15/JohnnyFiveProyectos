var five = require("johnny-five");
var board = new five.Board();
board.on("ready", function() {
  var gps = new five.GPS({
    pins: {
      rx: 11,
      tx: 10,
    }
  });
  gps.on("change", function() {
    console.log("position");
    console.log(" latitude : ", this.latitude);
    console.log(" longitude : ", this.longitude);
    console.log(" altitude : ", this.altitude);
    console.log("--------------------------------------");
  });
  gps.on("navigation", function() {
    console.log("navigation");
    console.log(" speed : ", this.speed);
    console.log(" course : ", this.course);
    console.log("--------------------------------------");
  });
});
