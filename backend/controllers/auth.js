import db from "../db.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer"

export const register = (req, res) => {

    // Check existing user
    const q = "SELECT * FROM users WHERE email = ? OR username = ?"
    db.query(q, [req.body.email, req.body.username], (err, data) => {
        if (err) return res.json(err);
        if (data.length) return res.status(409).json("User already exists");
        // Hash the password and create a user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO users (`username`, `email`, `password`) VALUES (?)"
        const values = [
            req.body.username,
            req.body.email,
            hash
        ]

        db.query(q, [values], (err, data) => {
            if (err) return res.json(err);
            return res.status(200).json("User has been created.")
        })
    })
};

export const login = (req, res) => {
  // Check user
  const q = "SELECT * FROM users WHERE email = ?";

  db.query(q, [req.body.email], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("Эл. почта или пароль введены неверно.");

    //Check password
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!isPasswordCorrect)
      return res.status(400).json("Эл. почта или пароль введены неверно.");

    const token = jwt.sign({ id: data[0].id }, "jwtkey");
    const { password, ...other } = data[0];

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(other);
  });
};

export const logout = (req, res) => {
    res.clearCookie("access_token",{
        sameSite: "none",
        secure: true
      }).status(200).json("User has been logged out.")
};

export const restorePassword = (req, res) => {
  // Check existing user
  const q = "SELECT * FROM users WHERE email = ?"
    db.query(q, [req.body.email], (err, data) => {
        if (err) return res.json(err);
        if (data.length === 0) return res.status(404).json("Нет пользователя с такой эл. почтой.");

        // TODO send email , generate link to restore the password, check link


        db.query(q, [values], (err, data) => {
            if (err) return res.json(err);
            return res.status(200).json(`Проверьте свою почту! Мы отправили вам ссылку для сброса пароля на ${req.body.email}`)
        })
    })
}

export const setPassword = (req, res) => {
  // Check if passwords are the same
  if (req.body.password !== req.body.confirmPassword) return res.status(404).json("Пароли не совпадают.");

  // Check if there is an user

  // TODO get from front user id to update password

  const q = "UPDATE users SET password = ? WHERE id = ?"

  db.query(q, [req.body.passwor, ], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json("Пароль установлен успешно.");
  })
}