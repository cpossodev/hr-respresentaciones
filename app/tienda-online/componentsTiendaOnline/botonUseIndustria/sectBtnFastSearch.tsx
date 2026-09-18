//Import CSS
import sectBtnFastSearchStyles from './sectBtnFastSearch.module.css'

//Import Compornt
import BtnFiltroModelFast from './btnFiltroModelFast';


interface SectBtnFastSearchProps {
  onButtonSearch: (term: string) => void;
}

export default function SectBtnFastSearch({ onButtonSearch }: SectBtnFastSearchProps) {
    return(

        <div className={sectBtnFastSearchStyles.contenAllbtnUseInds}>

            <div className={sectBtnFastSearchStyles.boxBlock_A_btn}>
                <BtnFiltroModelFast nameFiltro="Tiras Reactivas" onClickSearch={() => onButtonSearch("Reactivo")} />
                <BtnFiltroModelFast nameFiltro="Embudos" onClickSearch={() => onButtonSearch("Embudos")} />
                <BtnFiltroModelFast nameFiltro="Agitadores" onClickSearch={() => onButtonSearch("Agitador")} />
                <BtnFiltroModelFast nameFiltro="Balanzas" onClickSearch={() => onButtonSearch("Balanza")} />
                <BtnFiltroModelFast nameFiltro="Butirómetros" onClickSearch={() => onButtonSearch("Butirómetro")} />
                <BtnFiltroModelFast nameFiltro="PH Metros" onClickSearch={() => onButtonSearch("PH Metro")} />
            </div>

            <div className={sectBtnFastSearchStyles.boxBlock_B_btn}>
                <BtnFiltroModelFast nameFiltro="Termómetros" onClickSearch={() => onButtonSearch("Termómetro")} />
                <BtnFiltroModelFast nameFiltro="Fotómetros" onClickSearch={() => onButtonSearch("Fotómetro")} />
                <BtnFiltroModelFast nameFiltro="Microscopios" onClickSearch={() => onButtonSearch("Microscopio")} />
                <BtnFiltroModelFast nameFiltro="Papeles Filtro" onClickSearch={() => onButtonSearch("Papel Filtro")} />
                <BtnFiltroModelFast nameFiltro="Pipetas" onClickSearch={() => onButtonSearch("Pipeta")} />
                <BtnFiltroModelFast nameFiltro="Educativos" onClickSearch={() => onButtonSearch("Educativos")} />
            </div>

          
        </div>

    );
}