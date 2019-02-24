import React, { Component } from 'react';

class Row extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: 'row-' + this.props.id,
      class: 'row',
      value: this.props.children,
      defaultCSS: this.props.defaultCSS,
      style: {},
      baseStyle: {
        display: 'table',
        width: '100%',
        border: '1px solid #cbd3d8',
        boxShadow: '0.5px 0.5px 0.5px #b6bfc4',
        fontSize: '1.2em',
        textAlign: this.props.align
      },
      hoverStyle: {
        display: 'table',
        width: '100%',
        border: '1px solid blue',
        boxShadow: '0.5px 0.5px 0.5px #b6bfc4',
        fontSize: '1.2em',
        textAlign: this.props.align
      },
      disabledStyle: { display: 'table', width: '100%', textAlign: this.props.align }
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
    if(this.state.defaultCSS != 'off')
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

export default Row;
