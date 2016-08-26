import {ControllerData} from './ControllerData';
import 'reflect-metadata';
import {ExpressApi} from './ExpressApi';

var controllerData : ControllerData = new ControllerData();

export function HTTP(method : string){
    return function(target: any, key: string, value: any){
        controllerData.urls.push({
            key : key,
            method : method,
            sumParams : Reflect.getMetadata("design:paramtypes", target, key).length
        });
    }
}

export function Controller(controllerName) {
    return function(target: any){
        controllerData.controllerName = controllerName;
        controllerData.constructFn = target;
        ExpressApi.setController(controllerData);
        ExpressApi.runExpressApp(3000);
        return target;
    }
}