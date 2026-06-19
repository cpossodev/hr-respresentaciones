//Import Css
import bannerSloganStyle from '../../styles/bannerSlogan.module.css'

export default function BannerSlogan() {

    return(
        <div className={bannerSloganStyle.contentBannerSlogan} style={{backgroundImage: `url("/bannerSlogan/bKBannerSlogan.jpg")`} }>

                <div className={bannerSloganStyle.boxLogoSlogan}>

                    <img className={bannerSloganStyle.logoHrBanner} src="/bannerSlogan/logo-Banner-slogan.svg" />
                    <div className={bannerSloganStyle.lineDivisorBannerSlogan}></div>
                    <p className={bannerSloganStyle.textSlogan}>Equipos, suministros e instrumentos con técnología de clase mundial</p>


                </div>

        </div>

    );

} 
