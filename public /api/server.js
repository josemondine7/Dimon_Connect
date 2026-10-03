require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

require('./mongodb');
require('./supabase');

app.use('/api/auth', require('./rutas-auth'));
app.use('/api/publicaciones', require('./rutas-publicaciones'));
app.use('/api/usuarios', require('./rutas-usuarios'));
app.use('/api/tratos', require('./rutas-tratos'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => console.log(`✅ Dimon Connect en puerto ${PORT}`));
