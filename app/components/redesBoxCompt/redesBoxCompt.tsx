// Import Css
import redesBoxStyles from './redesBoxCompt.module.css'

export default function RedesBoxCompt() {

    return(

       <div className={redesBoxStyles.contentAllBoxRedes}>

            <img className={`${redesBoxStyles.iconBoxRedes} ${redesBoxStyles.iconLinkendIn}`} src="/footerAssets/Icon-LinkedIn.svg" />
            <img className={`${redesBoxStyles.iconBoxRedes} ${redesBoxStyles.iconRedX}`} src="/footerAssets/Icon-RedX.svg" />
            <img className={`${redesBoxStyles.iconBoxRedes} ${redesBoxStyles.iconInst}`} src="/footerAssets/Icon-Instagram.svg" />

       </div> 

    );
}