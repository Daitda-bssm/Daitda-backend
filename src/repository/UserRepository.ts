import { User } from "@prisma/client";
import { prisma } from "../global/prisma";

export const upsert = async (user: User) => {
  const result = await prisma.user.upsert({
    where: {
      userCode: user.userCode,
    },
    update: {
      name: user.name,
      profileUrl: user.profileUrl,
      role: user.role,
    },
    create: {
      userCode: user.userCode,
      name: user.name,
      profileUrl: user.profileUrl,
      role: user.role,
    },
  });
  return result;
};
