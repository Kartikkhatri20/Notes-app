const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: 'User',
    required: true, // Ensure user is required to associate a note with a user
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Middleware to update the 'updatedAt' field whenever the note is modified
NoteSchema.pre('save', function(next) {
  this.updatedAt = Date.now(); // Update 'updatedAt' to the current time before saving
  next();
});

// You can also add an index on 'user' if you plan to query by user frequently
NoteSchema.index({ user: 1 });

module.exports = mongoose.model('Note', NoteSchema);
