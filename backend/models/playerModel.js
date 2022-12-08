import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PlayerSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Number
  },
  team: {
    type: String
  },
  stats: {
    speed: {
      type: Number,
      enum: [0, 1, 2, 3]
    },
    strength: {
      type: Number,
      enum: [0, 1, 2, 3]
    },
    endurance: {
      type: Number,
      enum: [0, 1, 2, 3]
    },
    ability: {
      type: Number,
      enum: [0, 1, 2, 3]
    },
    tactical: {
      type: Number,
      enum: [0, 1, 2, 3]
    },
  },
  createDate: {
    type: Date,
    default: Date.now
  }
});