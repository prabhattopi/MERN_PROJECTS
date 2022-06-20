
import './App.scss';
import { Header } from './Components/Header/Header';
import {Routes,Route} from "react-router-dom"
import { Home } from './Components/Home/Home';
import { MovieDetails } from './Components/MovieDetails/MovieDetails';
import { PageNotFound } from './Components/PageNotFound/PageNotFound';
import { Footer } from './Components/Footer/Footer';
function App() {
  return (
    <div className='app'>
      <Header/>
      <div className='container'>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/movie/:imdbID" element={<MovieDetails/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      </div>
      <Footer/>

    </div>
  );
}

export default App;
