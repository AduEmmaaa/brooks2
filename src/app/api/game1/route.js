import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(request, { params }) {
  const body = await request.json();

  try {
    const res = await prisma.game.create({ data: body });
    return Response.json({ success: true, msg: res });
  } catch (error) {
    console.log(error);
    return Response.json({ success: false, msg: "faild to create game" });
  }
}
