import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(request, { params }) {
  const { monthnumber, daynumber, time, service, person, amount } =
    await request.json();




  if (!time || !service || !amount ||!daynumber ) {
    return NextResponse.json({ success: false, msg: "Time is require" });
  }

  try {
    const res = await prisma.dec31.create({
      data: { time, service, person, amount, daynumber, monthnumber },
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
