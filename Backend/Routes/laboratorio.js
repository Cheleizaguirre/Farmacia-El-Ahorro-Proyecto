const express = require('express');
const router = express.Router();

const laboratorioController = require('../Controller/laboratorioController');
router.get('/', laboratorioController.list);
router.post('/', laboratorioController.save);
router.delete('/:idlaboratorio', laboratorioController.delete);
router.get('/:idlaboratorio', laboratorioController.edit);
router.post('/:idlaboratorio', laboratorioController.update);

module.exports = router;