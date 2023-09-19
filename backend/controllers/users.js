import db from "../db.js";
import jwt from "jsonwebtoken";

export const getUsers = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Не авторизирован!");

    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if (err) return res.status(403).json("Токен не валиден!");

        const q = "SELECT CONCAT(u.firstName, ' ', u.lastName) AS fullName, u.email AS email, u.img AS img, CONCAT(h.firstName, ' ', h.lastName) AS headName, r.name AS roleName, a.name AS accessLevelName FROM users u LEFT JOIN users h ON u.headId=h.id LEFT JOIN roles r ON u.roleId=r.id LEFT JOIN access_levels a ON u.accessLevelId=a.id";

        db.query(q, [], (err, data) => {
            if (err) return res.status(500).send(err);
            return res.status(200).json(data);
        });
    })
};