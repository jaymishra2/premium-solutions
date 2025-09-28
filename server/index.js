const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const multer = require('multer');
const path = require('path');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/fangge-metal';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('MongoDB connection error:', error);
});

// Email configuration
const transporter = nodemailer.createTransporter({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: process.env.EMAIL_PORT || 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// File upload configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'server/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Import models
const Product = require('./models/Product');
const News = require('./models/News');
const Contact = require('./models/Contact');
const Quote = require('./models/Quote');

// Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({ message: 'Server is running', timestamp: new Date() });
});

// Products routes
app.get('/api/products', async (req, res) => {
  try {
    const { category, search, page = 1, limit = 10 } = req.query;
    const query = {};
    
    if (category && category !== 'all') {
      query.category = category;
    }
    
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }
    
    const products = await Product.find(query)
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .sort({ createdAt: -1 });
    
    const total = await Product.countDocuments(query);
    
    res.json({
      products,
      total,
      page: parseInt(page),
      pages: Math.ceil(total / limit)
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/products', upload.single('image'), async (req, res) => {
  try {
    const productData = req.body;
    if (req.file) {
      productData.image = `/uploads/${req.file.filename}`;
    }
    
    const product = new Product(productData);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// News routes
app.get('/api/news', async (req, res) => {
  try {
    const { category, search, page = 1, limit = 10 } = req.query;
    const query = {};
    
    if (category && category !== 'all') {
      query.category = category;
    }
    
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { tags: { $in: [new RegExp(search, 'i')] } }
      ];
    }
    
    const news = await News.find(query)
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .sort({ createdAt: -1 });
    
    const total = await News.countDocuments(query);
    
    res.json({
      news,
      total,
      page: parseInt(page),
      pages: Math.ceil(total / limit)
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/news/:id', async (req, res) => {
  try {
    const article = await News.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }
    res.json(article);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/news', upload.single('image'), async (req, res) => {
  try {
    const newsData = req.body;
    if (req.file) {
      newsData.image = `/uploads/${req.file.filename}`;
    }
    
    const article = new News(newsData);
    await article.save();
    res.status(201).json(article);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Contact routes
app.post('/api/contact', async (req, res) => {
  try {
    const contactData = req.body;
    const contact = new Contact(contactData);
    await contact.save();
    
    // Send email notification
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${contactData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${contactData.name}</p>
        <p><strong>Email:</strong> ${contactData.email}</p>
        <p><strong>Phone:</strong> ${contactData.phone}</p>
        <p><strong>Company:</strong> ${contactData.company || 'N/A'}</p>
        <p><strong>Subject:</strong> ${contactData.subject || 'N/A'}</p>
        <p><strong>Product Interest:</strong> ${contactData.productInterest || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${contactData.message}</p>
      `
    };
    
    await transporter.sendMail(mailOptions);
    
    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Quote routes
app.post('/api/quote', async (req, res) => {
  try {
    const quoteData = req.body;
    const quote = new Quote(quoteData);
    await quote.save();
    
    // Send email notification
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Quote Request from ${quoteData.name}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${quoteData.name}</p>
        <p><strong>Email:</strong> ${quoteData.email}</p>
        <p><strong>Phone:</strong> ${quoteData.phone}</p>
        <p><strong>Company:</strong> ${quoteData.company || 'N/A'}</p>
        <p><strong>Product:</strong> ${quoteData.product || 'N/A'}</p>
        <p><strong>Quantity:</strong> ${quoteData.quantity || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${quoteData.message}</p>
      `
    };
    
    await transporter.sendMail(mailOptions);
    
    res.status(201).json({ message: 'Quote request submitted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
