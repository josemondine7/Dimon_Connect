import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

connectDB();

app.use(cors({ origin: process.env.NODE_ENV === 'production' 
  ? ['https://dimon-connect-bb87.onrender.com'] 
  : ['http://localhost:5173'] }));

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: '✅ Dimon Connect activo', time: new Date().toISOString() });
});

import authRoutes from './routes/auth.js';
import serviceRoutes from './routes/services.js';
import transactionRoutes from './routes/transactions.js';
import paymentRoutes from './routes/payments.js';
import chatRoutes from './routes/chat.js';

app.use('/api/auth', authRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/chat', chatRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});
