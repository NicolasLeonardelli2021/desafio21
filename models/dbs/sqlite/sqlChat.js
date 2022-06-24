let {option} = require("../../../config/sqliteDB");
let knex = require('knex')(option);

class Chatsql{
    async readChat(){
        //this.crearTabla();
        try {
            let res = knex.from('chats').select("*");
            return res;
        } catch (error) {
            console.log("hubo un problema", error)
        }
            
            /* .then((res)=> {return res})
            .catch((err)=>{console.log(err); throw err})
            .finally(()=>{
                knex.destroy();
            }) */
    }

    async createChat(obj){
        this.crearTabla();
        try {
            let res = await knex('chats').insert(obj)
            .then(()=> console.log("dato insertado"))
            .catch((err)=>{console.log(err); throw err})
            .finally(()=>{
                knex.destroy();
            })
            return res;
        } catch (error) {
            console.log(error)
        }
    }

    async crearTabla() {
        console.log("entro a CrearTabla");
        let existeTabla = knex.from("chats").select('*');
        
        if(!existeTabla){
            console.log("creando la tabla")
             knex.schema.createTable("chats", table =>{
                table.increments("id"),
                table.string("mail"),
                table.string("nombre"),
                table.string("apellido"),
                table.integer("edad"),
                table.string("alias"),
                table.string("avatar"),
                table.string("text"),
                table.string("hora")
            })
            .then(()=> console.log("Tabla creada"))
            .catch((err)=>{console.log(err); throw err})
            .finally(()=>{
                knex.destroy();
            })
        }
    }
}

module.exports = new Chatsql;