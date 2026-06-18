"use client";

import Link from "next/link";

//Import Css
import homePortadaStyles from "../../styles/homePortada.module.css";

export default function HomePortadaCompt({
  styleDefault,
  bkImagen,
  textPortada,
  btnText,
  linkToPage

}: {
  styleDefault: "A" | "B" | "C"; // tres variantes
  bkImagen: string;
  textPortada: string;
  btnText: string;
  linkToPage: string;
}) {
  // Mapeo de la prop a la clase CSS
  const variantClass =
    styleDefault === "A"
      ? homePortadaStyles.variantA
      : styleDefault === "B"
      ? homePortadaStyles.variantB
      : homePortadaStyles.variantC;

  return (

    <div
      className={`${homePortadaStyles.containerHomePortada} ${variantClass}`}
      style={{ backgroundImage: `url(${bkImagen})`}}
      >

      <div className={homePortadaStyles.boxTextHomePortada}>
        <p className={homePortadaStyles.textHomePortada}>{textPortada}</p>
        <Link className={homePortadaStyles.linkToPage} href={linkToPage}> 
          {btnText}
          <span className="material-symbols-outlined">keyboard_arrow_right</span>
        </Link>
      </div>

    </div>

  );
}
