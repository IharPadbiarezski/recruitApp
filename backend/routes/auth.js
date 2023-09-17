import express from "express"
import { setPassword, login, logout, register, restorePassword } from "../controllers/auth.js"

const router = express.Router()

router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)
router.post("/setPassword", setPassword)
router.post("/restorePassword", restorePassword)

export default router