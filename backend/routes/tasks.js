import express from "express";
import {
  getTasks,
  updateTask
} from "../controllers/tasks.js";

const router = express.Router();

router.get("/", getTasks);
router.put("/", updateTask)

export default router;