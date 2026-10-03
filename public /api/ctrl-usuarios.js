const config = require('./config');

exports.verPerfil = async (req, res) => {
  res.json({ id: req.params.id, mensaje: 'Datos del perfil' });
};

exports.actualizarPerfil = async (req, res) => {
  res.json({ mensaje: 'Perfil actualizado' });
};

exports.verSaldo = async (req, res) => {
  res.json({ saldo: 0, moneda: 'USD' });
};

exports.solicitarRetiro = async (req, res) => {
  const { monto, metodo } = req.body;
  if (!monto || monto < config.retiros.minimo) {
    return res.status(400).json({ error: `El retiro mínimo es $${config.retiros.minimo}` });
  }
  res.json({
    mensaje: 'Retiro solicitado',
    monto,
    metodo,
    comision: config.retiros.comisionRapida + '%'
  });
};
