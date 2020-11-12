import React from 'react'

import { GlobalProvider } from './context/GlobalState';
import './App.css';
import { AccountSummary } from './component/AccountSummary';
import { AddTransaction } from './component/AddTransaction';
import { Balance } from './component/Balance';
import { Header } from './component/Header'
import { TransactionHistory } from './component/TransactionHistory';


function App() {
  return (
    <GlobalProvider>
        <Header></Header>
        <div className='container'>
          <Balance></Balance>
          <AccountSummary></AccountSummary>
          <TransactionHistory></TransactionHistory>
          <AddTransaction></AddTransaction>
        </div>
    </GlobalProvider>
  );
}

export default App;
