import { json } from "express";
import Freelancer from "../models/freelancerModel.js";

const postName = async (req, res) => {
  const userEmail = req.decodedToken;
  const { name } = req.body;
  try {
    await Freelancer.create({
      email: userEmail,
      name: name,
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "internal server error.",
    });
  }
};

const jobPreferences = async (req, res) => {
  const userEmail = req.decodedToken;
  console.log(userEmail);

  const { job_fields, preferedIncome, preferedLocation } = req.body;

  try {
    const result = await Freelancer.findByIdAndUpdate(
      { email: userEmail },
      {
        jobFields: job_fields,
        preferedIncome: preferedIncome,
        preferedLocation: preferedLocation,
      },
      { new: true }
    );
    console.log("result ==> ", result);
    return res.status(200).json({
      status: "success",
      message: "job preferences are successfully stored.",
      jobPreferencesDetails: {
        jobFields: job_fields,
        preferedIncome: preferedIncome,
        preferedLocation: preferedLocation,
      },
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "internal server error.",
    });
  }
};

const personalDetails = async (req, res) => {
  const userEmail = req.decodedToken;
  const { address, phone } = req.body;
  const idProof = req.file ? req.file.path : null;

  try {
    const result = await Freelancer.findOneAndUpdate(
      { email: userEmail },
      {
        address: address,
        phone: phone,
        idProof: idProof,
      },
      { new: true }
    );

    return res.status(200).json({
      status: "success",
      message: "personal details are successfully stored.",
      personalDetails: {
        address: address,
        phone: phone,
        idProof: idProof,
      },
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "internal server error.",
    });
  }
};

const professionalDetails = async (req, res) => {
  const userEmail = req.decodedToken;
  const { skills, highestQualification, course, workEx } = req.body;

  try {
    const result = await Freelancer.findOneAndUpdate(
      { email: userEmail },
      {
        skills: skills,
        highestQualification: highestQualification,
        course: course,
        workEx: workEx,
      },
      { new: true }
    );

    res.status(200).json({
      status: "success",
      data: {
        skills: skills,
        highestQualification: highestQualification,
        course: course,
        workEx: workEx,
      },
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "internal server error.",
    });
  }
};

export default {
  postName,
  jobPreferences,
  personalDetails,
  professionalDetails,
};
