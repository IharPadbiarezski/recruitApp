import db from "../db.js";
import jwt from "jsonwebtoken";

export const getVacancies = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Не авторизирован!");

    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if (err) return res.status(403).json("Токен не валиден!");

        const q = "SELECT CONCAT(u.firstName, ' ', u.lastName) AS headName, CONCAT(r.firstName, ' ', r.lastName) AS responsibleName, c.name AS companyName, v.name AS name FROM vacancies AS v LEFT JOIN users AS u ON v.headId = u.id LEFT JOIN users AS r ON v.responsibleId = r.id LEFT JOIN companies c ON c.id=v.companyId";

        db.query(q, [], (err, data) => {
            if (err) return res.status(500).send(err);

            return res.status(200).json(data);
        });
    })
};

export const getVacancy = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Не авторизирован!");

    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if (err) return res.status(403).json("Токен не валиден!");

        const q =
        "SELECT * FROM vacanties WHERE id = ? ";

        db.query(q, [req.params.id], (err, data) => {
            if (err) return res.status(500).json(err);

            return res.status(200).json(data[0]);
        });
    })
};

export const addVacancy = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Не авторизирован!");
  
    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if (err) return res.status(403).json("Токен не валиден!");
  
      const q =
        "INSERT INTO vacancies(`name`, `companyId`, `passport`) VALUES (?)";
  
      const values = [
        req.body.name,
        req.body.companyId,
        req.body.passport || "",
        // req.body.headId || "",
        // req.body.responsibleId || "",
      ];
  
      db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        data.message = "Вакансия создана успешно."
        return res.json(data);
      });
    });
  };
  
  export const deleteVacancy = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Не авторизирован!");
  
    jwt.verify(token, "jwtkey", (err, userInfo) => {
      if (err) return res.status(403).json("Токен не валиден!");
  
      const vacancyId = req.params.id;
      const q = "DELETE FROM vacancies WHERE `id` = ?";
  
      db.query(q, [vacancyId], (err, data) => {
        if (err) return res.status(403).json("Вы не можете удалить вакансию!");
  
        return res.json("Вакансия удалена успешно!");
      });
    });
  };
  
  export const updateVacancy = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Не авторизированы!");
  
    jwt.verify(token, "jwtkey", (err, userInfo) => {
      if (err) return res.status(403).json("Токен не валиден!");
  
      const vacancyId = req.params.id;
      const q =
        "UPDATE vacanсies SET `name`=?, `companyId`, `passport`, `headId`, `responsibleId` WHERE `id` = ?";
  
      const values = [req.body.name, req.body.companyId, req.body.passport, req.body.headId, req.body.responsibleId, vacancyId];
  
      db.query(q, [...values, vacancyId], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json("Вакансия обновлена успешно.");
      });
    });
  };

  