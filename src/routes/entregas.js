const express = require('express');
const router = express.Router();
const controller = require('../controllers/entregasController');

router.get('/', controller.listar);
router.post('/', controller.crear);
router.put('/:id/calificar', controller.calificar);

module.exports = router;
