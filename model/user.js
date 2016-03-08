'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.model('User', new Schema({
  email: {
    type: String,
    required: true,
    maxlength: 255
  },
  username: {
    type: String,
    required: true,
    maxlength: 255
  },
  gender: {
    type: String,
    enum: ['U', 'M', 'F']
  },
  avatar: {
    type: String,
    maxlength: 255
  }
  birthdate: Date,
  created: Date,
  updated: Date
}, {
  collection: 'user'
}));

mongoose.model('User').pre('save', (next) => {
  this.updated = new Date();
  if (!this.created) this.created = this.updated;
  return next();
});
