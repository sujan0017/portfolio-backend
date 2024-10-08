import express from "express";
import { login, logOut, register } from "../controllers/authController.js";

const router = express.Router();


router.post("/register", register);

router.post("/login", login);

router.post("/logout", logOut);


export default router;
