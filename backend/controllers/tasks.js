import db from "../db.js";
import jwt from "jsonwebtoken";

export const getTasks = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Не авторизирован!");

    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if (err) return res.status(403).json("Токен не валиден!");

        const q = "SELECT * FROM tasks WHERE userId=?";

        db.query(q, [userInfo.id], (err, data) => {
            if (err) return res.status(500).send(err);
            return res.status(200).json(data);
        });
    })
};

export const updateTask = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Не авторизированы!");
  
    jwt.verify(token, "jwtkey", (err, userInfo) => {
      if (err) return res.status(403).json("Токен не валиден!");
  
      const q =
        "UPDATE tasks SET `link`=? WHERE `id` = ?";
  
      const values = [req.body.link, req.body.id];
  
      db.query(q, values, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json("Задача обновлена успешно.");
      });
    });
};