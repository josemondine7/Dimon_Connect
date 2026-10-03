const express = require('express');
const router = express.Router();
const ctrl = require('./ctrl-auth');

router.post('/registrar', ctrl.registrar);
router.post('/ingresar', ctrl.ingresar);
router.post('/google', ctrl.ingresarGoogle);

module.exports = router;
