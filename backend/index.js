import express from "express"
import cookieParser from "cookie-parser";
import multer from "multer";
import accessLevelsRoutes from "./routes/accessLevels.js"
import authRoutes from "./routes/auth.js"
import companiesRoutes from "./routes/companies.js"
import rolesRoutes from "./routes/roles.js"
import usersRoutes from "./routes/users.js"
import vacantiesRoutes from "./routes/vacancies.js"
import "dotenv/config"

const app = express()

app.use(express.json());
app.use(cookieParser());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../client/public/upload");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    },
  });
  
  const upload = multer({ storage });
  
  app.post("/api/upload", upload.single("file"), function (req, res) {
    const file = req.file;
    res.status(200).json(file.filename);
  });

app.use("/accessLevels", accessLevelsRoutes)
app.use("/auth", authRoutes)
app.use("/companies", companiesRoutes)
app.use("/roles", rolesRoutes)
app.use("/users", usersRoutes)
app.use("/vacancies", vacantiesRoutes)

app.listen(process.env.PORT, () => {
    console.log("Connected!")
})