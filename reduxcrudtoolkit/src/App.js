
import './App.css';
import { UserList } from './featues/Users/UserList';
import {Routes,Route} from "react-router-dom"
import { Adduser } from './featues/Users/Adduser';
function App() {
  return (
   
     <div className='container mx-auto px-2 max-w-5xl pt-10 md:pt-32'>
      <h1 className='text-center font-bold text-2xl'>Crud With React REdux</h1>
      <Routes>
        <Route path="" element={<UserList/>}/>
        <Route path="/add-user" element={<Adduser/>}/>
      </Routes>

     </div>
    
  );
}

export default App;
