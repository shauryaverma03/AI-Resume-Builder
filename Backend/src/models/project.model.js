// models/Project.js
import mongoose from 'mongoose';

const { Schema } = mongoose;

const projectSchema = new Schema({
  projectName: {
    type: String
  },
  techStack: {
    type: [String]
  },
  projectSummary: {
    type: String
  }
}, { _id: false });

export default projectSchema;
