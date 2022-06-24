const request = require('supertest');
const expect = require('chai').expect
const app = require('../index')
//Result
//const faker = Producto.faker();
//const array = Producto.

describe("Test de funcionalidades de producto",function(){
    it('retorna los productos', async()=>{
        request(app)
         .get('/productos')
         .expect('Content-Type',/json/)
        .expect(200)
    })
    it('Ingreso de productos',async()=>{
        const data ={
            titulo: 'titulo1',
            precio: 45,
            imagen: 'dfsdfsdf'
        }
        request(app)
        .get('/productos/entry')
        .send(data)
        .expect('Content-Type',/json/)
        .expect(200)
        .end(err =>{
            if(err) return document(err);
            done();
        })
    })
    it('modificacion de productos',async()=>{
        
        const data ={
            titulo: 'titulo1',
            precio: 60,
            imagen: 'dfsdfsdf'
        }
        request(app)
        .put('/productos/put/titulo1')
        .send(data)
        .expect('Content-Type',/json/)
        .expect(200)
      
    })
          it('Borrar productos',async()=>{
        request(app)
        .delete('/productos/delete/titulo1')
        .expect('Content-Type',/json/)
        .expect(201)
        .end(err =>{
            if(err) return console.log(err);
            done();
        })
    }) 
    
})