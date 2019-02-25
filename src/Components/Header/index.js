import React, { Component } from 'react';

import Banner from '../../Modules/Banner';
import Button from '../../Modules/Button';

class Header extends Component{
  render(){
    return(

      <Banner
        id = 'header'
        gradient = 'right, #1279c9 , #8cccff'
        textColor = 'white'
        textColorHover = 'white'
        textSize = '1.2em'
        font = 'Helvetica'
        format = 'uppercase'>

        <Button id = 'logo'
          //ALL
          width = '200px'

          //BASIC
          color = 'orange'
          borderColor = '#7f93a5'
          textColor = 'white'
          shadowColor = '#4a5259'

          //HOVER
          colorHover = 'orange'
          borderColorHover = '#7f93a5'
          textColorHover = 'white'
          shadowColorHover = '#4a5259'
          >
          Tanguy Sanchez
        </Button>

      </Banner>

    );
  }
}

  export default Header;
