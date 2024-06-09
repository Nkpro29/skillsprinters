import Job from "../models/jobModel.js";
import APIFeatures from "../utils/apiFeatures.js";

const createJob = async (req, res) => {
  try {
    const { companyName, designation, description, skills, income, location } =
      req.body;
    const job = {
      companyName: companyName,
      designation: designation,
      description: description,
      skills: skills,
      income: income,
      location: location,
    };
    await Job.create({
      companyName: companyName,
      designation: designation,
      description: description,
      skills: skills,
      income: income,
      location: location,
    });

    res.status(201).json({
      status: "success",
      message: "job is created successfully.",
      data: job,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "internal server error.",
    });
  }
};

const getAllJobs = async (req, res) => {
  try {
    const features = new APIFeatures(Job.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .pagination();
    const jobs = await features.query;
    console.log("jobs ==> ",jobs);

    res.status(200).json({
      status: "success",
      data: jobs,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "internal server error.",
    });
  }
};

const getJob = async (req, res) => {
  try {
    const  jobId  = req.params.id;
    console.log("jobId ==> ", jobId);
    const job = await Job.findById(jobId);
    console.log(job);

    if (!job) {
      return res.status(404).json({
        status: "fail",
        message: "job not found",
      });
    }
    return res.status(200).json({
      status: "success",
      data: job,
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "internal server error.",
    });
  }
};

const updateJobDetails = async (req, res) => {
  try {
    const jobId = req.params.id;

    if (!jobId) {
      return res.status(404).json({
        status: "fail",
        message: "job not found",
      });
    }
    const { updatedIncome, updatedLocation, updatedSkills } = req.body;

    const updatedJob = {
      income: updatedIncome,
      location: updatedLocation,
      skills: updatedSkills,
    };

    const options = { new: true, useFindAndModify: false };

    const result = await Job.findByIdAndUpdate(jobId, updatedJob, options);

    return res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "internal server error.",
    });
  }
};

const deleteJobs = async (req, res) => {
  try {
    const jobId = req.params.id;
    if (!jobId) {
      return res.status(404).json({
        status: "fail",
        message: "job not found",
      });
    }
    const deletedJob = await Job.findByIdAndDelete(jobId);
    return res.status(200).json({
      status: "success",
      deletedJob: deletedJob,
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "internal server error.",
    });
  }
};

export default { createJob, getAllJobs, getJob, updateJobDetails, deleteJobs };
