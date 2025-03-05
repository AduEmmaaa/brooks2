import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(request, { params }) {
  const body = await request.json();
  const { name, size, quantity, price, daynumber, monthnumber, shop } = body;
  if (!name || !size || !quantity || !price)
    return NextResponse.json({ success: false, msg: "Fill All Fields" });
  try {
    if (shop === "shop1") {
      const res = await prisma.waterItems.create({
        data: {
          name,
          size,
          quantity,
          price,
          daynumber,
          monthnumber,
          shop,
        },
      });
      return NextResponse.json({ success: true, msg: res });
    } else if (shop == "shop2") {
      const res = await prisma.waterItems2.create({
        data: {
          name,
          size,
          quantity,
          price,
          daynumber,
          monthnumber,
          shop,
        },
      });
      return NextResponse.json({ success: true, msg: res });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false, msg: "Faild to Add New Item" });
  }
}
