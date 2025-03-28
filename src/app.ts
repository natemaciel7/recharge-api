import express from "express";
import dotenv from "dotenv";
import router from "./routers/index.router";
import errorHandler from "./middlewares/errorHandler";

dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Recharge está no ar! 🚀");
});

app.use(router);
app.use(errorHandler);

export default app;
