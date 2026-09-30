import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ 
  origin: process.env.FRONTEND_URL || 'http://localhost:5173'
}));

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({
    status: '✅ Dimon Connect ACTIVO',
    database: 'Supabase — prometeoatenasades5781',
    time: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
  console.log(`🗄️ Conectado a Supabase`);
});
