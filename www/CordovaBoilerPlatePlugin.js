// TODO comments
var exec = require('cordova/exec');

var cordovaBoilerPlatePlugin = {
	doSomethingNoArgs: function(onSuccess, onError) {
		console.log('Hello from doSomethingNoArgs');
		cordova.exec(onSuccess, onError, 'CordovaBoilerPlatePlugin', 'doSomethingNoArgs', []);
	},

	doSomethingOneArg: function(arg, onSuccess, onError) {
		console.log('Hello from doSomethingOneArg');
		console.log('Called with arg = "' + arg + '"');
		cordova.exec(onSuccess, onError, 'CordovaBoilerPlatePlugin', 'doSomethingOneArg', [arg]);
	},

	doSomethingMultipleArgs: function(argA, argB, onSuccess, onError) {
		console.log('Hello from doSomethingMultipleArgs');
		console.log('Called with argA = "' + argA + '"');
		console.log('Called with argB = "' + argB + '"');
		cordova.exec(onSuccess, onError, 'CordovaBoilerPlatePlugin', 'doSomethingMultipleArgs', [argA, argB]);
	}
};

module.exports = cordovaBoilerPlatePlugin;