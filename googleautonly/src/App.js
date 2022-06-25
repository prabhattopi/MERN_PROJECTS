import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login';
import {Routes,Route} from "react-router-dom"
import { Container,Row,Col } from 'react-bootstrap';
import { Home } from './components/Home';
import { Signup } from './components/Signup';
import { ProtectRoute } from './components/ProtectRoute';

function App() {
  return (
     <Container>
      <Row>
        <Col>
        <Routes>
          <Route path="" element={<ProtectRoute><Home/></ProtectRoute>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
        </Col>
      </Row>
     </Container>
  );
}

export default App;
