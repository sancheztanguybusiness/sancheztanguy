import React, { Component } from 'react';

import ModComponent from '../../Modules/ModComponent';

class Card extends ModComponent{

  build(){
    this.CSS({
        //CSS
          /* block */
          display: 'inline-block',
          width: this.props.width,
          height: this.props.height,
          border: this.props.borderSize + 'px ' + this.props.borderStyle + ' ' + this.props.borderColor,
          borderRadius: this.props.borderRadius + 'px',
          padding: (parseInt(this.props.separation) * 2) + '%',
          marginLeft: this.props.separation + '%',
          marginRight: this.props.separation + '%',
          marginBottom: '2%',
          boxShadow: '0.5px 1px 0.5px #c3ced8',

          /* color */
          color: this.props.textColor,
          background: this.props.color
    }, {
        //HOVER
        cursor: this.props.cursorHover,
        border: this.props.borderSize + 'px ' + this.props.borderStyle + ' ' + this.props.borderColorHover,
        boxShadow: '2px 2px 2px ' + this.props.shadowColorHover,
    }, {
        //MINIMAL CSS
          /* block */
          display: 'inline-block',
          width: this.props.width,
          height: this.props.height,
          border: this.props.borderSize + 'px ' + this.props.borderStyle + ' ' + this.props.borderColor,
          borderRadius: this.props.borderRadius + 'px',
          padding: (parseInt(this.props.separation) * 2) + '%',
          marginLeft: this.props.separation + '%',
          marginRight: this.props.separation + '%',
          marginBottom: '2%',
          boxShadow: '2px 2px 2px #c3ced8',

          /* color */
          color: this.props.textColor,
          background: this.props.color
    }, {
        //MINIMAL CSS (HOVER)
        cursor: this.props.cursorHover,
        border: this.props.borderSize + 'px ' + this.props.borderStyle + ' ' + this.props.borderColorHover,
        boxShadow: '2px 2px 2px ' + this.props.shadowColorHover,
    });
  }

}

export default Card;
