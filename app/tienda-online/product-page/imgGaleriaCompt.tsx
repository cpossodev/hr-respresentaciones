
"use client";
import { useState } from "react";

//Import Css
import imgGaleriaStyle from './imgGaleriaComp.module.css'

export default function ImgGaleriaCompt() {
    const [selectedImage, setSelectedImage] = useState(0);

        const images = [
        "/galeriaImagenes/ImgGaleria-1.jpg",
        "/galeriaImagenes/ImgGaleria-2.jpg",
        "/galeriaImagenes/ImgGaleria-3.jpg",
        "/galeriaImagenes/ImgGaleria-4.jpg",
        ];

    return (
        
    <div
      className={imgGaleriaStyle.boxCollageFotos}
      style={{ backgroundImage: `url("${images[selectedImage]}")` }}
    >
       
        <div className={imgGaleriaStyle.boxMiniFotos}>

            <button
                type="button"
                className={`${imgGaleriaStyle.miniFoto} ${
                selectedImage === 0 ? imgGaleriaStyle.miniFotoSelected : ""
                }`}
                style={{ backgroundImage: `url("${images[0]}")` }}
                onClick={() => setSelectedImage(0)}
                aria-label="Mostrar imagen 1"
                aria-pressed={selectedImage === 0}
            />

            <button
                type="button"
                className={`${imgGaleriaStyle.miniFoto} ${
                selectedImage === 1 ? imgGaleriaStyle.miniFotoSelected : ""
                }`}
                style={{ backgroundImage: `url("${images[1]}")` }}
                onClick={() => setSelectedImage(1)}
                aria-label="Mostrar imagen 2"
                aria-pressed={selectedImage === 1}
            />

            <button
                type="button"
                className={`${imgGaleriaStyle.miniFoto} ${
                selectedImage === 2 ? imgGaleriaStyle.miniFotoSelected : ""
                }`}
                style={{ backgroundImage: `url("${images[2]}")` }}
                onClick={() => setSelectedImage(2)}
                aria-label="Mostrar imagen 3"
                aria-pressed={selectedImage === 2}
            />

            <button
                type="button"
                className={`${imgGaleriaStyle.miniFoto} ${
                selectedImage === 3 ? imgGaleriaStyle.miniFotoSelected : ""
                }`}
                style={{ backgroundImage: `url("${images[3]}")` }}
                onClick={() => setSelectedImage(3)}
                aria-label="Mostrar imagen 4"
                aria-pressed={selectedImage === 3}
            />
            </div>


        </div>

        //    <div className={imgGaleriaStyle.boxCollageFotos} style={{ backgroundImage: 'url("/galeriaImagenes/ImgGaleria-1.jpg")' }}>

        //         <div className={imgGaleriaStyle.boxMiniFotos}>

        //             <div 
        //                 className={`${imgGaleriaStyle.miniFoto} ${imgGaleriaStyle.miniFotoSelected} ${imgGaleriaStyle.miniFoto1}`}
        //                 style={{ backgroundImage: 'url("/galeriaImagenes/ImgGaleria-1.jpg")' }}>
        //             </div>

        //             <div 
        //                 className={`${imgGaleriaStyle.miniFoto} ${imgGaleriaStyle.miniFotoSelected} ${imgGaleriaStyle.miniFoto2}`}
        //                 style={{ backgroundImage: 'url("/galeriaImagenes/ImgGaleria-2.jpg")' }}>
        //             </div>

        //             <div 
        //                 className={`${imgGaleriaStyle.miniFoto} ${imgGaleriaStyle.miniFotoSelected} ${imgGaleriaStyle.miniFoto3}`}
        //                 style={{ backgroundImage: 'url("/galeriaImagenes/ImgGaleria-3.jpg")' }}>
        //             </div>

        //             <div 
        //                 className={`${imgGaleriaStyle.miniFoto} ${imgGaleriaStyle.miniFotoSelected} ${imgGaleriaStyle.miniFoto4}`}
        //                 style={{ backgroundImage: 'url("/galeriaImagenes/ImgGaleria-4.jpg")' }}>
        //             </div>

        //         </div>

        //     </div>
    );
}