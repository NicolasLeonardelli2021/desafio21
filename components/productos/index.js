let {Router} = require("express");
let controller = require("./controllerProducto/productoController");

module.exports = app =>{
    let router = new Router();

     app.use("/productos", router);
    //router.get("/login",)
    router.get("/",controller.read);
    router.post("/entry",controller.entry);
    router.put('/put/:id',controller.put);
    router.delete('/delete/:id',controller.delete);
    
}