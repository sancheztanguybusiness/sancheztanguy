import React, { Component } from 'react';
import ReactDOM from "react-dom";

class ModComponent extends Component{
  constructor(props){
    super(props);

    this.renderState();

    this.focused = this.focused.bind(this);
    this.unfocused = this.unfocused.bind(this);
  }

  renderState(){
    this.state = {
      id: this.constructor.name.toString().toLowerCase() + '-' + this.props.id,
      class: this.constructor.name.toString().toLowerCase() + ' ' + this.props.extraClass,
      value: this.props.children,

      baseStyle: {},
      hoverStyle: {},

      style: {},
      minimalBaseStyle: {},
      minimalHoverStyle: {},
      defaultStyle: this.props.defaultCSS
    };
  }

  build(){}

  componentWillMount(){ this.build(); }
  componentDidMount(){
    if(this.state.defaultStyle === 'OFF') this.minimalCSSOnly();
    else this.unfocused();
  }

  unfocused(){
    if(this.state.defaultStyle === 'OFF') this.setState({style: this.state.minimalBaseStyle});
    else this.setState({style: this.state.baseStyle});
 }

  focused(){
    if(this.state.defaultStyle === 'OFF') this.setState({style: this.state.minimalHoverStyle});
    else this.setState({style: this.state.hoverStyle});
  }

  minimalCSSOnly(){ this.setState({style: this.state.minimalBaseStyle}); }

  CSS(baseStyle, hoverStyle, minimalBaseStyle, minimalHoverStyle){
    this.setState({baseStyle: baseStyle});
    this.setState({hoverStyle: {...baseStyle, ...hoverStyle}});
    this.setState({minimalBaseStyle: minimalBaseStyle});
    this.setState({minimalHoverStyle: {...minimalBaseStyle, ...minimalHoverStyle}});
  }

  render(){
    return(
    <div onMouseEnter = { this.focused }
         onMouseLeave = { this.unfocused }
         id = { this.state.id }
         class = { this.state.class }
         style = { this.state.style }
         >{ this.state.value }
    </div>
  ); }
}

export default ModComponent;
