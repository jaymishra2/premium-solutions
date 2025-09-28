const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  company: {
    type: String,
    trim: true
  },
  subject: {
    type: String,
    trim: true
  },
  message: {
    type: String,
    required: true,
    trim: true
  },
  productInterest: {
    type: String,
    trim: true
  },
  source: {
    type: String,
    default: 'website',
    enum: ['website', 'phone', 'email', 'referral', 'other']
  },
  status: {
    type: String,
    enum: ['new', 'in-progress', 'responded', 'closed'],
    default: 'new'
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high', 'urgent'],
    default: 'medium'
  },
  assignedTo: {
    type: String,
    trim: true
  },
  response: {
    type: String,
    trim: true
  },
  responseDate: {
    type: Date
  },
  followUpDate: {
    type: Date
  },
  notes: [{
    note: String,
    addedBy: String,
    addedAt: {
      type: Date,
      default: Date.now
    }
  }],
  tags: [{
    type: String,
    trim: true
  }],
  ipAddress: {
    type: String
  },
  userAgent: {
    type: String
  },
  referrer: {
    type: String
  }
}, {
  timestamps: true
});

// Indexes for better search performance
contactSchema.index({ email: 1 });
contactSchema.index({ status: 1 });
contactSchema.index({ priority: 1 });
contactSchema.index({ createdAt: -1 });
contactSchema.index({ name: 'text', company: 'text', message: 'text' });

// Virtual for formatted phone number
contactSchema.virtual('formattedPhone').get(function() {
  // Basic phone number formatting
  const phone = this.phone.replace(/\D/g, '');
  if (phone.length === 11 && phone.startsWith('1')) {
    return `+1 (${phone.slice(1, 4)}) ${phone.slice(4, 7)}-${phone.slice(7)}`;
  }
  return this.phone;
});

// Virtual for time since submission
contactSchema.virtual('timeSinceSubmission').get(function() {
  const now = new Date();
  const diff = now - this.createdAt;
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(hours / 24);
  
  if (days > 0) {
    return `${days} day${days > 1 ? 's' : ''} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else {
    return 'Just now';
  }
});

// Method to mark as responded
contactSchema.methods.markAsResponded = function(response, responder) {
  this.status = 'responded';
  this.response = response;
  this.responseDate = new Date();
  this.notes.push({
    note: `Response sent by ${responder}`,
    addedBy: responder
  });
  return this.save();
};

// Method to add note
contactSchema.methods.addNote = function(note, addedBy) {
  this.notes.push({
    note,
    addedBy
  });
  return this.save();
};

// Method to update status
contactSchema.methods.updateStatus = function(status, updatedBy) {
  this.status = status;
  this.notes.push({
    note: `Status changed to ${status}`,
    addedBy: updatedBy
  });
  return this.save();
};

// Static method to get new contacts
contactSchema.statics.getNew = function(limit = 50) {
  return this.find({ status: 'new' }).sort({ createdAt: -1 }).limit(limit);
};

// Static method to get contacts by status
contactSchema.statics.getByStatus = function(status, limit = 50) {
  return this.find({ status }).sort({ createdAt: -1 }).limit(limit);
};

// Static method to get contacts by priority
contactSchema.statics.getByPriority = function(priority, limit = 50) {
  return this.find({ priority }).sort({ createdAt: -1 }).limit(limit);
};

// Static method to get contacts requiring follow-up
contactSchema.statics.getFollowUpRequired = function() {
  return this.find({
    followUpDate: { $lte: new Date() },
    status: { $in: ['new', 'in-progress'] }
  }).sort({ followUpDate: 1 });
};

// Static method to get contact statistics
contactSchema.statics.getStats = async function() {
  const stats = await this.aggregate([
    {
      $group: {
        _id: '$status',
        count: { $sum: 1 }
      }
    }
  ]);
  
  const total = await this.countDocuments();
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayCount = await this.countDocuments({ createdAt: { $gte: today } });
  
  return {
    total,
    today: todayCount,
    byStatus: stats.reduce((acc, stat) => {
      acc[stat._id] = stat.count;
      return acc;
    }, {})
  };
};

module.exports = mongoose.model('Contact', contactSchema);
