import path from "path";
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import morgan from "morgan";
import cors from "cors"
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import productRoutes from "./routes/productRoutes.js";
//import courseRoutes from "./routes/CourseRoutes.js"


import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import todos from "./routes/todos.route.js"
import fileroutes from './routes/fileroutes.js'
dotenv.config();

connectDB();

const app = express();

if (process.env.NODE_ENV === "developement") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(cors())

app.use("/api/products", productRoutes);
//app.use("/api/courses",courseRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);
app.use(todos);
app.use(fileroutes)
const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is Runn....");
  });
}

app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

//runingin
