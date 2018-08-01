import Client from './Client';

export default class Notification{
    constructor(id,type, client = new Client(), date = new Date()){
        this.id = id;
        this.type = type;
        this.client = client;
        this.date = date;
        this.status = "por hacer";
    }
}