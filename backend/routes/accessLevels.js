import express from "express";
import {
  getAccessLevels
} from "../controllers/accessLevels.js";

const router = express.Router();

router.get("/", getAccessLevels);

export default router;