package org.crudworks.cordova.plugins;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;

public class CordovaBoilerPlatePlugin extends CordovaPlugin {
	@Override
	public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
		// Which method was called? With many methods in a 
		// plugin we could do this another way e.g. reflection
		if ("doSomethingNoArgs".equals(action)) {
			doSomethingNoArgs(callbackContext);
			return true;
		} else if ("doSomethingOneArg".equals(action)) {
			doSomethingOneArg(args.getString(0), callbackContext);
			return true;
		} else if ("doSometingMultipleArgs".equals(action)) {
			doSomethingMultipleArgs(args.getString(0), args.getJSONObject(1), callbackContext);
			return true;
		}

		// No action matched
		return false;
	}

	private void doSomethingNoArgs(CallbackContext callbackContext) {
		// TODO
		boolean success = false;

		// Call some native API
		// End call some native API

		if (success) {
			callbackContext.success(TODO);
		} else {
			callBackContext.error(TODO);
		}
	}

	private void doSomethingOneArg(String arg, CallbackContext callbackContext) {
		// TODO		
		boolean success = false;

		// Call some native API
		// End call some native API

		if (success) {
			callbackContext.success(TODO);
		} else {
			callBackContext.error(TODO);
		}

	}

	private void doSomethingMultipleArgs(String arg, JSONObject argObj, CallbackContext callbackContext) {
		// TODO
		boolean success = false;
		
		// Call some native API
		// End call some native API

		if (success) {
			callbackContext.success(TODO);
		} else {
			callBackContext.error(TODO);
		}
	}
}