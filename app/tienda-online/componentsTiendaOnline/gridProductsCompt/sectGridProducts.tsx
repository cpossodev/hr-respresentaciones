//Import CSS
import sectGdPctStyles from './sectGridProducts.module.css'
import ProductModelCompt from './productModelCompt';
import type { Producto } from '../../types/producto';

interface GridProps {
  productos: Producto[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function sectGridProducts({ productos, currentPage, totalPages, onPageChange }: GridProps) {
  return (
    <div className={sectGdPctStyles.contentAllGridP}>
      <div className={sectGdPctStyles.productsGrid}>
        {Array.isArray(productos) &&
          productos.map((prod, index) => (
            <div key={index} className={sectGdPctStyles[`product_${index + 1}`]}>
              <ProductModelCompt
                id={prod.id}
                urlBkProduct={prod.imgURL || "/imgDefaultProducts/photoProductDefault.png"}
                textCodProd={prod.codigo}
                titleNameProd={prod.nombreProd}
                nameModelProd={prod.modeloProd}
                nameMarcaProd={prod.marca?.nombre ?? ""}
                nameProdType={prod.tipo?.nombre ?? ""}
                apli_1={prod.industrias[0]?.nombre ?? ""}
                apli_2={prod.industrias[1]?.nombre ?? ""}
                apli_3={prod.industrias[2]?.nombre ?? ""}
              />
            </div>
          ))}
      </div>

      <div className={sectGdPctStyles.boxPagination}>

        <button
          className={sectGdPctStyles.btnPreviousPage}
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <span className={sectGdPctStyles.previewPage}>
            
                <span className="material-symbols-outlined">arrow_left</span>

          </span>

        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={sectGdPctStyles.btnNumPage}
            onClick={() => onPageChange(i + 1)}
          >

            <span
              className={`${sectGdPctStyles.numberPage} ${
                currentPage === i + 1 ? sectGdPctStyles.numberPageActive : ""
              }`}
            >
              {i + 1}

            </span>

          </button>
        ))}

        <button
          className={sectGdPctStyles.btnNextPage}
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          <span className={sectGdPctStyles.nextPage}>
            
            <span className="material-symbols-outlined">arrow_right</span>

          </span>

        </button>

      </div>

    </div>
  );
}
