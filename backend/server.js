require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5001;
app.use(cors());
app.use(express.json());
const mongo = process.env.MONGO_URI || 'mongodb://localhost:27017/ecoCycleDB';
mongoose.connect(mongo, { useNewUrlParser:true, useUnifiedTopology:true })
  .then(()=> console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connect error:', err.message));
const authRoutes = require('./routes/auth');
const wasteRoutes = require('./routes/waste');
const productRoutes = require('./routes/product');
const adminRoutes = require('./routes/admin');
app.use('/api/auth', authRoutes);
app.use('/api/waste', wasteRoutes);
app.use('/api/products', productRoutes);
app.use('/api/admin', adminRoutes);
app.get('/', (req,res)=> res.json({ ok: true, message: 'EcoCycle API' }));
app.listen(port, ()=> console.log('Server running on port', port));
