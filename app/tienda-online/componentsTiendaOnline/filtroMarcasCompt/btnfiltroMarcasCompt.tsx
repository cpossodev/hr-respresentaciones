
//Import CSS
import btnMarcasComptStyle from './btnfiltroMarcasCompt.module.css'


interface BtnMarcasFiltrosProps {
  imgURL: string;
  nameAlt: string;
  marca: string;
  onClick: (marca: string) => void;
}

export default function BtnMarcasFiltros({ imgURL, nameAlt, marca, onClick }: BtnMarcasFiltrosProps) {
  return (
    <div
      className={btnMarcasComptStyle.contentbtnFiltroMarcas}
      onClick={() => onClick(marca)}
    >
      <img
        className={btnMarcasComptStyle.imgLogoFiltroMarca}
        src={imgURL}
        alt={nameAlt}
      />
    </div>
  );
}