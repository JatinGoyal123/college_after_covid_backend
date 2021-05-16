import express from "express";

import { getArrival, postArrival } from "../controllers/arrival.js";
import { protect } from "../middleware/auth.js";

const router = express.Router({ mergeParams: true });

router.get("/", getArrival);
router.post("/", protect, postArrival);

export default router;
