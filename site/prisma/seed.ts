import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Database seeded (no default overrides).");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
