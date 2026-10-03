const express = require('express');
const router = express.Router();
const ctrl = require('./ctrl-tratos');

router.post('/crear', ctrl.crearTrato);
router.post('/confirmar-pago', ctrl.procesarPago);
router.post('/liberar', ctrl.liberarPago);

module.exports = router;
