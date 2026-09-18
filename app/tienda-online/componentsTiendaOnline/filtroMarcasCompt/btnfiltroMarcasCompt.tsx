
//Import CSS
import btnMarcasComptStyle from './btnfiltroMarcasCompt.module.css'


interface BtnMarcasFiltrosProps {
  imgURL: string;
  nameAlt: string;
  onClick: (marca: string) => void;
}

export default function BtnMarcasFiltros({ imgURL, nameAlt, onClick }: BtnMarcasFiltrosProps) {
  return (
    <div
      className={btnMarcasComptStyle.contentbtnFiltroMarcas}
      onClick={() => onClick(nameAlt)} // 👉 dispara el filtro
    >
      <img
        className={btnMarcasComptStyle.imgLogoFiltroMarca}
        src={imgURL}
        alt={nameAlt}
      />
    </div>
  );
}