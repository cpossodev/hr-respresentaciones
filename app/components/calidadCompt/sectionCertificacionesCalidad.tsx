
//Impor Css
import SectCertCldStyles from '../../styles/calidadStyles/sectionCertificacionesCalidad.module.css' 


export default function SectionCertificacionesCalidad() {
    return(

        <div className={SectCertCldStyles.allSectCertfCld}>

            <div className={SectCertCldStyles.contentBK_TextInfo}>

                {/* BOX BACKGROUND */}
                <div className={SectCertCldStyles.boxBkCertfCalidad} 
                    style={{backgroundImage: `url("/calidadAssets/bkBannerCerfCalidad.jpg")`}}>

                </div>


                <div className={SectCertCldStyles.boxTextInfoCertfCalidad}>


                    {/* BOX TITLE BANNER CERTIFICACIONES */}
                    <div className={SectCertCldStyles.boxTitleCertfCalidad}>

                        <h2 className={SectCertCldStyles.titleCertfCalidad}>
                            PRODUCTOS CON CERTIFICACIONES Y ESTANDARES INTERNACIONALES
                        </h2>

                    </div>

                    {/* BOX PARRAFO */}
                    <div className={SectCertCldStyles.boxTextParrafCertfCld}>

                        <p className={SectCertCldStyles.textParrafCerftCld}>
                            Cada equipo, instrumento y reactivo que distribuimos cumple con rigurosos 
                            estándares internacionales como ISO 9001, CE, ASTM y FDA, GMP garantizando 
                            seguridad, precisión y confiabilidad. La calidad certificada de nuestros 
                            productos asegura que los clientes trabajen con insumos y equipos avalados por 
                            normas globales, respaldando investigaciones y procesos industriales con resultados 
                            consistentes.
                        </p>


                    </div>

                    {/* BOX LOGOS CERTIFICACIONES */}
                    <div className={SectCertCldStyles.boxLogosCertifCalidad}>

                        {/* BOX ICON LOGO ISO9001 */}
                        <div className={`${SectCertCldStyles.boxIconLogo} ${SectCertCldStyles.boxIconSertf_1}`}>

                            <img 
                                className={`${SectCertCldStyles.iconLogoCerft} ${SectCertCldStyles.IconCertf_1}`}
                                src="/calidadAssets/iconCertificaciones/Icon-Cerft-Iso9001.svg" 
                                alt="Certificación ISO 9001" 
                                title="Certificación ISO 9001"
                            />

                        </div>


                        {/* BOX ICON LOGO CE - CERTF EUROPEA */}
                        <div className={`${SectCertCldStyles.boxIconLogo} ${SectCertCldStyles.boxIconSertf_2}`}>

                            <img 
                                className={`${SectCertCldStyles.iconLogoCerft} ${SectCertCldStyles.IconCertf_2}`}
                                src="/calidadAssets/iconCertificaciones/Icon-Cerft-CE.svg" 
                                alt="Certificación Europea CE" 
                                title="Certificación Europea CE"
                            />

                        </div>

                        {/* BOX ICON LOGO CERTIFICACION ASTM */}
                        <div className={`${SectCertCldStyles.boxIconLogo} ${SectCertCldStyles.boxIconSertf_3}`}>

                            <img 
                                className={`${SectCertCldStyles.iconLogoCerft} ${SectCertCldStyles.IconCertf_3}`}
                                src="/calidadAssets/iconCertificaciones/Icon-Cerft-ASTM.svg" 
                                alt="Certificación ASTM" 
                                title="Certificación ASTM"
                            />

                        </div>


                        {/* BOX ICON LOGO FDA */}
                        <div className={`${SectCertCldStyles.boxIconLogo} ${SectCertCldStyles.boxIconSertf_4}`}>

                            <img 
                                className={`${SectCertCldStyles.iconLogoCerft} ${SectCertCldStyles.IconCertf_4}`}
                                src="/calidadAssets/iconCertificaciones/Icon-Cerft-GMP.svg"                                 
                                alt="Certificación FDA" 
                                title="Certificación FDA"
                            />

                        </div>


                        {/* BOX ICON LOGO GMP QUALITY */}
                        <div className={`${SectCertCldStyles.boxIconLogo} ${SectCertCldStyles.boxIconSertf_5}`}>

                            <img 
                                className={`${SectCertCldStyles.iconLogoCerft} ${SectCertCldStyles.IconCertf_5}`}
                                src="/calidadAssets/iconCertificaciones/Icon-Cerft-FDA.svg" 
                                alt="Certificación GMP QUALITY" 
                                title="Certificación GMP QUALITY"
                            />

                        </div>


                    </div>


                </div>

            </div>

        </div>




    );
}