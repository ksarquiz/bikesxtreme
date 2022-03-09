//TODO: agregar express
const express = require('express');

//TODO: agregar el mainController
const mainController = require('../controllers/mainController');
//TODO: agregar el router
const router = express.Router();

//TODO: agregar el controller index y about
router.get('/', mainController.index);
router.get('/Login', mainController.login_Registro);





//TODO: exportar el modulo
module.exports = router;