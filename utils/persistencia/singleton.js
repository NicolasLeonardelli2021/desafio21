let dataBaseParam = require("../../config/persistencia");
class Singleton{
    static baseConnection;
    constructor(){
        if(Singleton.baseConnection) return Singleton.baseConnection;
        this.baseConnection = dataBaseParam;
    }
}

module.exports = new Singleton;