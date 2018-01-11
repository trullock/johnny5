//var SAINT = require('./lib/saint.js');
var Server = require('./lib/server.js');

//var j5 = new SAINT();
//var server = new Server(j5);

var server = new Server(null);
server.start();

//var j5Ready = j5.init();

//j5Ready
//	.then(_ => j5.behaviour.idle())
//	.then(_ => server.start());
