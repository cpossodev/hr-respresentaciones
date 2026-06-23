"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import lineasProductosStyles from "../../../styles/homeStyles/homeLineasProductosCompt.module.css";
import BotonLineaProdCompt from "./botonLineaProdCompt";

export default function HomeLineasProductosCompt() {
  return (
    <div className={lineasProductosStyles.contentLProdCompt}>
      
      <p> LÍNEAS DE PRODUCTOS</p>

      <div className={lineasProductosStyles.containerSwiper}>

        <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={4}   
            // centeredSlides={true}             // ✅ en desktop muestra 3 botones
            navigation
            pagination={{ clickable: true }}
                    autoplay={{
                      delay: 3000,       // ✅ cada 3 segundos cambia
                      disableOnInteraction: false, // sigue animando aunque el usuario interactúe
                    }}

            breakpoints={{
              0: { slidesPerView: 1 },     // ✅ en móvil muestra 1
              620: { slidesPerView: 2 },   // ✅ en tablets muestra 2
              1080: { slidesPerView: 3 },
              2500: { slidesPerView: 4 }  // ✅ en desktop muestra 3
            }}

            className={lineasProductosStyles.contentSlideLP}
          >
            <SwiperSlide>
              <BotonLineaProdCompt
                bkUrlImagen="/bkBotonLineaProd/bkLineaProd01.jpg"
                hrefLinkToPage="/tienda-linea"
                nameLinkBoton="Ver Productos"
                titleLineaProd={<>Equipos de <br /> Laboratorio</>}
                filtroProd={1}
              />
            </SwiperSlide>

            <SwiperSlide>
              <BotonLineaProdCompt
                bkUrlImagen="/bkBotonLineaProd/bkLineaProd02.jpg"
                hrefLinkToPage="/tienda-linea"
                nameLinkBoton="Ver Productos"
                titleLineaProd={<>Instrumentos de <br /> Medición</>}
                filtroProd={2}
              />
            </SwiperSlide>

            <SwiperSlide>
              <BotonLineaProdCompt
                bkUrlImagen="/bkBotonLineaProd/bkLineaProd03.jpg"
                hrefLinkToPage="/tienda-linea"
                nameLinkBoton="Ver Productos"
                titleLineaProd={<>Consumibles de <br /> Precisión</>}
                filtroProd={3}
              />
            </SwiperSlide>

            <SwiperSlide>
              <BotonLineaProdCompt
                bkUrlImagen="/bkBotonLineaProd/bkLineaProd04.jpg"
                hrefLinkToPage="/tienda-linea"
                nameLinkBoton="Ver Productos"
                titleLineaProd={<>Bioseguridad y <br /> Cadena de Frio</>}
                filtroProd={4}
              />
            </SwiperSlide>

            <SwiperSlide>
              <BotonLineaProdCompt
                bkUrlImagen="/bkBotonLineaProd/bkLineaProd05.jpg"
                hrefLinkToPage="/tienda-linea"
                nameLinkBoton="Ver Productos"
                titleLineaProd={<>Metrología y <br /> Control Industrial</>}
                filtroProd={5}
              />
            </SwiperSlide>

            <SwiperSlide>
              <BotonLineaProdCompt
                bkUrlImagen="/bkBotonLineaProd/bkLineaProd06.jpg"
                hrefLinkToPage="/tienda-linea"
                nameLinkBoton="Ver Productos"
                titleLineaProd={<>Modelos Anatómicos y <br /> Material Didáctico</>}
                filtroProd={6}
              />
            </SwiperSlide>

            <SwiperSlide>
              <BotonLineaProdCompt
                bkUrlImagen="/bkBotonLineaProd/bkLineaProd04.jpg"
                hrefLinkToPage="/tienda-linea"
                nameLinkBoton="Ver Productos"
                titleLineaProd={<>Bioseguridad y <br /> Cadena de Frio</>}
                filtroProd={4}
              />
            </SwiperSlide>


            <SwiperSlide>
                <BotonLineaProdCompt
                  bkUrlImagen="/bkBotonLineaProd/bkLineaProd03.jpg"
                  hrefLinkToPage="/tienda-linea"
                  nameLinkBoton="Ver Productos"
                  titleLineaProd={<>Consumibles de <br /> Precisión</>}
                  filtroProd={3}
                />
            </SwiperSlide>


        </Swiper>

      </div>

    </div>
  );
}
