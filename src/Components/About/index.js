import React, { Component } from 'react';

import AboutDiv from '../../Modules/Banner';
import Image from '../../Modules/Image';

class About extends Component{
  render(){
    return(

      <AboutDiv
        id = 'About'
        padding = '3%'
        color = '#8cccff'
        textAlign = 'center'
        textColor = 'white'
        textColorHover = 'white'
        textSize = '2em'
        font = 'Helvetica'>
        <Image src = 'me'
               component = 'About'
               width = '128'
               height = '128'
               radius = '50' />
        Who I am ?
        <hr />
        In love with coding since my middle school years<br />
        Oh lord, so much time have passed since... (laughts)<br />
        Anyway, if you are looking for a passionate & positive minded developer<br />
        I'm pretty sure you knocked on the right door.<br />
        Designing a product is not just about knowledges & technologies<br />
        But also having a sens of design.<br />
        If you are tempted to hire the french touch,<br />
        or may be having your project tailored to all your crazy needs<br />
        Please scroll down.
      </AboutDiv>

    );
  }
}

export default About;
