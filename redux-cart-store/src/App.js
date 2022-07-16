
import './App.css';
import { Header } from './containers/Header';
import {Routes,Route} from "react-router-dom"
import { ProductListing } from './containers/ProductListing';
import { ProductDetials } from './containers/ProductDetials';
import { PageNotFound } from './containers/PageNotFound';
function App() {
  return (
    <div className="App">
     <Header/>
    
    
     <Routes>

      <Route path="/" element={<ProductListing/>}/>
      <Route path="/product/:productId" element={<ProductDetials/>}/>
      <Route path="*" element={<PageNotFound/>}/>
     </Routes>
    </div>
  );
}

export default App;
