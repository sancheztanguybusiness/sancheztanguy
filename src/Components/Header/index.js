import React, { Component } from 'react';

import Banner from '../../Modules/Banner';
import Button from '../../Modules/Button';

class Header extends Component{
  render(){
    return(

      <Banner
        id = 'header'
        padding = '1.5%'
        indent = '3.5%'
        gradient = 'right, #1279c9 , #8cccff'
        textColor = 'white'
        textColorHover = 'white'
        textSize = '1.2em'
        font = 'Helvetica'
        format = 'uppercase'>
        Tanguy Sanchez
      </Banner>

    );
  }
}

  export default Header;
