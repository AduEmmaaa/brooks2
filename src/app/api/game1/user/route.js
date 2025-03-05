import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function POST(request, { params }) {
  const body = await request.json();
  if (!body) {
    return;
  }
  if (!body.username || !body.useremail || !body.userphone) {
    return;
  }
  try {
    const user = await prisma.users.findUnique({
      where: { phone: body.userphone },
    });
    if (!user) {
      const res = await prisma.users.create({
        data: {
          name: body.username,
          email: body.useremail,
          phone: body.userphone,
        },
      });
      return NextResponse.json({ success: true, msg: res });
    }
    return NextResponse.json({ success: false, msg: "user already exist" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      msg: "faild to create a user",
    });
  }
}
