const express = require('express');
const router = express.Router();

const proveedorController = require('../Controller/proveedorController');
router.get('/', proveedorController.list);
router.post('/', proveedorController.save);
router.delete('/:idproveedor', proveedorController.delete);
router.get('/:idproveedor', proveedorController.edit);
router.post('/:idproveedor', proveedorController.update);

module.exports = router;