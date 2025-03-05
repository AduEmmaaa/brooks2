import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(request, { params }) {
  const body = await request.json();
  const { itemId, quantity, daynumber, monthnumber, shop } = body;

  if (!itemId || !quantity)
    return NextResponse.json({
      success: false,
      msg: "All Fields are required",
    });

  try {
    const res = await prisma.waterItems2.findUnique({ where: { id: itemId } });
    if (res) {
      const newupdate = await prisma.waterItems2.update({
        where: { id: res.id },
        data: {
          quantity: res.quantity - quantity,
          sold: res.sold + quantity,
        },
      });

      const dailysale = await prisma.daysale.create({
        data: {
          name: res.name,
          size: res.size,
          quantity: quantity,
          price: res.price,
          daynumber: daynumber,
          monthnumber: monthnumber,
          shop,
        },
      });
      return NextResponse.json({ success: true, msg: dailysale });
    } else {
      return NextResponse.json({ success: false, msg: "Faild to find" });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false, msg: "Faild to make request" });
  }
}
