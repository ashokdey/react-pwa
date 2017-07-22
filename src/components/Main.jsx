import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import 'whatwg-fetch';
import {Card, CardTitle, CardText, CardActions, Button} from 'react-mdl';

export default class main extends Component {
  render() {
    return (
      <Card shadow={0} style={{width: '512px', margin: 'auto', marginTop: '5%'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
        <CardText>
            <p>
              This is a Progressive Web Application made Using React. <br/>
              Just a try by <Link to="http://ashokdey.in">Ashok Dey</Link>, Fullstack JavaScript Developer!
            </p>
        </CardText>
        <CardActions border>
            <Button colored raised><Link to="/tech" style={{color: '#fff', textDecoration: 'none'}}>Get Started</Link></Button>
        </CardActions>
    </Card>
    );
  }
}