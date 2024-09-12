import express from "express";
import profileController from "../controllers/profileController.js";
import isAuth from "../middlewares/isAuth.js";
import multer from "multer";
const upload = multer({ dest: "uploads/" });

const router = express.Router();

router.post("/name", isAuth, profileController.postName);
router.post("/jobpreferences", isAuth, profileController.jobPreferences);
router.post(
  "/personaldetails",
  isAuth,
  upload.single("idProof"),
  profileController.personalDetails
);
router.post("/professionaldetails", isAuth, profileController.professionalDetails);

export default router;
