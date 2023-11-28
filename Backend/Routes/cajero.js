const express = require('express');
const router = express.Router();

const cajeroController = require('../Controller/cajeroController');
router.get('/', cajeroController.list);
router.post('/', cajeroController.save);
router.delete('/:idcajero', cajeroController.delete);
router.get('/:idcajero', cajeroController.edit);
router.post('/:idcajero', cajeroController.update);

module.exports = router;