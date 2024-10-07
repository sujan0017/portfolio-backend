import { downloadResume, getResume } from "../controllers/resumeController.js";
import express from "express";

const router = express.Router();


router.get("/", getResume);

router.get("/download", downloadResume);



export default router;
