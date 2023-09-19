import db from "../db.js";
import jwt from "jsonwebtoken";

export const getAccessLevels = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Не авторизирован!");

    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if (err) return res.status(403).json("Токен не валиден!");

        const q = "SELECT * FROM access_levels";

        db.query(q, [], (err, data) => {
            if (err) return res.status(500).send(err);

            data = [{id: -1, name: "Не выбрана"}].concat(data);
            return res.status(200).json(data);
        });
    })
};