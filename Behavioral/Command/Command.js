
class Invoker 
{
    constructor(){
        this.commands = [];
    }

    store_command(command){
        this.commands.push(command)
    }

    execute_commands(){
        this.commands.forEach(command => {
            command.execute();
        });
    }
}


class CommandInterface{
    constructor(receiver){
        this.receiver = receiver;
    }
    execute(){
    }
}


class ServeBananaPie extends CommandInterface{
    constructor(receiver){
        super(receiver);
    }

    execute(){
        this.receiver.action(this.constructor.name);
    }
}

class ServeApplePie extends CommandInterface{
    constructor(receiver){
        super(receiver);
    }

    execute(){
        this.receiver.action(this.constructor.name);
    }
}


class Receiver{
    action(command){
        console.log(String(new Date()) + " " + command +" was served");
    }
}


receiver = new Receiver();
serveBananaPie = new ServeBananaPie(receiver);
serveApplePie = new ServeApplePie(receiver);
invoker = new Invoker();
invoker.store_command(serveBananaPie);
invoker.store_command(serveApplePie);
invoker.execute_commands();

