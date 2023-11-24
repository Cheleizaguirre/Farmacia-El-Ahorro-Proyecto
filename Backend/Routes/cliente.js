const express = require('express');
const router = express.Router();

const clienteController = require('../Controller/clienteController');
router.get('/', clienteController.list);
router.post('/', clienteController.save);
router.delete('/:idcliente', clienteController.delete);
router.get('/:idcliente', clienteController.edit);
router.post('/:idcliente', clienteController.update);

module.exports = router;