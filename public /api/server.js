require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// ✅ APUNTA A PUBLIC — NO HAY MÁS DIST
const carpetaPublica = path.join(__dirname, '../public');
app.use(express.static(carpetaPublica));

// ✅ Conecta con Supabase
require('./supabase');

// ✅ Todas las rutas
app.use('/api/auth', require('./rutas-auth'));
app.use('/api/publicaciones', require('./rutas-publicaciones'));
app.use('/api/usuarios', require('./rutas-usuarios'));
app.use('/api/tratos', require('./rutas-tratos'));

// ✅ Página principal — desde PUBLIC
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// ✅ Mensaje de arranque CORREGIDO
app.listen(PORT, () => {
  console.log(`✅ Dimon Connect funcionando en el puerto ${PORT}`);
  console.log(`📁 Carpeta pública: ${carpetaPublica}`);
});
