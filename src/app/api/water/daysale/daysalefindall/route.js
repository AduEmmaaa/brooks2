import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function GET(request, { params }) {
  try {
    const res = await prisma.daysale.findMany();
    return NextResponse.json({
      success: true,
      msg: res,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false, msg: "Faild to fetch" });
  }
}
