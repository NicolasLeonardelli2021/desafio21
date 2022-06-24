const { default: axios } = require("axios");

async function getProductos(){
    try {
        let res = await axios.get('http://localhost:3000/productos');
        console.log(res.data);
    } catch (error) {
        console.log("esto no anda",error);
    }
};

async function ingresoProductos(title){
    try {
        let res = await axios.post('http://localhost:3000/productos/entry',{titulo:`${title}`,precio:45,url:"sdfsdfds"});
        console.log(res.data);
    } catch (error) {
        console.log("Esto no anda",error);
    }
}

async function borrarProductos(){
    try {
        let res = await axios.delete('http://localhost:3000/productos/delete/titulo2');
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
}

async function modificarProductos(title){
    try {
        let res = await axios.put('http://localhost:3000/productos/put/titulo2',{titulo:`${title}`,precio:100,url:"sdfsdfds"});
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
}

//getProductos();
ingresoProductos("titulo1");
ingresoProductos("titulo2");
ingresoProductos("titulo3");

//modificarProductos("tituloNuevo"); 
//borrarProductos();