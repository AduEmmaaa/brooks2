import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(request, { params }) {
  const param = await params;
  const { id } = param;
  try {
    const item = await prisma.daysale.findUnique({
      where: { id: id },
    });

    if (item) {
      const mainitem = await prisma.waterItems.findFirst({
        where: { name: item.name, size: item.size },
      });
      if (mainitem) {
        const update = await prisma.waterItems.update({
          where: { id: mainitem.id },
          data: {
            sold: mainitem.sold - item.quantity,
            quantity: mainitem.quantity + item.quantity,
          },
        });

        const res = await prisma.daysale.delete({
          where: { id: id },
        });
        return NextResponse.json({ success: true, msg: "Delected succes" });
      }

      const res = await prisma.daysale.delete({
        where: { id: id },
      });
      return NextResponse.json({ success: false, msg: "Delected" });
    
    } 
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false, msg: "faild to fectch" });
  }
}
