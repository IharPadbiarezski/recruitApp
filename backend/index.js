import 'dotenv/config'
import express from "express"
import mysql from "mysql"

const app = express()

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE

})

app.listen(process.env.PORT, () => {
    console.log("hi")
})