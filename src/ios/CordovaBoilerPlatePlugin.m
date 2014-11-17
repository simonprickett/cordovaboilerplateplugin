// TODO
#import "CordovaBoilerPlatePlugin.h"

@implementation CordovaBoilerPlatePlugin
 
- (void)doSomethingNoArgs:(CDVInvokedUrlCommand*)command
{
    CDVPluginResult* pluginResult = nil;
 	// TODO 
 	[self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

 - (void)doSomethingOneArg:(CDVInvokedUrlCommand*)command
{
    CDVPluginResult* pluginResult = nil;
    NSString* argA = [command.arguments objectAtIndex:0];

 	// TODO 
 	[self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

 - (void)doSomethingMultipleArgs:(CDVInvokedUrlCommand*)command
{
    CDVPluginResult* pluginResult = nil;
	NSString* argA = [command.arguments objectAtIndex:0];
    // TODO argB an object?

 	// TODO 

 	[self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end