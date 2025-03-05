import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(request, { params }) {
  const { daynumber, emma, monthnumber } = await request.json();

  try {
    // Determine the table name based on monthnumber and daynumber
    const res = await prisma.dec31.delete({
      where: { id: emma, monthnumber: monthnumber, daynumber: daynumber },
    });

    return NextResponse.json({ success: true, msg: res });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      msg: "Failed to delete current income",
    });
  }
}
