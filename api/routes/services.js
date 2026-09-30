import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import Service from '../models/Service.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const services = await Service.find({ status: 'active' }).populate('provider', 'name');
  res.json(services);
});

router.post('/', protect, async (req, res) => {
  try {
    const service = await Service.create({
      ...req.body,
      provider: req.user.id
    });
    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({ message: 'Error al publicar' });
  }
});

router.get('/:id', async (req, res) => {
  const service = await Service.findById(req.params.id).populate('provider', 'name email');
  if (!service) return res.status(404).json({ message: 'Servicio no encontrado' });
  res.json(service);
});

export default router;
