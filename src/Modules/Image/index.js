import React, { Component } from 'react';

class Image extends Component{
  render(){
    return(
      <div id =    { 'image-' + this.props.id } class = 'image'>
        <img src = { require('../../Components/' + this.props.component + '/' + this.props.src + '.jpg') }
             width = { this.props.width + 'px' }
             height = { this.props.height + 'px' }
             style = { {
               borderRadius: this.props.radius + '%',
               border: this.props.borderSize + 'px ' + this.props.borderStyle + ' ' + this.props.borderColor,
               boxShadow: '1px 1px 1px ' + this.props.shadowColor
             } } />
      </div>

    );
  }
}

export default Image;
