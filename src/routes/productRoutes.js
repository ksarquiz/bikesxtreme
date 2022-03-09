//TODO: agregar express
const express = require('express');

//TODO: agregar el router
const router = express.Router();

//TODO: agregar el Controller
const productController = require('../controllers/productController');
/*** ---------------------------------------------------------------------------------------------- ***/

/*** GET ALL PRODUCTS ***/  
router.get("/",productController.listadoDeProductos);

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productController.create); 
router.post('/create', productController.store); 

/*** GET ONE PRODUCT ***/ 
router.get('/:id/', productController.detail); 


/*** EDIT ONE PRODUCT ***/ 


/*** DELETE ONE PRODUCT***/ 

//TODO: agregar el controller index y about
router.get('/ProductCart', productController.carrito);
router.get('/ProductDetail', productController.detalle_producto);
router.get('/ProductDetail_2', productController.detalle_producto2);
router.get('/ProductDetail_3', productController.detalle_producto3);
router.get('/form_productos', productController.form_producto);




//TODO: exportar el modulo
module.exports = router;
