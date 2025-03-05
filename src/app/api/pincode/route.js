import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function POST(request, { params }) {
  const pin = await request.json();

  try {
    const res = await prisma.passcode.findUnique({
      where: {
        passcode: pin,
      },
    });
    if (!res) {
      return NextResponse.json({ success: false, msg: "Wrong Pin!" });
    }

    return NextResponse.json({ success: true, msg: res });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false, msg: error });
  }
}
