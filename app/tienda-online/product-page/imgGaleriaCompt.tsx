"use client";

import { useState } from "react";
import Image from "next/image";
import imgGaleriaStyle from "./imgGaleriaComp.module.css";

const FALLBACK_IMAGE = "/imgDefaultProducts/photoProductDefault.svg";

interface ImgGaleriaComptProps {
  imagenPrincipal: string;
  imagenesGaleria: string[];
}

export default function ImgGaleriaCompt({
  imagenPrincipal,
  imagenesGaleria,
}: ImgGaleriaComptProps) {
  const [failedImage, setFailedImage] = useState<string | null>(null);
  const images = [imagenPrincipal, ...imagenesGaleria]
    .map((image) => image.trim())
    .filter(Boolean);
  const currentImage = images[0] ?? FALLBACK_IMAGE;
  const displayedImage =
    failedImage === currentImage ? FALLBACK_IMAGE : currentImage;

  return (
    <div className={imgGaleriaStyle.boxCollageFotos}>
      <Image
        src={displayedImage}
        alt="Imagen del producto"
        fill
        unoptimized
        sizes="(max-width: 780px) 90vw, 50vw"
        style={{ objectFit: "cover", objectPosition: "center" }}
        onError={() => setFailedImage(displayedImage)}
      />
      {/* {images.length > 1 && (
          <div className={imgGaleriaStyle.boxMiniFotos} hidden>
            {images.map((image, index) => (
              <button
                key={`${index}-${image}`}
                type="button"
                className={`${imgGaleriaStyle.miniFoto} ${
                  selectedImage === index ? imgGaleriaStyle.miniFotoSelected : ""
                }`}
                style={{ backgroundImage: `url("${image}")` }}
                onClick={() => setSelectedImage(index)}
                aria-label={`Mostrar imagen ${index + 1}`}
                aria-pressed={selectedImage === index}
              />
            ))}
          </div>
        )} */}
    </div>
  );
}
