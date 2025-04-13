import mongoose from "mongoose";
import educationSchema from "./education.model.js";
const resumeSchema = new mongoose.Schema({
  firstName: { type: String, default: "" },
  lastName: { type: String, default: "" },
  email: { type: String, default: "" },
  title: { type: String, required: true },
  summary: { type: String, default: "" },
  jobTitle: { type: String, default: "" },
  phone: { type: String, default: "" },
  address: { type: String, default: "" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  experience: [
    {
      title: { type: String },
      companyName: { type: String },
      city: { type: String },
      state: { type: String },
      startDate: { type: String },
      endDate: { type: String },
      currentlyWorking: { type: String },
      workSummary: { type: String },
    },
  ],
  education: [
    {
      type: educationSchema,
    },
  ],
  skills: [
    {
      name: { type: String },
      rating: { type: Number },
    },
  ],
  projects: [
    {
      projectName: { type: String },
      techStack: { type: String },
      projectSummary: { type: String },
    },
  ],
  themeColor: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Resume = mongoose.model("Resume", resumeSchema);

export default Resume;
