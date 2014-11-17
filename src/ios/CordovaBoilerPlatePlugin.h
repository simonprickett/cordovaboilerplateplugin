// TODO
#import <Cordova/CDV.h>

@interface CordovaBoilerPlatePlugin : CDVPlugin

- (void)doSomethingNoArgs:(CDVInvokedUrlCommand*)command;
- (void)doSomethingOneArg:(CDVInvokedUrlCommand*)command;
- (void)doSomethingMultipleArgs:(CDVInvokedUrlCommand*)command;

@end