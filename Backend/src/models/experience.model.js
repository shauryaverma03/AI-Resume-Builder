// models/Experience.js
import mongoose from 'mongoose';

const { Schema } = mongoose;

const experienceSchema = new Schema({
  title: {
    type: String
  },
  companyName: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  currentlyWorking: {
    type: Boolean
  },
  workSummary: {
    type: String
  }
}, { _id: false });

export default experienceSchema;
