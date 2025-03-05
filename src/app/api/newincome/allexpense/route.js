import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request, { params }) {
  const res = await prisma.expense.findMany();
  return Response.json({ success: true, msg: res });
}
