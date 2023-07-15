import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import cookieParser from "cookie-parser";
import multer from "multer";
import { config } from "dotenv";
config();

const app = express();

app.use(express.json());
app.use(cookieParser());
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/Server/uploads", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use("/Server/auth", authRoutes);
app.use("/Server/users", userRoutes);
app.use("/Server/posts", postRoutes);

app.use("/Server/uploads", express.static("uploads"));

app.listen(8800, () => {
  console.log("Connected!");
});
