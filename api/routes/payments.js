import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import Transaction from '../models/Transaction.js';

const router = express.Router();

router.post('/confirm-payment/:id', protect, async (req, res) => {
  try {
    const tx = await Transaction.findById(req.params.id);
    if (!tx) return res.status(404).json({ message: 'Transacción no encontrada' });
    
    tx.status = 'in_progress';
    tx.paidAt = new Date();
    await tx.save();
    
    res.json({ message: '✅ Pago confirmado, trabajo en marcha', transaction: tx });
  } catch (error) {
    res.status(500).json({ message: 'Error al confirmar pago' });
  }
});

router.post('/complete/:id', protect, async (req, res) => {
  try {
    const tx = await Transaction.findById(req.params.id);
    if (!tx) return res.status(404).json({ message: 'Transacción no encontrada' });
    
    tx.status = 'completed';
    tx.completedAt = new Date();
    await tx.save();
    
    res.json({ message: '✅ Servicio completado', transaction: tx });
  } catch (error) {
    res.status(500).json({ message: 'Error al finalizar' });
  }
});

export default router;
