import express from "express";

import { getVaccination, postVaccination } from "../controllers/vaccination.js";
import { protect } from "../middleware/auth.js";

const router = express.Router({ mergeParams: true });

router.get("/", getVaccination);
router.post("/", protect, postVaccination);

export default router;
