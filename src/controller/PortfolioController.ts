import { Router, Request, Response } from "express";
import * as PortfolioService from "../service/PortfolioService";
import { jwtDecode } from "jwt-decode";
import { generateError } from "../middleware/errorHandler";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  const { authorization } = req.headers;
  const {
    name,
    profileUrl,
    intro,
    field,
    major,
    grade,
    framework,
    github,
    notion,
    velog,
    skill,
    project,
    award,
    certificate,
  } = req.body;

  if (!authorization) {
    generateError({ message: "토큰이 비어 있습니다", status: 403 });
    return;
  }

  const token = authorization.split("Bearer ")[1];
  const decodedJwt = jwtDecode<{ userCode: number }>(token);

  const portfolio = {
    userCode: decodedJwt.userCode,
    name: name,
    profileUrl: profileUrl,
    intro: intro,
    field: field,
    major: major,
    grade: grade,
    framework: framework,
    github: github,
    notion: notion,
    velog: velog,
    skill: skill,
    project: project,
    award: award,
    certificate: certificate,
  };

  const response = await PortfolioService.upsertPortfolio(portfolio);

  return res.status(200).send(response);
});

router.get("/", async (req: Request, res: Response) => {
  const response = await PortfolioService.getAllPortfolio();

  return res.status(200).send(response);
});

router.get("/", async (req: Request, res: Response) => {
  const { param } = req.query;

  const response = await PortfolioService.getSomePortfolio(param);

  return res.status(200).send(response);
});

router.get("/", async (req: Request, res: Response) => {
  const { userCode } = req.params;

  const response = await PortfolioService.getUniquePortfolio(Number(userCode));

  return res.status(200).send(response);
});

export default router;
