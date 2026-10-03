require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// ✅ APUNTA A LA CARPETA PUBLIC — DONDE ESTÁN TUS PÁGINAS
app.use(express.static(path.join(__dirname, '../public')));

// ✅ Conectamos con Supabase — mongodb no se usa más
require('./supabase');

// ✅ Rutas de la plataforma
app.use('/api/auth', require('./rutas-auth'));
app.use('/api/publicaciones', require('./rutas-publicaciones'));
app.use('/api/usuarios', require('./rutas-usuarios'));
app.use('/api/tratos', require('./rutas-tratos'));

// ✅ Cualquier dirección → lleva a la página principal
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// ✅ Arranque del servidor
app.listen(PORT, () => {
  console.log(`✅ Dimon Connect funcionando en el puerto ${PORT}`);
  console.log(`📁 Carpeta pública: ${path.join(__dirname, '../public')}`);
});
