import mongoose from "mongoose";

const freelancerSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  address: {
    type: String,
    default: null,
  },
  phone: {
    type: String,
    default: null,
  },
  idProof: {
    type: [String],
    required: [true, "id-proof is required."],
  },
  jobPreferences: {
    jobFields: {
      type: [String],
    },
    incomePreference: {
      type: String,
    },
    locationPreference: {
      type: [String],
    },
  },
  skills: {
    type: [String],
    required: [true, "skills are required."],
  },
  highestQualification: {
    type: String,
    default: "BTech",
  },
  course: {
    type: String,
  },
  workEx: {
    type: String,
  },
});

const Freelancer = mongoose.model("Freelancer", freelancerSchema);

export default Freelancer;
