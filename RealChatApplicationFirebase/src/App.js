
import Home from "./pages/Home";
import LoginPages from "./pages/Login";
import RegisterPages from "./pages/RegisterPages";
import "./style.scss"
import {Routes,Route, Navigate} from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const {currentUser}=useContext(AuthContext)


  const ProtectedRoute=({children})=>{
    if(!currentUser){
      return <Navigate to="/login"/>
    }
    return children
  }

  return (
  <>
  <Routes>
    <Route path="/">
      <Route index element={<ProtectedRoute><Home/></ProtectedRoute>}/>
      <Route path="login" element={<LoginPages/>}/>
      <Route path="register" element={<RegisterPages/>}/>
    </Route>
    
  </Routes>
</>
  );
}

export default App;
