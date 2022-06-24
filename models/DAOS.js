//let {config} = require("../config");
let Singleton = require("../utils/persistencia/singleton");
let mongo = require("./dbs/mongo/mongoUser");
let chat = require("./dbs/mongo/mongoChat");
let sql = require("./dbs/sqlite/sqlUser");
let Chatsql = require("./dbs/sqlite/sqlChat")

class DAOS{
    constructor(){
        if(Singleton.baseConnection == 'sql'){
            console.log("base: sql")
            this.db = sql;
            this.chat = Chatsql;
            
        }else if(Singleton.baseConnection == 'mongo'){
            console.log("base: mongo");
            this.db = mongo;
            this.chat = chat;
        }
    }

    async checkUser(obj){
        try {
            
            return this.db.readUser(obj);
        } catch (error) {
            console.log(error)
        }
    }
    async createUser(obj){
        try {
            return this.db.createUser(obj);
        } catch (error) {
            console.log(error);
        }
    }

    async readChat(){
        try {
            return this.chat.readChat();
            //.then((chat)=> console.log(chat));
            
            //return chat;
        } catch (error) {
            console.log(error)
        }
    }

    async createChat(obj){
        try {
            return this.chat.createChat(obj);
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = new DAOS();