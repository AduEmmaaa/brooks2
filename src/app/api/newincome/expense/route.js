import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function POST(request, { params }) {
  const { daynumber, monthnumber, text, person ,price } = await request.json();
  try {
    const res = await prisma.expense.create({
      data: { expense: text, person, daynumber, monthnumber ,price },
    });
    return NextResponse.json({ success: true, msg: res });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      msg: "Faild to add current Income",
    });
  }
}
