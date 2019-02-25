import React, { Component } from 'react';

import ModComponent from '../../Modules/ModComponent';

class Button extends ModComponent{

  build(){

    this.CSS({
      //CSS
        /* block */
        display: 'inline-block',
        border: '1px solid ' + this.props.borderColor,
        background: this.props.color,
        borderRadius: '15px',
        padding: '0.25%',
        minWidth: '150px',
        width: this.props.width,
        boxShadow: '0.5px 0.5px 0.5px ' + this.props.shadowColor,

        /* text */
        color: this.props.textColor,
        textAlign: 'center'
    }, {
        //HOVER
        cursor: this.props.hover,

        /* block & color */
          border: '1px solid ' + this.props.borderColorHover,
          boxShadow: '0.5px 0.5px 0.5px ' + this.props.shadowColorHover,
          color: this.props.textColorHover,
          background: this.props.colorHover
    }, {
        //MINIMAL CSS (FLAT VERSION)
          /* block */
          display: 'inline-block',
          border: '1px solid ' + this.props.borderColor,
          background: this.props.color,
          padding: '0.25%',
          minWidth: '150px',

          /* text */
          color: this.props.textColor,
          textAlign: 'center'
    }, {
        //MINIMAL CSS (HOVER)
        cursor: this.props.hover,
        textDecoration: 'underline'
    });
  }

}

export default Button;
