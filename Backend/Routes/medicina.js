const express = require('express');
const router = express.Router();

const medicinaController = require('../Controller/medicinaController');
router.get('/', medicinaController.list);
router.post('/', medicinaController.save);
router.delete('/:idmedicina', medicinaController.delete);
router.get('/:idmedicina', medicinaController.edit);
router.post('/:idmedicina', medicinaController.update);

module.exports = router;