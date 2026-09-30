import express from 'express';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/:transactionId', protect, async (req, res) => {
  res.json({ messages: [], note: 'WebSocket listo en versión siguiente' });
});

router.post('/send', protect, async (req, res) => {
  res.status(201).json({ 
    from: req.user.id,
    text: req.body.text,
    time: new Date().toISOString()
  });
});

export default router;
