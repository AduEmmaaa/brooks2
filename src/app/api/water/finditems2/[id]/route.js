import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(request, { params }) {
  const id = await params.id;

  try {
    const res2 = await prisma.waterItems2.delete({ where: { id: id } });

    return Response.json({ success: true, msg: "Stock Deleted" });
  } catch (error) {
    console.log(error);
    return Response.json({ success: true, msg: "Stock Deletion faild" });
  }
}
