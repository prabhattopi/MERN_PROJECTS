import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"
import { Headers } from './components/Headers/Headers';
import { Home } from './components/Homes/Homes/Home';
import { HomePages } from './home/HomePages';
import { Fotter } from './components/fotter/Fotter';
import { SinglePage } from './components/Watch/SinglePage';
function App() {
  return (
    <>
    <Headers/>
 
   <Routes>
    <Route path='' element={<HomePages/>}/>
    <Route path='/singlePage/:id' element={<SinglePage/>}/>
   </Routes>
   <Fotter/>
  
    </>
  );
}

export default App;
