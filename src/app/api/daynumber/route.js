import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(request, { params }) {
  try {
    const res = await prisma.passcode.findMany();
    return Response.json({ success: true, msg: res });
  } catch (error) {
    console.log(error);
    return Response.json({ success: true, msg: "hello" });
  }
}
