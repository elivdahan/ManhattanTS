"use strict";
const ControllerData_1 = require('./ControllerData');
require('reflect-metadata');
const ExpressApi_1 = require('./ExpressApi');
var controllerData = new ControllerData_1.ControllerData();
function HTTP(method) {
    return function (target, key, value) {
        controllerData.urls.push({
            key: key,
            method: method,
            sumParams: Reflect.getMetadata("design:paramtypes", target, key).length
        });
    };
}
exports.HTTP = HTTP;
function Controller(controllerName) {
    return function (target) {
        controllerData.controllerName = controllerName;
        controllerData.constructFn = target;
        ExpressApi_1.ExpressApi.setController(controllerData);
        ExpressApi_1.ExpressApi.runExpressApp(3000);
        return target;
    };
}
exports.Controller = Controller;
