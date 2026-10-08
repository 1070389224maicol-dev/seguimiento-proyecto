const express = require('express');
const router = express.Router();
const controller = require('../controllers/proyectosController');

router.get('/', controller.listar);
router.get('/:id', controller.obtener);
router.post('/', controller.crear);
router.put('/:id', controller.actualizar);
router.delete('/:id', controller.eliminar);

// Sprint 2 (semana 3):
// router.get('/:id/entregas', entregasController.listarPorProyecto);
// router.get('/:id/promedio', entregasController.promedioPorProyecto);

module.exports = router;
