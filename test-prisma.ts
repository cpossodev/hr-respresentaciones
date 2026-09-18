// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

// async function main() {
//   // Crear producto
//   const nuevo = await prisma.producto.create({
//     data: {
//       codigo: "LAB STAPA55-010",
//       nombreProd: "Cinta de Esterilización",
//       modeloProd: "50m x 19mm",
//       imgURL: "https://via.placeholder.com/300x200.png?text=Producto",
//       tipoId: 4,
//       marcaId: 8,
//       industrias: { connect: [{ id: 4 }, { id: 5 }, { id: 6 }] }
//     }
//   });
//   console.log("Producto creado:", nuevo);

//    // Consultar productos
//   //   const productos = await prisma.producto.findMany({ include: { marca: true, tipo: true } });
//   //   console.log("Productos:", productos);
// }

// main()
//   .catch(e => console.error(e))
//   .finally(() => prisma.$disconnect());

  //Comando de ejecución
  // npx ts-node test-prisma.ts


//   ----------------- TEST PRISMA CRUD -----------------

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {

  // ------- CREATE ---------
  
   const nuevo = await prisma.producto.create({
     data: {
       codigo: "BOE-NIN20730.01",
       nombreProd: "Lupa",
       modeloProd: "90mm",
       imgURL: "https://via.placeholder.com/300x200.png?text=Producto",
       tipoId: 9, //ID Tipo Producto
       marcaId: 6, // ID Marca Producto
       // industrias: { connect: [{ id: 2 }] }, // Industrias relacionadas
       industrias: { connect: [{ id: 1 }, { id: 4 }, { id: 5 }, { id: 11 }]}, // Industrias relacionadas

          // "1 - Alimentos y Bebidas",
          // "2 - Educativo",
          // "3 - Farmacéutico",
          // "4 - Médica",
          // "5 - Floricola",
          // "6 - Industrial",
          // "7 - Laboratorio",
          // "8 - Exportaciones",
          // "9 - Textil",
          // "10 - Industria Láctea",
          // "11 - Agroindustrial", 
          // "12 - Análisis Ambiental",
          // "13 - Tratamiento de Aguas",
          // "14 - Manufactura",
          // Command npx ts-node test-prisma.ts
        
      // industrias: { connect: [{ id: 4 }, { id: 5 }, { id: 6 }] } // Industrias relacionadas

       //Datos Secundarios
       presentacion:     "",
       garantia:         "",             
       incluye:          "",
       noIncluye:        "",
       descripcion:      "",
       certificaciones: "",
       detalleUsoAplicacion:   "",
       medidas:                "",
       capacidad:              "",
       material:               "",
       voltaje:                "",
       accesorios:             "",
       anoFabricacion:         "",  

       // Galería de imágenes asociadas al producto
       galeria: {
         create: [
           { urlImagen: "https://via.placeholder.com/150x100.png?text=Foto1" },
           { urlImagen: "https://via.placeholder.com/150x100.png?text=Foto2" },
           { urlImagen: "https://via.placeholder.com/150x100.png?text=Foto3" },
           { urlImagen: "https://via.placeholder.com/150x100.png?text=Foto4" }
         ]
       }

     }
   });

  // Muestra el producto creado en la consola
  console.log("Producto creado:", nuevo);

  // -------- READ ----------
  /*
  const productos = await prisma.producto.findMany({ include: { marca: true, tipo: true } });
  console.log("Productos:", productos);
  
  */

  // -------- UPDATE ----------
  /*
  const actualizado = await prisma.producto.update({
    where: { codigo: "MN-702284" },
    data: {
      // marcaId: 1, // Cambiar el tipo de producto
      
      industrias: {
        set: [], // Limpia relaciones anteriores si quieres reemplazar
        connect: [
          { id: 4 },
          { id: 1 },
          { id: 5 },
          { id: 11 }
        ]
      }
      
    }
  });
*/

  // -------- DELETE ----------
  /*
  await prisma.producto.delete({
    where: { codigo: "LAB STAPA55-010" }
  });
  console.log("Producto eliminado ✅");
  */

}


main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());


   // ---- Comando de ejecución ----
   // npx ts-node test-prisma.ts