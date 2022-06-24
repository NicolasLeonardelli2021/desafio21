let {db} = require("./index");
let knex = require("knex"); 

const option = {
    client: 'sqlite3',
    connection: {
        filename: "./DB/base.sqlite"
    },
    useNullAsDefault:true
  };
  
/*   class DatabaseC {
    static client;
    constructor(){
        if(DatabaseC.client){
            return DatabaseC.client;
        }
        DatabaseC.client = base;
        this.client = DatabaseC.client;
    }
} */

module.exports ={option};