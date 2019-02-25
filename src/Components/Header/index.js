import React, { Component } from 'react';

import Banner from '../../Modules/Banner';

class Header extends Component{
  render(){
    return(
      <Banner
        //ID
        id = 'Header'
        //colors
        gradient = 'right, #000c21, #283c60'
        textColor = 'white'
        //text
        format = 'uppercase'
        //block
        padding = '0.5%'
        >
        Tanguy Sanchez
      </Banner>
    );
  }
}

export default Header;
