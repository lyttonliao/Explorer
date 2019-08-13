import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import LandingPageContainer from './frontend/components/landing_page/landing_page_container'
import BlockContainer from './frontend/components/landing_page/block_container'
import AddressContainer from './frontend/components/address/address_container';
import Header from './frontend/components/header/header'
import TransactionContainer from './frontend/components/transaction/transaction_container'


const App = () => (
  <div>
    <Header />
    <div className="main-content">
      <Switch>
        <Route path="/explorer" component={LandingPageContainer} />
        <Route exact path="/block/:block_hash" component={BlockContainer} />
        <Route exact path="/address/:address" component={AddressContainer} />
        <Route exact path="/transaction/:tx" component={TransactionContainer} />
      </Switch>
    </div>
  </div>
)

export default App;
