import React, { Component } from 'react';
import './index.css';

import Header from './Components/Header';
import StrongPoints from './Components/StrongPoints';
import About from './Components/About';

class App extends Component{
  render(){
    return(

      <div id = 'App'>
        <Header />
        <StrongPoints />
        <About />
      </div>

    );
  }
}

export default App;
