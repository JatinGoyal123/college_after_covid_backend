import express from "express";
import { register, login, getMe } from "../controllers/users.js";
import { protect } from "../middleware/auth.js";
import Users from "../models/Users.js";

import arrivalRouter from "./arrival.js";
import vaccinationRouter from "./vaccination.js";
const router = express.Router();
router.use("/:userId/arrival", arrivalRouter);
router.use("/:userId/vaccination", vaccinationRouter);
router.post("/register", register);
router.post("/login", login);
router.get("/getMe", protect, getMe);
export default router;
