import { useEffect, useState } from "react";
import {useSearchParams} from "react-router-dom"

export function Search() {
    const [query, setQuery] = useSearchParams();
    const search = query.get("search");
    const [searchText, setSearchText] = useState("");
    //hook que permite cambiar el historial de navegacion a la nueva ruta

    useEffect (() => {
        setSearchText(search || "");
    },[search]);

    function handleSubmit(e) {
        // const value = e.target.value;
        e.preventDefault();
        // navigate("/?search=" + value)
    } 
    return(
      <div>
        <form onSubmit={handleSubmit} >
            <div className="input-group mb-3">
                <input type="text"
                className="form-control" 
                placeholder="Search your favourite movie!" 
                aria-label="Search your  movie" 
                aria-describedby="button-addon2"
                //genero el valor (seteo)
                value={searchText}
                //nuevo estado que se va generando
                onChange={(e) => {
                    const value =e.target.value;
                    setQuery({search: value});
                }}
                />
                <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Search</button>
            </div>
        </form>
      </div>
)}
