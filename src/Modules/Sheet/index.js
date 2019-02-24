import React, { Component } from 'react';

class Sheet extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: 'sheet-' + this.props.id,
      class: 'sheet',
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
      disabledStyle: { textAlign: this.props.align }
    };
  }

  componentDidMount(){
    if(this.state.defaultCSS == 'off')
      this.setState({style: this.state.disabledStyle});
    else
      this.setState({style: this.state.baseStyle});
  }

  render(){
    return(
      <div id = { this.state.id }
           class = { this.state.class }
           style = { this.state.style }
           >{ this.state.value }
      </div>
    );

  }
}

export default Sheet;
