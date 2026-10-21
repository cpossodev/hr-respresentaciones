
import Link from "next/link";
import prisma from "@/app/lib/prisma";
import ImgGaleriaCompt from "../imgGaleriaCompt";



//Import Css
import productPageStyle from './productPage.module.css'


export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const productId = Number(id);

    if (isNaN(productId)) {
        return <p>ID inválido en la URL</p>;
    }


const producto = await prisma.producto.findUnique({
  where: { id: productId },
  select: {
    // Datos principales
    id: true,
    codigo: true,
    nombreProd: true,
    modeloProd: true,
    imgURL: true,
    createdAt: true,

    // Datos secundarios
    presentacion: true,
    garantia: true,
    incluye: true,
    noIncluye: true,
    descripcion: true,
    certificaciones: true,
    detalleUsoAplicacion: true,
    medidas: true,
    capacidad: true,
    material: true,
    voltaje: true,
    accesorios: true,
    anoFabricacion: true,

    // Relaciones
    marca: {
      select: {
        nombre: true,
        logo: { select: { urlLogo: true } },
      },
    },
    tipo: { select: { nombre: true } },
    industrias: { select: { nombre: true } },
    subcategoria: { select: { nombre: true } },
    galeria: { select: { urlImagen: true } },
  },
});

  if (!producto) {
    return <p>Producto no encontrado</p>;
  }

  const logoMarcaUrl = producto.marca?.logo?.urlLogo.trim().replace(/\\/g, "/");



    return (
        <div className={productPageStyle.contentAllProductPage}>

            {/* // BOX BACK TIENDA */}
            <div className={productPageStyle.box_backTienda}> 

                <span className={`${productPageStyle.iconBackTienda} material-symbols-outlined `}>keyboard_arrow_left </span>                    
                <span className={productPageStyle.backTienda}> Volver a la tienda</span>

            </div>

            <div className={productPageStyle.boxContentInfoFotos}>

                {/* // BOX COLLAGE FOTOS PRODUCTO */}
                <div className={productPageStyle.boxContentCollageFotos}>

                    <ImgGaleriaCompt />

                </div>

                {/* // BOX INFORMACION PRODUCTO */}
                <div className={productPageStyle.boxContentInfoProducto}>

                    {/* // BOX TITLE PRODUCTO */}
                   <div className={productPageStyle.boxTitleProducto}>
                        <h1 className={productPageStyle.titleProduct}>{producto.nombreProd} {producto.modeloProd}</h1>                        
                        <p className={productPageStyle.idCodeProduct}>Producto: {producto.codigo}</p>

                    </div>

                    {/* // BOX LOGO MARCA PRODUCTO */}
                    <div className={productPageStyle.boxContentLogoMarcaProducto}>

                        {/* background logo marca producto */}
                       <div
                           className={productPageStyle.logoMarcaProducto}
                           style={{
                               backgroundImage: logoMarcaUrl
                                   ? `url("${logoMarcaUrl}")`
                                   : undefined,
                           }}
                       ></div>
                        <Link className={productPageStyle.linkToMarcaProd} href="/tienda-online">Encuentra más productos de Elitech</Link>                   

                    </div> 

                    {/* // BOX INFORMACIÓN PRINCIPAL */}
                    <div className={productPageStyle.boxInfoPrincipal}>

                        <h2 className={productPageStyle.titleInfoPrincipal}>Más Información:</h2>

                        <div className={productPageStyle.boxDatosPricipales}>
                            <p>Marca: {producto.marca?.nombre}</p>
                            <p>Producto Tipo: {producto.tipo?.nombre}</p>
                        </div>

                        <div className={productPageStyle.boxDatosUsoAplicacion}>
                            <h2 className={productPageStyle.textTitleUsoAplicacion}>Uso / Aplicación:</h2>
                            <p>   
                                {producto.industrias[0] ?.nombre}{" "}
                                {producto.industrias[1] ? `, ${producto.industrias[1].nombre}` : ""}{" "}
                                {producto.industrias[2] ? `, ${producto.industrias[2].nombre}` : ""}  

                            </p>
                        </div>

                       
                    </div>

                    {/* // LÍNEA DIVISORA */}
                    <div className={productPageStyle.prodLineDivisor}></div>

                    {/* // BOX INFO PRESTACIÓN GARANTIA */}
                    <div className={productPageStyle.box_Prest_Garantia}>
                        <p>Presentación: {producto.presentacion ?? ""}</p>
                        <p>Garantía: {producto.garantia ?? ""}</p>
                    </div>


                    {/* // LÍNEA DIVISORA */}
                    <div className={productPageStyle.prodLineDivisor}></div>


                    {/* // BOX INFO INCLUYE NO INCLUYE */}
                    <div className={productPageStyle.boxContentIncluyeNoIncluye}>

                        <div className={productPageStyle.boxIncluye}>   
                            <h2 className={productPageStyle.titleTextIncluye}>Incluye:</h2>
                            <p className={productPageStyle.textIncluye}>
                                {producto.incluye ?? ""}
                            </p>
                        </div>

                        <div className={productPageStyle.boxNoIncluye}>   
                            <h2 className={productPageStyle.titleTextNoIncluye}>No Incluye:</h2>
                            <p className={productPageStyle.textNoIncluye}>
                                {producto.noIncluye ?? ""}
                            </p>
                        </div>

                    </div>

                    {/* // BUTTON COTIZAR */}
                    <button className={productPageStyle.btnCotizar}> Cotizar </button>
                    
                </div>

            </div>


            {/* // BOX DESCRIPCIÓN PRODUCTO */}
           <div className={productPageStyle.boxContentDescripcionProducto}>
                <h2 className={productPageStyle.titleTextDescripcionProducto}>Descripción:</h2>
                <p className={productPageStyle.textDescripcionProducto}>{producto.descripcion ?? ""}</p>
           </div>


            {/* // LÍNEA DIVISORA */}
            <div className={productPageStyle.prodLineDivisor}></div>


            {/* // BOX CONTENT CERTIFICACIONES, USO Y APLICACIÓN */}
            <div className={productPageStyle.boxContentCertifAplicacion}>
                <div className={productPageStyle.boxCertificaciones}>
                    <h2 className={productPageStyle.titleTextCertificaciones}>Certificaciones</h2>
                    <p className={productPageStyle.textCertificaciones}>
                    {producto.certificaciones ?? ""}
                    </p>
                </div>

                <div className={productPageStyle.boxUsoAplicacion}>
                    <h2 className={productPageStyle.titleTextUsoAplicacion}>Uso y Aplicación</h2>
                    <p className={productPageStyle.textUsoAplicacion}>
                    {producto.detalleUsoAplicacion ?? ""}
                    </p>
                </div>
            </div>



                    {/* // LÍNEA DIVISORA */}
                    <div className={productPageStyle.prodLineDivisor}></div>


                {/* // BOX DESCRIPCIÓN PRODUCTO */}
                <div className={productPageStyle.boxContentEspecifProducto}>

                    <h2 className={productPageStyle.titleTextEspecifProducto}>Especificaciones</h2>

                    <span className={productPageStyle.textEspecifProducto}>
                        <p>Medidas:</p>
                        <p>{producto.medidas ?? ""}</p>
                    </span>

                    <span className={productPageStyle.textEspecifProducto}>
                        <p>Capacidad:</p>
                        <p>{producto.capacidad ?? ""}</p>
                    </span>

                    <span className={productPageStyle.textEspecifProducto}>
                        <p>Material:</p>
                        <p>{producto.material ?? ""}</p>
                    </span>

                    <span className={productPageStyle.textEspecifProducto}>
                        <p>Voltaje:</p>
                        <p>{producto.voltaje ?? ""}</p>
                    </span>

                    <span className={productPageStyle.textEspecifProducto}>
                        <p>Accesorios:</p>
                        <p>{producto.accesorios ?? ""}</p>
                    </span>

                    <span className={productPageStyle.textEspecifProducto}>
                        <p>Año de Fabricación:</p>
                        <p>{producto.anoFabricacion ?? ""}</p>
                    </span>

                </div>

        </div>
    )
}