import React, { Component } from 'react';

import ModComponent from '../../Modules/ModComponent';

class Banner extends ModComponent{

  build(){

    this.CSS({
      //CSS
        /* block */
        background: this.props.color,
        backgroundImage: 'linear-gradient(to ' + this.props.gradient + ')',
        padding: this.props.padding,
        paddingTop: this.props.paddingTop,
        paddingLeft: this.props.indent,
        paddingRight: this.props.paddingRight,
        paddingBottom: this.props.paddingBottom,

        /* text */
        color: this.props.textColor,
        textAlign: this.props.textAlign,
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
