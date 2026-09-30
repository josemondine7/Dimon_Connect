import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ 
  origin: process.env.FRONTEND_URL || 'http://localhost:5173'
}));

app.use(express.json());

// 📁 Servir los archivos de la página
const rutaPublica = path.join(__dirname, '../dist');
app.use(express.static(rutaPublica));

// ✅ Prueba de conexión
app.get('/api/health', (req, res) => {
  res.json({
    status: '✅ Dimon Connect ACTIVO',
    database: 'Supabase — prometeoatenasades5781',
    time: new Date().toISOString()
  });
});

// 🏠 Cualquier dirección → mostrar la página principal
app.get('*', (req, res) => {
  res.sendFile(path.join(rutaPublica, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
  console.log(`🗄️ Conectado a Supabase`);
  console.log(`📁 Carpeta pública: ${rutaPublica}`);
});
