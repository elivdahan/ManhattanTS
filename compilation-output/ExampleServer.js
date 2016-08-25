var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
var Annotations_1 = require('./Annotations');
function getNumberFromDB() {
    return __awaiter(this, void 0, Promise, function* () {
        return new Promise(resolve => {
            setTimeout(() => resolve(5), 10000);
        });
    });
}
class Person {
}
let MyClass = class {
    hello(x, y) {
        return __awaiter(this, void 0, Promise, function* () {
            var dbData = yield getNumberFromDB();
            return dbData + x + y;
        });
    }
    hello2(x, y) {
        return x + y;
    }
    postMethod(person) {
        return 'hello ' + person.fname + ' ' + person.sname;
    }
};
__decorate([
    Annotations_1.HTTP('GET'), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Number, Number]), 
    __metadata('design:returntype', void 0)
], MyClass.prototype, "hello", null);
__decorate([
    Annotations_1.HTTP('GET'), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Number, Number]), 
    __metadata('design:returntype', void 0)
], MyClass.prototype, "hello2", null);
__decorate([
    Annotations_1.HTTP('POST'), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Person]), 
    __metadata('design:returntype', void 0)
], MyClass.prototype, "postMethod", null);
MyClass = __decorate([
    Annotations_1.Controller('MyClass'), 
    __metadata('design:paramtypes', [])
], MyClass);
