import { prisma } from "../global/prisma";
import { Portfolio } from "@prisma/client";

export const upsert = async (portfolio: Portfolio) => {
  const result = await prisma.portfolio.upsert({
    where: {
      userCode: portfolio.userCode,
    },
    create: {
      ...portfolio,
    },
    update: {
      ...portfolio,
    },
  });
  return result;
};

export const findAll = async () => {
  const result = await prisma.portfolio.findMany();
  return result;
};

export const findSome = async (param?: any) => {
  return prisma.portfolio.findMany({
    where: {
      grade: {
        in: param.grade,
      },
      field: {
        in: param.field,
      },
      framework: {
        in: param.framework,
      },
      name: {
        in: param.name,
      },
    },
  });
};

export const findUnique = async (userCode: number) => {
  const result = await prisma.portfolio.findUnique({
    where: {
      userCode: userCode,
    },
  });
  return result;
};
