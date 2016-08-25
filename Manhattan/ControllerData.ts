import {RouteData} from './RouteData';

export class ControllerData{
    urls : RouteData[] = [];
    
    controllerName : string;
    
    constructFn : any;
    
    printToConsole(){
        console.log('Controller : ' + this.controllerName);
        for(let url of this.urls)
            console.log(JSON.stringify(url));
    }
    
}