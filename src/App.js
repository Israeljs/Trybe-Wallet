import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/carteira" component={ Wallet } />
        {/* <Route path="/" component={  } /> */}
      </Switch>
    );
  }
}

export default App;
// import React from 'react';

// function App() {
//   return <div>Hello, TrybeWallet!</div>;
// }

// export default App;
