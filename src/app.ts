import "dotenv/config";
import express from "express";
import cors from "cors";

import AuthController from "./controller/AuthController";

import { errorLogger, errorResponser } from "./middleware/errorHandler";

const app = express();
const PORT = process.env.PORT || 8088;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/auth", AuthController);

app.use(errorLogger);
app.use(errorResponser);

app.listen(PORT, () => {
  console.log(`
  ################################################
  🛡️  Server listening on port: ${PORT}  🛡️
  ################################################
`);
});
