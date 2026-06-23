import "./globals.css";


// Import Component
import {MenuProvider} from "../providers/menuProvider";
import MainMenu from "./components/mainMenu/mainMenu";
import Footer from "./components/footer/footer";
import PanelMainMenuMobile from "./components/mainMenu/panelMainMenuMobile";

import Head from "next/head";
import { defaultSEO } from "../lib/seo";


export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="es">

      <Head>
        <title>{defaultSEO.title}</title>
        <meta name="description" content={defaultSEO.description} />
        <meta property="og:type" content={defaultSEO.openGraph.type} />
        <meta property="og:locale" content={defaultSEO.openGraph.locale} />
        <meta property="og:url" content={defaultSEO.openGraph.url} />
        <meta property="og:site_name" content={defaultSEO.openGraph.site_name} />

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Manrope:wght@200..800&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Outfit:wght@100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
        
    
      </Head>

        <body>

            <MenuProvider>
              <MainMenu />
              <PanelMainMenuMobile />
              {children}
              <Footer />
           </MenuProvider>

        </body>

    </html>
  );
}
