import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  provider: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amountBase: { type: Number, required: true },
  commissionPlatform: { type: Number, default: 10 },
  guaranteeAmount: { type: Number, default: 0 },
  totalClient: { type: Number, required: true },
  status: { 
    type: String, 
    enum: ['pending_payment', 'paid_guarantee', 'in_progress', 'completed', 'cancelled', 'disputed'],
    default: 'pending_payment'
  },
  paymentType: { type: String, enum: ['advance', 'deferred'], required: true },
  paidAt: Date,
  completedAt: Date,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Transaction', transactionSchema);
