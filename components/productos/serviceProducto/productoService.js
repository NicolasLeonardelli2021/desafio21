const { array } = require("yargs");
const faker = require("../../faker")

class Producto{
    static ban = 0;
     static productos = [];
     
        async list(){
            return this.productos
        }
     
      async faker(){
        faker.test()
        .then((array)=> {
            for (const i of array) {
                Producto.productos.push(i)
            }
            })
        .catch((error)=> console.log(error))
     } 

     async readProductos(){
        try {
            if(Producto.ban == 0){
                this.faker();
                Producto.ban = 1;
            }
            let response = await Producto.productos;
            return response
        } catch (error) {
            console.log(error);
        }
        
    }

    async createProducto(data){
        try {
            Producto.productos.push(data);
            return(this.readProductos());
        } catch (error) {
            console.log(error)
        }
    }

    async modificarProducto(id,data){
        try {
            for(let i = 0; i< Producto.productos.length; i++){
                if(Producto.productos[i].titulo == id){
                    Producto.productos.splice(i,1,data)
          
        }
    }
        } catch (error) {
            console.log(error);
        }
    }

    async delete(data){
        try {
            for(let i = 0; i< Producto.productos.length; i++){
                if(Producto.productos[i].titulo == data){
                    Producto.productos.splice(i,1)
                }
            }

        } catch (error) {
            console.log(error)
        }
    }
}
module.exports = new Producto

