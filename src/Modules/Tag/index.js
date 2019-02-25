import React, { Component } from 'react';

import ModComponent from '../../Modules/ModComponent';

class Tag extends ModComponent{

  build(){
    //defaultCSS
    if(this.props.color == '') this.setState({color: 'black'});
    if(this.props.textColor == '') this.setState({color: 'black'});

    this.CSS({
      //CSS
        /* color */
        color: this.props.textColor,

        /* text */
        fontSize: '1.5em',

        /* block */
        display: 'inline-block',
        borderTop: '1px solid ' + this.props.color,
        borderLeft: '5px solid ' + this.props.color,
        borderRight: '5px solid ' + this.props.color,
        borderBottom: '1px solid ' + this.props.color,
        padding: '0.5%',
        marginRight: '0.5%',
        boxShadow: '1px 2px 2px #ccc'
    }, {
        //HOVER
        cursor: 'pointer',

          /* color */
          color: this.props.hoverTextColor,
          borderTop: '1px solid ' + this.props.hoverColor,
          borderLeft: '5px solid ' + this.props.hoverColor,
          borderRight: '5px solid ' + this.props.hoverColor,
          borderBottom: '1px solid ' + this.props.hoverColor,
    }, {
        //MINIMAL CSS
        fontWeight: 'bold'
    }, {
        //MINIMAL CSS (HOVER)
        cursor: 'pointer',
        textDecoration: 'underline'
    });
  }

}

export default Tag;
