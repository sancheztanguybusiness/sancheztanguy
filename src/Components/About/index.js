import React, { Component } from 'react';

import AboutDiv from '../../Modules/Banner';

class About extends Component{
  render(){
    return(

      <AboutDiv
        id = 'About'
        paddingTop = '1.5%'
        color = '#8cccff'
        textAlign = 'center'
        textColor = 'white'
        textColorHover = 'white'
        textSize = '2em'
        font = 'Helvetica'>
        <h3>Who I am ?</h3>
        In love with coding since my middle school years<br />
        Oh lord, so much time have passed since... (laughts)<br />
        Anyway, if you are looking for a passionate & positive minded developer<br />
        I'm pretty sure you knocked on the right door.<br />
        Designing a product is not just about knowledges & technologies<br />
        But also having a sens of design.<br />
        If you are tempted to hire the french touch,<br />
        or may be having your project tailored to all your crazy needs<br />
        Please scroll down.

        <br /><br />

        ...

        <br /><br />
      </AboutDiv>

    );
  }
}

export default About;
