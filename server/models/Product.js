const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ['stainless-steel', 'carbon-steel', 'aluminum', 'copper', 'galvanized', 'other']
  },
  description: {
    type: String,
    required: true
  },
  content: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  specifications: [{
    type: String
  }],
  features: [{
    type: String
  }],
  price: {
    type: String,
    default: 'Contact for Quote'
  },
  inStock: {
    type: Boolean,
    default: true
  },
  rating: {
    type: Number,
    default: 4.5,
    min: 0,
    max: 5
  },
  dimensions: {
    length: String,
    width: String,
    height: String,
    thickness: String,
    diameter: String
  },
  material: {
    grade: String,
    composition: String,
    properties: [String]
  },
  applications: [{
    type: String
  }],
  processing: {
    cutting: Boolean,
    bending: Boolean,
    welding: Boolean,
    surfaceTreatment: Boolean,
    custom: Boolean
  },
  availability: {
    inStock: Boolean,
    leadTime: String,
    minimumOrder: String
  },
  certifications: [{
    type: String
  }],
  tags: [{
    type: String
  }],
  featured: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'discontinued'],
    default: 'active'
  }
}, {
  timestamps: true
});

// Indexes for better search performance
productSchema.index({ name: 'text', description: 'text', tags: 'text' });
productSchema.index({ category: 1 });
productSchema.index({ featured: 1 });
productSchema.index({ status: 1 });

// Virtual for formatted category name
productSchema.virtual('categoryName').get(function() {
  const categoryNames = {
    'stainless-steel': 'Stainless Steel',
    'carbon-steel': 'Carbon Steel',
    'aluminum': 'Aluminum',
    'copper': 'Copper',
    'galvanized': 'Galvanized Steel',
    'other': 'Other'
  };
  return categoryNames[this.category] || this.category;
});

// Method to get related products
productSchema.methods.getRelatedProducts = async function(limit = 4) {
  return await this.constructor.find({
    _id: { $ne: this._id },
    category: this.category,
    status: 'active'
  }).limit(limit);
};

// Static method to get featured products
productSchema.statics.getFeatured = function(limit = 6) {
  return this.find({ featured: true, status: 'active' }).limit(limit);
};

// Static method to get products by category
productSchema.statics.getByCategory = function(category, limit = 10) {
  return this.find({ category, status: 'active' }).limit(limit);
};

module.exports = mongoose.model('Product', productSchema);
