import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import './Home.css';

export default class Home extends Component{
  render(){
    return{
      <Grid>
        <Jumbotron>
          <h2> Welcome to Ventura </h2>
        </Jumbotron>
        <Link to="/Services">
          <Button bsStyle="primary"> About </Button>
        </Link>
      </Grid>
    }
  }
}
