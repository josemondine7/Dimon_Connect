const jwt = require('jsonwebtoken');
const claveSecreta = process.env.JWT_SECRET;

const generarToken = (datos) => jwt.sign(datos, claveSecreta, { expiresIn: process.env.JWT_EXPIRES_IN || '7d' });

exports.registrar = async (req, res) => {
  try {
    const { nombre, usuario, correo, clave } = req.body;
    if (!nombre || !usuario || !correo || !clave) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }
    if (clave.length < 6) {
      return res.status(400).json({ error: 'La contraseña debe tener al menos 6 caracteres' });
    }
    res.status(201).json({ mensaje: 'Cuenta creada', token: generarToken({ correo }) });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.ingresar = async (req, res) => {
  res.json({ mensaje: 'Bienvenido de vuelta' });
};

exports.ingresarGoogle = async (req, res) => {
  res.json({ mensaje: 'Ingreso con Google completado' });
};
