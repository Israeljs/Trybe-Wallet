import React from 'react';
import Header from '../components/Header';
import FormExpense from '../components/FormExpense';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <FormExpense />
        <div>TrybeWallet</div>
      </div>
    );
  }
}

export default Wallet;
