import bodyParser from "body-parser";
import connectDB from "./routes/database.js";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import testimonial from "./routes/testimonial.js";
import auth from "./routes/auth.js";
import resume from "./routes/resume.js";
import cookieParser from "cookie-parser";


const app = express();

dotenv.config();

connectDB();

app.use(morgan("dev"));

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cookieParser());

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send({
    appName: "portfolio",
    version: "1.0.0",
    port: PORT,
  });
});

app.use("/api/testimonial", testimonial);

app.use("/api/auth", auth);

app.use("/api/resume", resume)

app.listen(PORT, (err, res) => {
  console.log(`Server running at port ${PORT}.....`);
});
