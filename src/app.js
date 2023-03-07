import express from 'express';
import { ManagerProduct } from '../managerProduct.js';

const admProduct = new ManagerProduct('./dataBase/ProductFile.json');

const app = express()

app.get('/products/lista/limite?', async (req,res)=>{
        if(req.query.limite){
            const productos = await admProduct.getLimitProduct(req.query.limite)
            res.json(productos)
        }else{
            const productos = await admProduct.getProduct()
            res.json(productos)
        }   
})

app.get('/products/:pid', async (req,res)=>{
    const busquedaProductos = await admProduct.getProductById(req.params.pid)  
    res.json(busquedaProductos)
})



app.listen(8080,()=>console.log("MarnagerProduct funcionando en el puerto 8080"))
