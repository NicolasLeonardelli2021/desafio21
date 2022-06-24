let prodService = require("../serviceProducto/productoService");

class Producto{
    
    async read(req,res,next){
        try {
            //let name = req.sesion.nombre;
            //console.log(name)
            let array = await prodService.readProductos();
            //res.json(array)
            res.render("index",{array})
        } catch (error) {
            console.log(error)
        }
    }

    async entry(req,res,next){
        
        let datos = req.body;
        try {
            await prodService.createProducto(datos);
            res.redirect("/productos")
        } catch (error) {
            
        }
        
    }

    async put(req, res,next){
        try {
            const {id} = req.params;
            let nuevoDato = req.body;
            console.log(nuevoDato)
            prodService.modificarProducto(id,nuevoDato);
            res.redirect("/productos");
        } catch (error) {
            
        }
       
    }

    async delete(req,res,next){
        const {id} = req.params;
        try {
        prodService.delete(id);
        res.redirect("/productos");
        } catch (error) {
            console.log(error)
        }
        
    }
}
module.exports = new Producto

