const Product = require('../models/Product');

// Get all products
exports.list = async (req, res) => {
  const products = await Product.find().sort({ createdAt: -1 });
  res.json(products);
};

// Add a new product
exports.add = async (req, res) => {
  const { name, description, price, stock } = req.body;
  const p = new Product({ name, description, price, stock });
  await p.save();
  res.json(p);
};
