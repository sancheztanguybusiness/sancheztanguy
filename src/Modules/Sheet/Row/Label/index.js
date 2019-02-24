import React, { Component } from 'react';

class Label extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: 'label-' + this.props.id,
      class: 'label',
      value: this.props.children,
      pos: this.props.pos,
      defaultCSS: this.props.defaultCSS,
      style: {},
      baseStyle: {
        display: 'table-cell',
        paddingLeft: "0.2%",
        paddingRight: "0.2%",
        borderRight: '2px solid #cbd3d8',
        fontSize: '1.2em'
      },
      hoverStyle: {
        display: 'table-cell',
        background: '#edf0f4',
        borderRight: '2px solid #cbd3d8',
        paddingLeft: "0.2%",
        paddingRight: "0.2%",
        fontSize: '1.2em'
      },
      endBaseStyle: {
        display: 'table-cell',
        paddingLeft: "0.2%",
        paddingRight: "0.2%",
        borderRight: 'none',
        fontSize: '1.2em'
      },
      endHoverStyle: {
        display: 'table-cell',
        background: '#edf0f4',
        borderRight: 'none',
        paddingLeft: "0.2%",
        paddingRight: "0.2%",
        fontSize: '1.2em'
      },
      disabledStyle: { display: 'inline-block' }
    };

    this.hover = this.hover.bind(this);
    this.unHover = this.unHover.bind(this);
  }

  componentDidMount(){
    if(this.state.defaultCSS == 'off')
      this.setState({style: this.state.disabledStyle});
    else{
      if(this.state.pos == 'end')
        this.setState({style: this.state.endBaseStyle});
      else
        this.setState({style: this.state.baseStyle});
    }

  }

  hover(){
    if(this.state.defaultCSS != 'off')
    {
      if(this.state.pos == 'end')
        this.setState({style: this.state.endHoverStyle});
      else
        this.setState({style: this.state.hoverStyle});
    }
  }

  unHover(){
    if(this.state.defaultCSS == 'off')
      this.setState({style: this.state.disabledStyle});
    else
    {
      if(this.state.pos == 'end')
        this.setState({style: this.state.endBaseStyle});
      else
      this.setState({style: this.state.baseStyle});
    }
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

export default Label;
