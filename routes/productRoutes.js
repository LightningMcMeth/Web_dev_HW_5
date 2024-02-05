const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const infoHandler = require('../handlers/infoHandler');

router.get('/new', productController.displayProductFormController);
router.get('/', productController.listAllProductsController);
router.get('/info', infoHandler);
router.get('/:id', productController.getProductByIdController);
router.post('/', productController.createNewProductController);

module.exports = router;