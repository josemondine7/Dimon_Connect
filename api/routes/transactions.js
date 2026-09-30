import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import Transaction from '../models/Transaction.js';
import { calculateTotal } from '../utils/calculateCommission.js';

const router = express.Router();

router.post('/create', protect, async (req, res) => {
  try {
    const { serviceId, providerId, baseAmount, paymentType } = req.body;
    const amounts = calculateTotal(baseAmount, paymentType);

    const transaction = await Transaction.create({
      service: serviceId,
      client: req.user.id,
      provider: providerId,
      amountBase: baseAmount,
      commissionPlatform: 10,
      guaranteeAmount: amounts.guarantee,
      totalClient: amounts.totalClient,
      paymentType,
      status: paymentType === 'advance' ? 'pending_payment' : 'pending_payment'
    });

    res.status(201).json({ transaction, amounts });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear transacción' });
  }
});

router.get('/my', protect, async (req, res) => {
  const transactions = await Transaction.find({
    $or: [{ client: req.user.id }, { provider: req.user.id }]
  }).populate('service', 'title');
  res.json(transactions);
});

export default router;
