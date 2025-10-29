const mongoose = require('mongoose');
const wasteSchema = new mongoose.Schema({
  type: { type: String, required: true },
  quantity: { type: Number, required: true },
  location: { type: String },
  collectedAt: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});
module.exports = mongoose.model('Waste', wasteSchema);
