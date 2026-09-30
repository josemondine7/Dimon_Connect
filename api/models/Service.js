import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  priceBase: { type: Number, required: true },
  provider: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  media: [{ type: String }],
  status: { type: String, enum: ['active', 'paused', 'completed'], default: 'active' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Service', serviceSchema);
