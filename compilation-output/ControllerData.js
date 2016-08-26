"use strict";
class ControllerData {
    constructor() {
        this.urls = [];
    }
    printToConsole() {
        console.log('Controller : ' + this.controllerName);
        for (let url of this.urls)
            console.log(JSON.stringify(url));
    }
}
exports.ControllerData = ControllerData;
