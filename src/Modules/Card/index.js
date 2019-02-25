import React, { Component } from 'react';

import ModComponent from '../../Modules/ModComponent';

class Card extends ModComponent{

  build(){
    this.CSS({
        //CSS
          /* block */
          display: 'inline-block',
          float: 'left',
          width: this.props.width,
          height: this.props.height,
          border: this.props.borderSize + 'px ' + this.props.borderStyle + ' ' + this.props.borderColor,
          borderRadius: this.props.borderRadius + 'px',
          padding: (parseInt(this.props.separation) * 2) + '%',
          marginLeft: this.props.separation + '%',
          marginRight: this.props.separation + '%',
          boxShadow: '2px 2px 2px #c3ced8',

          /* color */
          color: this.props.textColor,
          background: this.props.color
    }, {
        //HOVER
        //...
    }, {
        //MINIMAL CSS
          /* block */
          display: 'inline-block',
          float: 'left',
          width: this.props.width,
          height: this.props.height,
          border: this.props.borderSize + 'px ' + this.props.borderStyle + ' ' + this.props.borderColor,
          borderRadius: this.props.borderRadius + 'px',
          padding: (parseInt(this.props.separation) * 2) + '%',
          marginLeft: this.props.separation + '%',
          marginRight: this.props.separation + '%',
          boxShadow: '2px 2px 2px #c3ced8',

          /* color */
          color: this.props.textColor,
          background: this.props.color
    }, {
        //MINIMAL CSS (HOVER)
        //...
    });
  }

}

export default Card;
