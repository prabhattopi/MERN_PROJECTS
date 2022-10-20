import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import {Container} from "react-bootstrap";
import {Route,Routes,BrowserRouter} from "react-router-dom"
import Store from "./pages/Store";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
function App() {
  return (
    <Container>
<NavbarComponent/>
<BrowserRouter>
<Routes>
  <Route index element={<Store/>} />
  <Route path="success" element={<Success/>} />
  <Route path="cancel" element={<Cancel/>} />
</Routes>
</BrowserRouter>
    </Container>
    
  );
}

export default App;
