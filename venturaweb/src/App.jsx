import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Showcase from './components/Showcase';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/services" component={Services}/>
          <Route path="/showcase" component={Showcase}/>

        </div>
      </Router>
    );
  }
}

export default App;
