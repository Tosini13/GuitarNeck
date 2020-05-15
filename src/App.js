import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/Home'
import Navbar from './components/Navbar'
import Neck from './components/CreateNeck'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App" >
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/:neck_id' component={Neck} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
