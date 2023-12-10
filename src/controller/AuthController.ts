import { Router, Request, Response } from "express";
import { generateError } from "../middleware/errorHandler";
import * as AuthService from "../service/AuthService";
import asyncify from "express-asyncify";

const router = asyncify(Router());

router.post("/", async (req: Request, res: Response) => {
  const { code } = req.query;

  if (!code) {
    generateError({ status: 400, message: "잘못된 요청" });
    return;
  }

  const response = await AuthService.login(code as string);

  return res.status(200).send(response);
});

export default router;
