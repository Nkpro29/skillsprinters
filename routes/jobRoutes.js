import express from "express";
import jobController from "../controllers/jobControllers.js";
import isAuth from "../middlewares/isAuth.js";

const router = express.Router();

router.post("/create", isAuth, jobController.createJob);
router.get("/", isAuth, jobController.getAllJobs);
router.get("/:id", isAuth, jobController.getJob);
router.put("/edit/:id", isAuth, jobController.updateJobDetails);
router.delete("/delete/:id", isAuth, jobController.deleteJobs);

export default router;
