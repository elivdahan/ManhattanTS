var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, Promise, generator) {
    return new Promise(function (resolve, reject) {
        generator = generator.call(thisArg, _arguments);
        function cast(value) { return value instanceof Promise && value.constructor === Promise ? value : new Promise(function (resolve) { resolve(value); }); }
        function onfulfill(value) { try { step("next", value); } catch (e) { reject(e); } }
        function onreject(value) { try { step("throw", value); } catch (e) { reject(e); } }
        function step(verb, value) {
            var result = generator[verb](value);
            result.done ? resolve(result.value) : cast(result.value).then(onfulfill, onreject);
        }
        step("next", void 0);
    });
};
var ControllerData_1 = require('./ControllerData');
require('reflect-metadata');
var ExpressApi_1 = require('./ExpressApi');
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
