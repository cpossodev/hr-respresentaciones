"use client";
import { useState, useEffect, useRef } from "react";

//Import Css
import searchBarStyles from './searchBar.module.css';


// Definimos la interfaz de props
interface SearchBarProps {
  onSearch: (term: string) => void;
}


export default function SearchBar({ onSearch }: SearchBarProps) {

    const [term, setTerm] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    // Al montar el componente, el input recibe el foco
    useEffect(() => {
        inputRef.current?.focus();
    }, []);


    const handleSearch = () => {
        if (term.trim() !== "") {
        onSearch(term); // Llama la función pasada desde TiendaOnline
        }
    };


    return(

        <div className={searchBarStyles.contentAllSearchBar}>

            <div className={searchBarStyles.boxSearchBar}>

                <div className={searchBarStyles.boxIconLupa}>

                    <span className={`${searchBarStyles.IconLupa} material-symbols-outlined`}> search</span>

                </div>
                
                <div className={searchBarStyles.boxInputSearch}>

                        <input

                            className={searchBarStyles.inputSearchBar}
                            ref={inputRef}
                            type="text"
                            placeholder="Buscar productos por nombre / modelo / uso / aplicación"
                            value={term}
                            onChange={(e) => setTerm(e.target.value)}
                            
                         />

                </div>
                <div className={searchBarStyles.boxBtnSearchBuscar}>

                   <button
                        className={searchBarStyles.btnBtnSearchBuscar}
                        onClick={handleSearch}
                        >
                    
                    Buscar</button> 

                </div>

            </div>

        </div>

    ); 
}