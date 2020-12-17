class MessageDeliverer{
    message: string;

    constructor(msg: string){
        this.message = msg;
    }

    deliverMessage(){
        console.log(this.message);
    }
}

const postman = new MessageDeliverer("Hello world");
postman.deliverMessage();