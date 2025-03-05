import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request, { params }) {
  try {
    const res = await prisma.dec31.findMany();
    return NextResponse.json({ success: true, msg: res });

    // return NextResponse.json({ success: true, msg: res });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      msg: "Failed to Find December",
    });
  }
}
