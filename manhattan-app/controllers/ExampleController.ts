import {HTTP,Controller} from '../manhattan-core/Annotations';

async function getNumberFromDB() {
    return new Promise<number>(resolve => {
        setTimeout(()=>resolve(5), 10000);
    });
}

class Person{
    fname : string;
    sname : string;
}

class Message{

    userName : string;
    message  : string;

    constructor(userName: string, message: string) {
        this.userName = userName;
        this.message = message;
    }

}

@Controller('ExampleController')
class ExampleController{
    
    @HTTP('GET')
    async index(name : string){
        var someNumber = await getNumberFromDB();
        return 'Hey' + name + '! , number from DB - ' + someNumber.toString();
    }
    
    @HTTP('GET')
    userMessage(name : string){
        return new Message(name,'Hello, World!');
    }
    
    
    @HTTP('POST')
    sendUser(person : Person){
        return 'hello ' + person.fname + ' ' + person.sname;
    }

}