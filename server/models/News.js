const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Product Update', 'Company News', 'Certification', 'Equipment', 'Sustainability', 'Partnership', 'Industry News', 'Other']
  },
  author: {
    type: String,
    required: true,
    default: 'Editorial Team'
  },
  image: {
    type: String,
    default: ''
  },
  tags: [{
    type: String,
    trim: true
  }],
  featured: {
    type: Boolean,
    default: false
  },
  published: {
    type: Boolean,
    default: true
  },
  publishDate: {
    type: Date,
    default: Date.now
  },
  views: {
    type: Number,
    default: 0
  },
  likes: {
    type: Number,
    default: 0
  },
  shares: {
    type: Number,
    default: 0
  },
  seo: {
    metaTitle: String,
    metaDescription: String,
    keywords: [String]
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'published'
  }
}, {
  timestamps: true
});

// Indexes for better search performance
newsSchema.index({ title: 'text', description: 'text', content: 'text', tags: 'text' });
newsSchema.index({ category: 1 });
newsSchema.index({ featured: 1 });
newsSchema.index({ published: 1 });
newsSchema.index({ publishDate: -1 });
newsSchema.index({ status: 1 });

// Virtual for formatted publish date
newsSchema.virtual('formattedDate').get(function() {
  return this.publishDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
});

// Virtual for reading time estimation
newsSchema.virtual('readingTime').get(function() {
  const wordsPerMinute = 200;
  const wordCount = this.content.split(' ').length;
  return Math.ceil(wordCount / wordsPerMinute);
});

// Method to increment views
newsSchema.methods.incrementViews = function() {
  this.views += 1;
  return this.save();
};

// Method to get related articles
newsSchema.methods.getRelatedArticles = async function(limit = 3) {
  return await this.constructor.find({
    _id: { $ne: this._id },
    category: this.category,
    published: true,
    status: 'published'
  }).limit(limit);
};

// Static method to get featured articles
newsSchema.statics.getFeatured = function(limit = 3) {
  return this.find({ 
    featured: true, 
    published: true, 
    status: 'published' 
  }).sort({ publishDate: -1 }).limit(limit);
};

// Static method to get latest articles
newsSchema.statics.getLatest = function(limit = 10) {
  return this.find({ 
    published: true, 
    status: 'published' 
  }).sort({ publishDate: -1 }).limit(limit);
};

// Static method to get articles by category
newsSchema.statics.getByCategory = function(category, limit = 10) {
  return this.find({ 
    category, 
    published: true, 
    status: 'published' 
  }).sort({ publishDate: -1 }).limit(limit);
};

// Static method to get popular articles
newsSchema.statics.getPopular = function(limit = 5) {
  return this.find({ 
    published: true, 
    status: 'published' 
  }).sort({ views: -1 }).limit(limit);
};

module.exports = mongoose.model('News', newsSchema);
