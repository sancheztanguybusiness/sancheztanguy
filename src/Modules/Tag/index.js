import React, { Component } from 'react';

class Tag extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: 'tag-' + this.props.id,
      class: 'tag',
      value: this.props.children,
      defaultCSS: this.props.defaultCSS,
      style: {},
      baseStyle: {
        display: 'inline-block',
        border: '1px solid #bbc9c9',
        padding: '0.5%',
        color: '#6e7a7a',
        width: this.props.width
      },
      hoverStyle: {
        display: 'inline-block',
        border: '1px solid ' + this.props.hoverBorder,
        padding: '0.5%',
        color: this.props.hoverText,
        width: this.props.width,
        background: this.props.hover
      },
      disabledStyle: {
        display: 'inline-block',
        border: '1px solid ' + this.props.border,
        padding: '0.5%',
        textcolor: this.props.color,
        width: this.props.width
      }
    };

    this.hover = this.hover.bind(this);
    this.unHover = this.unHover.bind(this);
  }

  componentDidMount(){
    if(this.state.defaultCSS == 'off')
      this.setState({style: this.state.disabledStyle});
    else
      this.setState({style: this.state.baseStyle});
  }

  hover(){
    this.setState({style: this.state.hoverStyle});
  }

  unHover(){
    if(this.state.defaultCSS == 'off')
      this.setState({style: this.state.disabledStyle});
    else
      this.setState({style: this.state.baseStyle});
  }

  render(){
    return(
      <div onMouseEnter = { this.hover }
           onMouseLeave = { this.unHover }
           id = { this.state.id }
           class = { this.state.class }
           style = { this.state.style }
           >{ this.state.value }
      </div>
    );

  }
}

export default Tag;
