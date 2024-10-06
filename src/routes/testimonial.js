import express from "express";
import {
  addTestimonials,
  deleteTestimonial,
  getAllTestimonials,
  getTestimonialByIds,
  updateTestimonial,
} from "../controllers/testimonialController.js";
import auth from "../middleware/auth.js";
import roleBaseAuth from "../middleware/roleBaseAuth.js";

const router = express.Router();

router.get("/", getAllTestimonials);

router.get("/:id", getTestimonialByIds);

router.post("/", auth, addTestimonials);

router.put("/:id", auth, updateTestimonial);

router.delete("/:id", [auth, roleBaseAuth("ADMIN")], deleteTestimonial);

export default router;
