import React, { Component } from 'react';
import './index.css';

import Header from './Components/Header';
import StrongPoints from './Components/StrongPoints';

class App extends Component{
  render(){
    return(

      <div id = 'App'>
        <Header />
        <StrongPoints />
      </div>

    );
  }
}

export default App;
