const path = require('path')
const fs = require("fs");



function findAll(){
   let data = fs.readFileSync(path.join(__dirname, "../data/listadoProductos.json"), "utf-8")
   let productos = JSON.parse(data);
   return productos
}
function writeFile(array){
    let string = JSON.stringify(array, null, 4)
    fs.writeFileSync(path.join(__dirname, "../data/listadoProductos.json"), string)
}

//*---------------------------------------------------------------------------------------------*//

const controller={
        listadoDeProductos: (req, res) => {
        const producto = findAll()
            res.render("listadoDeProductos")
    },
    detail: (req, res) => {


    },
    create: (req, res) => {
        res.render('form_productos');
    },
    store: (req, res) => {
        let productos = findAll()
        let newProduct = {
			id: products.length +1,
			nombre_producto: req.body.name,
            marca: req.body.marca,
			precio: req.body.price,
			talle_producto: req.body.talle_producto,
            categoria:req.body.categoria,
			fotoProducto: req.body.fotoProducto,
			descripcion: req.body.descripcion}

        productos.push(newProduct);
        writeFile(productos);
        res.redirect("/product/index");
    },
    edit: (req, res) => {
        let productos = findAll()
        let productToEdit = productos.find(function (product) {
			return product.id == req.params.id
		})
        res.render("form_productos",{product:productToEdit})
    },
    update: (req, res) => {},
    destroy: (req, res) => {},


    carrito: (req, res) => {
        res.render('productCart');
    },

    detalle_producto: (req, res) => {
        res.render('productDetail');

    },
    detalle_producto2: (req, res) => {
        res.render('productDetail_2');
    },
    detalle_producto3: (req, res) => {
        res.render('productDetail_3');
    },
    form_producto: (req, res) => {
        res.render('form_productos');
    },
}

//TODO: exportar el modulo
module.exports = controller;