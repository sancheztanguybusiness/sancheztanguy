import React, { Component } from 'react';

import Banner from '../../Modules/Banner';
import Image from '../../Modules/Image';

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
        textSize = '1.5em'
        font = 'Helvetica'
        format = 'uppercase'>
        <Image src = 'me'
               component = 'Header'
               width = '128'
               height = '128'
               radius = '50' />
        Tanguy Sanchez
      </Banner>

    );
  }
}

  export default Header;
