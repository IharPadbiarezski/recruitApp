import express from "express"
import { changePassword, login, logout, register } from "../controllers/auth.js"

const router = express.Router()

router.post("/register", register)
router.post("/change-password", changePassword)
router.post("/login", login)
router.post("/logout", logout)

export default router