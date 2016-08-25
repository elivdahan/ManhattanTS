import * as express from 'express';
import * as bodyParser from 'body-parser';
import {ControllerData} from './ControllerData';
import {RouteData} from './RouteData';

export class ExpressApi{
    
    static expressApp : any = express();
    
    public static runExpressApp(port:number){
        
        ExpressApi.expressApp.listen(port,()=>console.log('Server is Running on port : '  + port.toString()));
        
    }
    
    public static setController(controllerData : ControllerData){
        
        ExpressApi.expressApp.use(bodyParser.json());
        
        let controllerObject = new controllerData.constructFn();
        
        for(let routeData of controllerData.urls){
            
            let sumToRun = (routeData.method === 'POST') ? routeData.sumParams-1 : routeData.sumParams;
            
            let callBackFn = async function(request : express.Request , response : express.Response){
                
                var controllerFnParams = ExpressApi.generateArrayFromObject(request.params,sumToRun);
                
                if(routeData.method === 'POST')
                    controllerFnParams.push(request.body);
                
                var controllerFnResult = await controllerObject[routeData.key].apply(controllerObject,controllerFnParams);
                
                response.send(controllerFnResult);
                
            };
            
            switch (routeData.method) {
                
                case 'GET': ExpressApi.expressApp.get(ExpressApi.generateExpressUrl(routeData, 
                                                      controllerData.controllerName , sumToRun),callBackFn);
                    break;
                case 'POST': ExpressApi.expressApp.post(ExpressApi.generateExpressUrl(routeData, 
                                                      controllerData.controllerName , sumToRun),callBackFn);
                    break;
            }
            
        }
    }
    
    private static generateArrayFromObject(context : Object, sumToRun : number){
        let res = [];
        for(let i = 0; i<sumToRun; i++){
            res.push(context['a' + i.toString()]);
        }
        return res;
    }
    
    private static generateExpressUrl(routeData : RouteData ,controllerName : string, sumToRun : number) : string{
        var result = '/' + controllerName + '/' + routeData.key + '/';
        for(let i = 0; i<sumToRun; i++){
            result = result + ':a' + i.toString() + '/';
        }
        console.log(result);//debug
        return result;
    }
    
}