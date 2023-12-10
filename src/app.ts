import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8088;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = express.Router();
router.get("/api", (req, res, next) => {
  res.json({ message: "welcome!" });
});

app.use("/", router);
app.listen(PORT, () => {
  console.log(`
  ################################################
  🛡️  Server listening on port: ${PORT}  🛡️
  ################################################
`);
});
