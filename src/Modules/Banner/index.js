import React, { Component } from 'react';

import ModComponent from '../../Modules/ModComponent';

class Banner extends ModComponent{

  build(){

    this.CSS({
      //CSS
        /* block */
        background: this.props.color,
        backgroundImage: 'linear-gradient(to ' + this.props.gradient + ')',
        padding: '1.5%',
        paddingLeft: '3.5%',

        /* text */
        color: this.props.textColor,
        fontFamily: this.props.font,
        fontSize: this.props.textSize,
        textTransform: this.props.format
    }, {
        //HOVER
        color: this.props.textColorHover
    }, {
        //MINIMAL CSS
        //...
    }, {
        //MINIMAL CSS (HOVER)
        //...
    });
  }

}

export default Banner;
