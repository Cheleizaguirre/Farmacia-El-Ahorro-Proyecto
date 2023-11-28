const express = require('express');
const router = express.Router();

const facturaController = require('../Controller/facturaController');
router.get('/', facturaController.list);
router.post('/', facturaController.save);
router.delete('/:idfactura', facturaController.delete);
router.get('/:idfactura', facturaController.edit);
router.post('/:idfactura', facturaController.update);

module.exports = router;