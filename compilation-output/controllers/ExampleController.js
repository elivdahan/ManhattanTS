"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const Annotations_1 = require('../manhattan-core/Annotations');
function getNumberFromDB() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(resolve => {
            setTimeout(() => resolve(5), 10000);
        });
    });
}
class Person {
}
class Message {
    constructor(userName, message) {
        this.userName = userName;
        this.message = message;
    }
}
let ExampleController = class ExampleController {
    index(name) {
        return __awaiter(this, void 0, void 0, function* () {
            var someNumber = yield getNumberFromDB();
            return 'Hey' + name + '! , number from DB - ' + someNumber.toString();
        });
    }
    userMessage(name) {
        return new Message(name, 'Hello, World!');
    }
    sendUser(person) {
        return 'hello ' + person.fname + ' ' + person.sname;
    }
};
__decorate([
    Annotations_1.HTTP('GET'), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [String]), 
    __metadata('design:returntype', void 0)
], ExampleController.prototype, "index", null);
__decorate([
    Annotations_1.HTTP('GET'), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [String]), 
    __metadata('design:returntype', void 0)
], ExampleController.prototype, "userMessage", null);
__decorate([
    Annotations_1.HTTP('POST'), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Person]), 
    __metadata('design:returntype', void 0)
], ExampleController.prototype, "sendUser", null);
ExampleController = __decorate([
    Annotations_1.Controller('ExampleController'), 
    __metadata('design:paramtypes', [])
], ExampleController);
