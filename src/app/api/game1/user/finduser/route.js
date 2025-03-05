import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function POST(request, { params }) {
  const body = await request.json();
  if (!body) {
    return;
  }
  if (!body.userphone) {
    return;
  }
  try {
    const user = await prisma.users.findUnique({
      where: { phone: body.userphone },
      include: {
        Game: true,
      },
    });
    if (!user) {
      return NextResponse.json({ success: false, msg: "User Not Found" });
    }
    return NextResponse.json({ success: true, msg: user });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      msg: "faild to create a user",
    });
  }
}
