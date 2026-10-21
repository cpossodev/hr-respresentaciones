
import Link from 'next/link';

//Import Css
import prodMDStyles from './productModelCompt.module.css'
import { url } from 'inspector';

   const photosBkProduct = [
    "/img/producto1.jpg",
    "/img/producto2.jpg",
    "/img/producto3.jpg"
    ];


export default function ProductModelCompt(


    // PROPS
    {
        id,
        urlBkProduct,
        textCodProd, 
        titleNameProd,
        nameModelProd,
        nameMarcaProd,
        nameProdType,
        apli_1,
        apli_2,
        apli_3,
      

    }: 
    
    {


        id: number;
        urlBkProduct?: string;
        textCodProd: string;
        titleNameProd: string;
        nameMarcaProd?: string;
        nameProdType?: string;
        apli_1?: string;
        apli_2?: string;
        apli_3?: string;
        nameModelProd?: string;
        

    }) 

    {


    return(

        <div className={prodMDStyles.contentAllproductModel}>

            {/* Photo Background Imagen */}
            <div className={prodMDStyles.boxPhotosProduct} style={{ backgroundImage: `url(${urlBkProduct})` }}>

                <div className={prodMDStyles.boxBtnPhotosProd}>

                    <button className={`${prodMDStyles.btnPhotoProduct} ${prodMDStyles.btnPhoto_1}`}></button>
                    <button className={`${prodMDStyles.btnPhotoProduct} ${prodMDStyles.btnPhoto_2}`}></button>
                    <button className={`${prodMDStyles.btnPhotoProduct} ${prodMDStyles.btnPhoto_3}`}></button>


                </div>

            </div>

            {/* Body Info Product */}
            <div className={prodMDStyles.boxContentProduct}>

                {/* SECTION - TOP CODIGO Y BOTON WHATSAPP */}
                <div className={prodMDStyles.boxCod_btnWhatsapp}>
                    <div className={prodMDStyles.boxCodigoProduct}>
                        <p className={prodMDStyles.textCodigo}>Cod Producto:</p>
                        <p className={prodMDStyles.textCodProduct}>{textCodProd}</p>
                    </div>

                    <div className={prodMDStyles.boxBtnWhatsApp}>
                        <Link href="/tienda-online" className={prodMDStyles.linkToWhatsAppContact}>Obtén un descuento exclusivo!</Link>
                    </div>
                </div>

                <div className={prodMDStyles.lineDivProdInfo}></div>

                {/* SECTION INFO PRODUCTO */}
                <div className={prodMDStyles.boxContentInfoProduct}>

                    <div className={prodMDStyles.boxTitleModeloProd}>    
                            <h2 className={prodMDStyles.titleModeloProd}>{titleNameProd} {nameModelProd} </h2>
                    </div> 

                    <div className={prodMDStyles.boxInfoProd}>          

                        <p className={prodMDStyles.nameMarcaProd}><><span className={prodMDStyles.textBold}>Marca:</span>  {nameMarcaProd}</></p>
                        <p className={prodMDStyles.nameModelProd}><><span className={prodMDStyles.textBold}>Modelo:</span> {nameModelProd}</></p>
                        <p className={prodMDStyles.nameProdType}><><span className={prodMDStyles.textBold}>Producto Tipo:</span> {nameProdType}</></p>
                        <p className={prodMDStyles.nameUsoApli}><><span className={prodMDStyles.textBold}>Uso / Aplicación:</span></></p>
                        <p className={prodMDStyles.textAplicaciones}>{apli_1 }, {apli_2}, {apli_3}</p>

                    </div>

                </div>

            </div>

            {/* BOTÓN LINK VER PRODUCTO */}
            <div className={prodMDStyles.boxLinkButton}>
                <Link className={prodMDStyles.btnLinkToProduct} href={`/tienda-online/product-page/${id}`}>Ver Producto</Link>
             </div>
        </div>

    );
}


