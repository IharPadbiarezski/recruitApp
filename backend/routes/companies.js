import express from "express";
import {
  getCompanies
} from "../controllers/companies.js";

const router = express.Router();

router.get("/", getCompanies);

export default router;