//const { default: knex } = require("knex");
let {option} = require("../../../config/sqliteDB");
let knex = require('knex')(option);

class SqliteDB {

    async readUser(obj){
        console.log(obj);
        //this.crearTabla();
        try {
            let res = await knex.from('usuarios').select("name","email","password").where('name', obj.username);
             if(res[0].password === obj.password){
                return res
             }
        } catch (error) {
            console.log('No se puede leer la base de datos',error)
        }
}
async createUser(obj){
    this.crearTabla();
    try {
        let res = await knex('usuarios').insert(obj)
        .then(()=> console.log("dato insertado"))
        .catch((err)=>{console.log(err); throw err})
        .finally(()=>{
            knex.destroy();
        })
        return res;
    } catch (error) {
        console.log(error);
    }
}

async crearTabla() {
   
        let existeTabla = knex.schema.hasTable("usuarios");
        console.log(existeTabla);
        if(!existeTabla){
             knex.schema.createTable("usuarios", table =>{
                table.increments("id"),
                table.string("email"),
                table.string("imagen"),
                table.string("name"),
                table.string("password")
            })
            .then(()=> console.log("Tabla creada"))
            .catch((err)=>{console.log(err); throw err})
            .finally(()=>{
                knex.destroy();
            })
        }
    }
}


module.exports = new SqliteDB;