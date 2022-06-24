import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const course = await prisma.courses.update({
    where: {
      id: "dd6c6348-48d9-4cba-bd26-2cb6a8b564bf"
    },
    data: {
      duration: 300
    }
  })
  console.log(course);
}

main();