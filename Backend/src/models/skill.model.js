// models/Skill.js
import mongoose from 'mongoose';

const { Schema } = mongoose;

const skillSchema = new Schema({
  name: {
    type: String
  },
  rating: {
    type: Number
  }
}, { _id: false });

export default skillSchema;
