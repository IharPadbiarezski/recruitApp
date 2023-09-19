import express from "express";
import {
  getUsers,
  addUser,
  getHeads
} from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", addUser);
router.get("/heads", getHeads);

export default router;