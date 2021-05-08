import express from "express";
import { register, login, getMe } from "../controllers/users.js";
import { protect } from "../middleware/auth.js";
const router = express.Router();
router.post("/register", register);
router.post("/login", login);
router.get("/getMe", protect, getMe);
export default router;
