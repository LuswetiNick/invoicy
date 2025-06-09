import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";

export const auth = betterAuth({
  appName: "Invoice App",
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
});
