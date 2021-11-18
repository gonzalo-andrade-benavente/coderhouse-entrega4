const { Router } = require('express');
const { getProductos, addProducto, getProducto } = require('../controllers/productos');

const router = Router();

router.get('/productos', getProductos);
router.post('/productos', addProducto);
router.get('/productos/:id', getProducto);

module.exports = router;
