import { Portfolio } from "@prisma/client";
import * as PortfolioRepository from "../repository/PortfolioRepository";

export const upsertPortfolio = async (portfolio: Portfolio) => {
  await PortfolioRepository.upsert(portfolio);

  return { message: "성공" };
};

export const getPortfolioList = async (param?: any) => {
  const manyPortfolio = await PortfolioRepository.findMany(param);
  console.log(param, manyPortfolio);
  return { message: "성공", data: manyPortfolio };
};

export const getUniquePortfolio = async (userCode: number) => {
  const uniquePortfolio = await PortfolioRepository.findUnique(userCode);

  return { message: "성공", data: uniquePortfolio };
};
