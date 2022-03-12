//TODO: agregar express
const express = require('express');

//TODO: agregar el Controller
const productController = require('../controllers/productController');

//TODO: agregar el router
const router = express.Router();

/*** ---------------------------------------------------------------------------------------------- ***/

router.get('/form_productos', productController.form_producto);

/*** GET ALL PRODUCTS ***/  
router.get("/listadoDeProductos",productController.listadoDeProductos);

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productController.create); 
router.post('/create', productController.store); 

router.get('/detail/:id', productController.detail); 

router.get("/edit/:id", productController.edit);
router.put("/edit/:id", productController.update);

router.delete("/delete/:id", productController.destroy);


/*** GET ONE PRODUCT ***/ 
//router.get('/detail/:id/', productController.detail); 


/*** EDIT ONE PRODUCT ***/ 


/*** DELETE ONE PRODUCT***/ 

//TODO: agregar el controller index y about
/*router.get('/ProductCart', productController.carrito);
router.get('/ProductDetail', productController.detalle_producto);
router.get('/ProductDetail_2', productController.detalle_producto2);
router.get('/ProductDetail_3', productController.detalle_producto3);
router.get('/form_productos', productController.form_producto);
*/



//TODO: exportar el modulo
module.exports = router;
