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

export const findMany = async (param?: any) => {
  if (!param) {
    return prisma.portfolio.findMany();
  }

  const whereClause: any = {};
  if (param.grade) {
    whereClause.grade = {
      in: [Number(param.grade)],
    };
  }
  if (param.field) {
    whereClause.field = {
      in: [param.field],
    };
  }
  if (param.framework) {
    whereClause.framework = {
      in: [param.framework],
    };
  }
  if (param.name) {
    whereClause.name = {
      in: [param.name],
    };
  }
  return prisma.portfolio.findMany({
    where: whereClause,
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
