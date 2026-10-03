const express = require('express');
const router = express.Router();
const ctrl = require('./ctrl-usuarios');

router.get('/perfil/:id', ctrl.verPerfil);
router.patch('/perfil', ctrl.actualizarPerfil);
router.get('/saldo', ctrl.verSaldo);
router.post('/retirar', ctrl.solicitarRetiro);

module.exports = router;
