import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
 
  // Actualizar todos los productos para que usen la imagen default
  await prisma.producto.updateMany({
    data: {
      imgURL: "/imgDefaultProducts/photoProductDefault.png"
    }
  });


}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
