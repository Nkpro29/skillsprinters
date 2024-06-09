import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: [true, "a job cannot exist without company name."],
  },
  designation: {
    type: String,
    required: [true, "A designation should be provided to the job."],
  },
  description: {
    type: String,
    required: [true, "job decription is necessary."],
  },
  skills: {
    type: [String],
    required: [true, "freelancer should know the skillsets."],
  },
  income: {
    type: Number,
    default: 0,
  },
  location: {
    type: String,
    enums: ["Remote", "On-site"],
    required: true,
    default: "Remote",
  },
});

const Job = mongoose.model("Job", jobSchema);

export default Job;
