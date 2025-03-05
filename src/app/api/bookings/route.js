import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function POST(request, { params }) {
  const body = await request.json();
  const { name, date, service, stylist, phone } = body;
  try {
    if (!name || !phone || !date || !stylist || !service) {
      return NextResponse.json({ success: false, msg: "filled all fields" });
    }
    const res = await prisma.apoint.create({
      data: {
        name,
        date,
        service,
        stylist,
        phone: parseInt(phone),
      },
    });

    return NextResponse.json({
      success: true,
      msg: res,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      msg: error,
    });
  }
}
