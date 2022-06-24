// import { MoviesGrid } from "../components/MoviesGrid";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";
import { RatingStar1 } from "./components/RatingStar1";


import styles from "./App.module.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";

export function App() {
  return (
    <div className="container">
      <Router>
        <header>
          <Link to="/">
            <h1 className={styles.title}>Movies</h1>
          </Link> 
        </header>
        <main>
          <Routes>
            <Route path="/movie/:movieId" element= {<MovieDetails />}/>            
            <Route path="/movies/:rateStar" element= {<RatingStar1 />}/>            
            <Route path="/" element={<LandingPage />}/>
            <Route path="*" element={<Navigate replace to="/">404</Navigate>} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

