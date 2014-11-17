// TODO comments
var exec = require('cordova/exec');

var cordovaBoilerPlatePlugin = {
	doSomethingNoArgs: function(onSuccess, onError) {
		console.log('Hello from doSomethingNoArgs');
		cordova.exec(onSuccess, onError, 'CordovaBoilerPlatePlugin', 'action', []);
	},

	doSomethingOneArg: function(arg, onSuccess, onError) {
		console.log('Hello from doSomethingOneArg');
		console.log('Called with arg = "' + arg + '"');
		cordova.exec(onSuccess, onError, 'CordovaBoilerPlatePlugin', 'action', [arg]);
	},

	doSomethingMultipleArgs: function(argA, argB, onSuccess, onError) {
		console.log('Hello from doSomethingMultipleArgs');
		console.log('Called with argA = "' + argA + '"');
		console.log('Called with argB = "' + argB + '"');
		cordova.exec(onSuccess, onError, 'CordovaBoilerPlatePlugin', 'action', [argA, argB]);
	}
};

module.exports = cordovaBoilerPlatePlugin;