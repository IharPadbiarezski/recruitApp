import db from "../db.js";
import jwt from "jsonwebtoken";

export const getCompanies = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Не авторизирован!");

    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if (err) return res.status(403).json("Токен не валиден!");

        const q = "SELECT * FROM companies";

        db.query(q, [], (err, data) => {
            if (err) return res.status(500).send(err);

            return res.status(200).json(data);
        });
    })
};