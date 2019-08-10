import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import LandingPageContainer from './frontend/components/landing_page/landing_page_container'
import BlockContainer from './frontend/components/landing_page/block_container'


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = () => (
  <div>
    <Switch>
      <Route path="/explorer" component={LandingPageContainer} />
      <Route path="/block/:block_hash" component={BlockContainer} />
    </Switch>
  </div>
)

export default App;
