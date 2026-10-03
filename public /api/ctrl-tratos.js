const config = require('./config');

exports.crearTrato = async (req, res) => {
  const { solicitante, proveedor, montoAcordado } = req.body;
  if (!solicitante || !proveedor || !montoAcordado || montoAcordado <= 0) {
    return res.status(400).json({ error: 'Datos del trato incompletos' });
  }
  res.status(201).json({
    mensaje: 'Trato creado y protegido',
    monto: montoAcordado,
    estado: 'pendiente-de-pago'
  });
};

exports.procesarPago = async (req, res) => {
  const { monto, conMembresia } = req.body;
  const comisionSolicitante = conMembresia ? config.comisiones.solicitaMembresia : config.comisiones.solicita;
  const comisionProveedor = conMembresia ? config.comisiones.brindaMembresia : config.comisiones.brinda;
  
  const total = Number(monto);
  const aProveedor = total * (100 - comisionProveedor) / 100;
  const aPlataforma = total * (comisionSolicitante + comisionProveedor) / 100;
  const repartoJose = aPlataforma * config.reparto.jose / 100;
  const repartoTaina = aPlataforma * config.reparto.taina / 100;

  res.json({
    mensaje: 'Pago procesado y retenido',
    montoTotal: total,
    comisionSolicitante: comisionSolicitante + '%',
    comisionProveedor: comisionProveedor + '%',
    aRecibirProveedor: aProveedor.toFixed(2),
    repartoPlataforma: { jose: repartoJose.toFixed(2), taina: repartoTaina.toFixed(2) },
    estado: 'retenido-confirmar-entrega'
  });
};

exports.liberarPago = async (req, res) => {
  res.json({ mensaje: 'Pago liberado al proveedor', estado: 'completado' });
};
