
//Import CSS
import selectFiltroStyles from './selectFiltroCompt.module.css'


interface SelectFiltroComptProps {
  onMarcaSelect: (marca: string) => void;
  onTipoSelect: (tipo: string) => void;
  onIndustriaSelect: (industria: string) => void;
}


export default function SelectFiltroCompt({ onMarcaSelect, onTipoSelect, onIndustriaSelect }: SelectFiltroComptProps) {
    return(

    <div className={selectFiltroStyles.contentAllSelectFiltros}>
      
        {/* Selector por marca */}
          <div className={selectFiltroStyles.boxSelect}>
            <select className={selectFiltroStyles.selectFiltro} onChange={(e) => onMarcaSelect(e.target.value)}>
                <option value="">Filtrar por marca</option>
                
                <option value="Macherey-Nagel">Macherey Nagel</option>
                <option value="Ahn">Ahn</option>
                <option value="Boeco">Boeco</option>
                <option value="Allan France">Allan France</option>
                <option value="Isolab">Isolab</option>
                <option value="Apera">Apera Instruments</option>
                <option value="Elitech">Elitech</option>
                <option value="Biobase">Biobase</option>
                <option value="Arco">Arco</option>
                <option value="Health Scientific">Health Scientific</option>
                <option value="Milwake">Milwake</option>
                <option value="Omsons">Omsons</option>
                <option value="Selecta">Selecta</option>
                <option value="General">General</option>
                <option value="HR Representaciones">Hr Representaciones</option>
                <option value="Químico">Químico</option>
            </select>
          </div>

        {/* Selector por tipo de producto */}
        <div className={selectFiltroStyles.boxSelect}>
            <select id="producto" className={selectFiltroStyles.selectFiltro} onChange={(e) => onTipoSelect(e.target.value)}>

                <option value="">Filtrar por tipo de Producto</option>

                <option value="Microscopios">Microscopios</option>
                <option value="Termómetros">Termómetros</option>
                <option value="Tubos de Ensayo">Tubos de Ensayo</option>
                <option value="Probetas">Probetas</option>
                <option value="Tiras y Papeles Reactivos">Tiras y Papeles Reactivos</option>
                <option value="Papeles de Separación y Filtración">Papeles de Separación y Filtración</option>
                <option value="Consumibles de laboratorio">Consumibles de laboratorio</option>
                <option value="Materiales de Vidrio y Porcelana">Materiales de Vidrio y Porcelana</option>
                <option value="Material Médico Quirúrgico">Material Médico Quirúrgico</option>
                <option value="Equipos e Insumos para Laboratorio">Equipos e Insumos para Laboratorio</option>
                <option value="Equipos para Medición y Análisis">Equipos para Medición y Análisis</option>
                <option value="Equipos Médicos Científicos">Equipos Médicos Científicos</option>
                <option value="Material y Modelos Educativos">Material y Modelos Educativos</option>

            </select>
        </div>

        {/* Selector por industria */}
        <div className={selectFiltroStyles.boxSelect}>
            <select id="industria" className={selectFiltroStyles.selectFiltro} onChange={(e) => onIndustriaSelect(e.target.value)}>
                <option value="">Filtrar por tipo de Industria</option>

                <option value="Alimentos y Bebidas">Industria Alimenticia y Bebidas</option>
                <option value="Industria Médica">Industria Médica</option>
                <option value="Química y Laboratorios">Industria Química y Laboratorios</option>
                <option value="Farmacéutica">Industria Farmacéutica</option>
                <option value="Industria Láctea">Industria Láctea</option>
                <option value="Industrial">Industrial y Manufactura</option>
                <option value="Agroindustrial">Sector Agroindustrial</option>
                <option value="Florícola">Sector Florícola</option>
                <option value="Análisis Ambiental">Sector Ambiental</option>
                <option value="Sector Educativo">Sector Educativo</option>

            </select>
        </div>

    </div>


    );
}