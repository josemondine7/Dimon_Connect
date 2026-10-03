const config = require('./config');

exports.listar = async (req, res) => {
  try {
    const { ciudad, pais, soloMembresia } = req.query;
    res.json({
      filtro: { ciudad, pais, soloMembresia },
      orden: ['membresia', 'cercania', 'fecha'],
      mensaje: 'Publicaciones cargadas'
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.crear = async (req, res) => {
  try {
    const { tipo, titulo, descripcion, precio, ciudad, pais } = req.body;
    if (!tipo || !titulo || !precio) {
      return res.status(400).json({ error: 'Faltan datos obligatorios' });
    }
    res.status(201).json({ mensaje: 'Publicación creada', datos: req.body });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
