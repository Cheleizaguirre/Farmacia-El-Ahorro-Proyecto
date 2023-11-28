const express = require('express');
const router = express.Router();

const orden_entregaController = require('../Controller/orden_entregaController');
router.get('/', orden_entregaController.list);
router.post('/', orden_entregaController.save);
router.delete('/:idorden_entrega', orden_entregaController.delete);
router.get('/:idorden_entrega', orden_entregaController.edit);
router.post('/:idorden_entrega', orden_entregaController.update);

module.exports = router;
