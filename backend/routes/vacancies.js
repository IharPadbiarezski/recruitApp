import express from "express";
import {
  addVacancy,
  deleteVacancy,
  getVacancy,
  getVacancies,
  updateVacancy,
} from "../controllers/vacancies.js";

const router = express.Router();

router.get("/", getVacancies);
router.get("/:id", getVacancy);
router.post("/", addVacancy);
router.delete("/:id", deleteVacancy);
router.put("/:id", updateVacancy);

export default router;