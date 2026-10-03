const express = require('express');
const router = express.Router();
const ctrl = require('./ctrl-publicaciones');

router.get('/lista', ctrl.listar);
router.post('/nueva', ctrl.crear);

module.exports = router;
