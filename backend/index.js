import express from "express"
import authRoutes from "./routes/auth"
import userRoutes from "./routes/users"
import "dotenv/config"

const app = express()

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE

})

app.use(express.json())
app.use("api/auth", authRoutes)
app.use("api/users", userRoutes)

app.listen(process.env.PORT, () => {
    console.log("hi")
})