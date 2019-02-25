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
        textSize = '1.7em'
        font = 'Helvetica'>

        <center>

        <Card id = 'Responsive'
              borderRadius = '5'
              separation = '1'
              width = '200px'
              height = '125px'
              textColor = 'white'
              gradient = 'right, #188cdb, #4ba2dd'>
              Responsive
              <hr />
              Software, Web & Mobile
              <br />
              ............
        </Card>

        <Card id = 'TeamWork'
              borderRadius = '5'
              separation = '1'
              width = '200px'
              height = '125px'
              textColor = 'white'
              gradient = 'right, #188cdb, #4ba2dd'>
              TeamWork
              <hr />
              Trello (Kanban), Agile & Git
              <br />
              ............
        </Card>

        <Card id = 'BackEnd'
              borderRadius = '5'
              separation = '1'
              width = '200px'
              height = '125px'
              textColor = 'white'
              gradient = 'right, #188cdb, #4ba2dd'>
              BackEnd
              <hr />
              SQL, GitHub & Heroku
              <br />
              ............
        </Card>

        <Card id = 'uptodate'
              borderRadius = '5'
              separation = '1'
              width = '200px'
              height = '125px'
              textColor = 'white'
              gradient = 'right, #188cdb, #4ba2dd'>
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
