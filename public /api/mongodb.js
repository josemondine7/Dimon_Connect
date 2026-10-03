const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI;

mongoose.connect(uri)
  .then(() => console.log('✅ MongoDB conectado'))
  .catch(err => console.error('❌ MongoDB:', err.message));

module.exports = mongoose;
