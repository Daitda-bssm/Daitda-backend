import { Portfolio } from "@prisma/client";
import * as PortfolioRepository from "../repository/PortfolioRepository";

export const upsertPortfolio = async (portfolio: Portfolio) => {
  await PortfolioRepository.upsert(portfolio);

  return { message: "성공" };
};

export const getAllPortfolio = async () => {
  const allPortfolio = await PortfolioRepository.findAll();

  return { message: "성공", data: allPortfolio };
};

export const getSomePortfolio = async (param?: any) => {
  const somePortfolio = await PortfolioRepository.findSome(param);

  return { message: "성공", data: somePortfolio };
};

export const getUniquePortfolio = async (userCode: number) => {
  const uniquePortfolio = await PortfolioRepository.findUnique(userCode);

  return { message: "성공", data: uniquePortfolio };
};
