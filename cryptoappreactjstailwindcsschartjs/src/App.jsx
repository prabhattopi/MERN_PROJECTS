import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import CryptoDetails from "./pages/CryptoDetails"
import CryptoHome from "./pages/CryptoHome"


function App() {


  return (
    <div className="App">
    <Navbar/>
      <Routes>
        <Route path="/" element={<CryptoHome/>}/>
          <Route path="/coin/:id" element={<CryptoDetails/>}/>

  
      </Routes>
     
    </div>
  )
}

export default App
