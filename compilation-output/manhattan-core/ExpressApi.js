"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const express = require('express');
const bodyParser = require('body-parser');
class ExpressApi {
    static runExpressApp(port) {
        ExpressApi.expressApp.listen(port, () => console.log('Server is Running on port : ' + port.toString()));
    }
    static setController(controllerData) {
        ExpressApi.expressApp.use(bodyParser.json());
        let controllerObject = new controllerData.constructFn();
        for (let routeData of controllerData.urls) {
            let sumToRun = (routeData.method === 'POST') ? routeData.sumParams - 1 : routeData.sumParams;
            let callBackFn = function (request, response) {
                return __awaiter(this, void 0, void 0, function* () {
                    var controllerFnParams = ExpressApi.generateArrayFromObject(request.params, sumToRun);
                    if (routeData.method === 'POST')
                        controllerFnParams.push(request.body);
                    var controllerFnResult = yield controllerObject[routeData.key].apply(controllerObject, controllerFnParams);
                    response.send(controllerFnResult);
                });
            };
            switch (routeData.method) {
                case 'GET':
                    ExpressApi.expressApp.get(ExpressApi.generateExpressUrl(routeData, controllerData.controllerName, sumToRun), callBackFn);
                    break;
                case 'POST':
                    ExpressApi.expressApp.post(ExpressApi.generateExpressUrl(routeData, controllerData.controllerName, sumToRun), callBackFn);
                    break;
            }
        }
    }
    static generateArrayFromObject(context, sumToRun) {
        let res = [];
        for (let i = 0; i < sumToRun; i++) {
            res.push(context['a' + i.toString()]);
        }
        return res;
    }
    static generateExpressUrl(routeData, controllerName, sumToRun) {
        var result = '/' + controllerName + '/' + routeData.key + '/';
        for (let i = 0; i < sumToRun; i++) {
            result = result + ':a' + i.toString() + '/';
        }
        console.log(result); //debug
        return result;
    }
}
ExpressApi.expressApp = express();
exports.ExpressApi = ExpressApi;
