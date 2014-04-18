var Dice = require('./Dice');
var CLI = require('./CLI');
var Command = require('./Command');
var KoVGameEngine = require('./KoVGameEngine');

console.log("Welcome to Kings of Videon!\n");

console.log("Launch CLI, maybe someday have different interface.\n");
var gameEngine = new KoVGameEngine();
var cli = new CLI(inputCallback);

function inputCallback(err, data) {
	if (err) {
		console.log("We got an error");
	}
	switch(data) {
		case Command.type.SETUP:
			cli.setupPlayers(function(err, data) {
				if (err) {
					console.log("Failed game setup");
					return;
				}
				gameEngine.setupGame(data);
			});
			break;
		case Command.type.PRINT:
			gameEngine.printPlayerStats();
			break;
		case Command.type.HELP:
			console.log("print help");
			break;
		case Command.type.QUIT:
			console.log("shutting down");
			process.exit(0);
			break;
		default:
			console.log("Unkown Command");
			break;
	}
}
