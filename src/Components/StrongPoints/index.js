import React, { Component } from 'react';

import StrongPointsDiv from '../../Modules/Banner';
import Card from '../../Modules/Card';
import center from '../../Modules/Center';

class StrongPoints extends Component{
  render(){
    return(

      <StrongPointsDiv
        id = 'StrongPoints'
        padding = '3%'
        color = 'white'
        textColor = 'black'
        textColorHover = 'black'
        textSize = '1.2em'
        font = 'Helvetica'>

        <center>

        <Card id = 'Responsive'
              borderRadius = '5'
              separation = '1'
              width = '110px'
              height = '125px'
              textColor = 'white'
              color = '#8cccff'>
              Responsive
              <hr />
              Software, Web & Mobile
              <br />
              ............
        </Card>

        <Card id = 'TeamWork'
              borderRadius = '5'
              separation = '1'
              width = '110px'
              height = '125px'
              textColor = 'white'
              color = '#8cccff'>
              TeamWork
              <hr />
              Trello (Kanban), Agile & Git
              <br />
              ............
        </Card>

        <Card id = 'BackEnd'
              borderRadius = '5'
              separation = '1'
              width = '110px'
              height = '125px'
              textColor = 'white'
              color = '#8cccff'>
              BackEnd
              <hr />
              SQL <br /> GitHub <br /> Heroku
              <br />
              ............
        </Card>

        <Card id = 'uptodate'
              borderRadius = '5'
              separation = '1'
              width = '110px'
              height = '125px'
              textColor = 'white'
              color = '#8cccff'>
              Up to Date
              <hr />
              Always learning the trends <br />............
        </Card>

        </center>

      </StrongPointsDiv>

    );
  }
}

export default StrongPoints;
