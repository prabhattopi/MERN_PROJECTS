
import './App.css';
import { Header } from './components/Header';
import {Balanced} from "./components/Balanced"
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
function App() {
  return (
   <div>
    <Header/>
    <div className="container">
      <Balanced/>
      <IncomeExpenses/>
      <TransactionList/>
      <AddTransaction/>
    </div>
    </div>
  );
}

export default App;
