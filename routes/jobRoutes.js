import express from "express";
import jobController from "../controllers/jobControllers.js";

const router = express.Router();

router.post("/create", jobController.createJob);
router.get("/", jobController.getAllJobs);
router.get("/:id", jobController.getJob);
router.put("/edit/:id", jobController.updateJobDetails);
router.delete("/delete/:id", jobController.deleteJobs);

export default router;
