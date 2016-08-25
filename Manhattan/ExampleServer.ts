import {HTTP,Controller} from './Annotations';

async function getNumberFromDB() {
    return new Promise<number>(resolve => {
        setTimeout(()=>resolve(5), 10000);
    });
}


class Person{
    fname : string;
    sname : string;
}


@Controller('MyClass')
class MyClass{
    
    @HTTP('GET')
    async hello(x : number , y:number){
        var dbData = await getNumberFromDB();
        return dbData + x + y;
    }
    
    @HTTP('GET')
    hello2(x : number , y:number){
        return  x + y;
    }
    
    
    @HTTP('POST')
    postMethod(person : Person){
        return 'hello ' + person.fname + ' ' + person.sname;
    }
    
    
}