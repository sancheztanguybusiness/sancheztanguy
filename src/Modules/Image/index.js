import React, { Component } from 'react';

class Image extends Component{
  render(){
    return(
      <div id =    { 'image-' + this.props.id } class = 'image'>
        <img src = { require('../../Components/' + this.props.component + '/' + this.props.src + '.jpg') }
             width = { this.props.width + 'px' }
             height = { this.props.height + 'px' }
             style = { { borderRadius: this.props.radius + '%' } } />
      </div>

    );
  }
}

export default Image;
