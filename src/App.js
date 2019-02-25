import React, { Component } from 'react';
import './index.css';

import Tag from './Modules/Tag';
import Banner from './Modules/Banner';

class App extends Component{
  render(){
    return(

      <div id = 'App'>
        <Banner id = 'header'
                gradient = 'right, #1279c9 , #8cccff'
                textColor = 'white'
                textSize = '1.5em'
                format = 'uppercase'
                >T. Design
        </Banner>
      </div>

    );
  }
}

export default App;
