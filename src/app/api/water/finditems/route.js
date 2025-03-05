import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET(request, { params }) {
  try {
    const res = await prisma.waterItems.findMany();
    const res2 = await prisma.waterItems2.findMany();

    return NextResponse.json({ success: true, msg: res, msg2: res2 });
  } catch (error) {
    return NextResponse.json({ success: false, msg: error });
  }
}
