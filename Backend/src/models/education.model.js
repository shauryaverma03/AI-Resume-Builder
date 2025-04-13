// models/Education.js
import mongoose from "mongoose";

const { Schema } = mongoose;

const educationSchema = new Schema({
  universityName: {
    type: String,
    default: "",
  },
  degree: {
    type: String,
    default: "",
  },
  major: {
    type: String,
    default: "",
  },
  startDate: {
    type: String,
    default: null,
  },
  endDate: {
    type: String,
    default: null,
  },
  description: {
    type: String,
    default: "",
  },
  grade: {
    type: String,
    default: "",
  },
  gradeType: {
    type: String,
    default: "",
  },
});

export default educationSchema;
