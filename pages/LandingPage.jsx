import {MoviesGrid} from "../components/MoviesGrid"
import { Search } from "../components/Search"
import { RatingStar1 } from "../components/RatingStar1"

export function LandingPage() {
    return ( 
        <div>
            <Search />
            <RatingStar1 />
            <MoviesGrid />
        </div>
    )
}