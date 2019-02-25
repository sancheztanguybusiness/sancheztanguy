import React, { Component } from 'react';

import Banner from '../../Modules/Banner';
import Card from '../../Modules/Card';

class StrongPoints extends Component{
  render(){
    return(

      <Banner
        id = 'StrongPoints'
        padding = '5%'
        color = 'white'
        textColor = 'black'
        textAlign = 'center'
        textColorHover = 'black'
        textSize = '1.2em'
        font = 'Helvetica'>

        <Card id = 'Responsive'
              borderRadius = '10'
              borderSize = '1'
              borderStyle = 'solid'
              borderColor = '#9db4c9'
              separation = '1'
              width = '110px'
              height = '110px'
              textColor = 'white'
              color = '#8cccff'>
              Responsive
              <hr />
              Software, Web & Mobile
        </Card>

        <Card id = 'TeamWork'
              borderRadius = '10'
              borderSize = '1'
              borderStyle = 'solid'
              borderColor = '#9db4c9'
              separation = '1'
              width = '110px'
              height = '110px'
              textColor = 'white'
              color = '#8cccff'>
              TeamWork
              <hr />
              Positive minded<hr />
              Git & Agile
        </Card>

        <Card id = 'BackEnd'
              borderRadius = '10'
              borderSize = '1'
              borderStyle = 'solid'
              borderColor = '#9db4c9'
              separation = '1'
              width = '110px'
              height = '110px'
              textColor = 'white'
              color = '#8cccff'>
              BackEnd Guaranteed
        </Card>

      </Banner>

    );
  }
}

export default StrongPoints;