import React, {Component} from 'react';
import 'whatwg-fetch';
import {Spinner, Card, CardTitle, CardText, CardActions, Button, Snackbar} from 'react-mdl';

const KEY = 'Bearer 5528a9b19b4549f1b1dd20b55014971b6fa45770eeeb38550f44dccb260c0bec';
const URL = 'https://api.producthunt.com/v1/posts/all?search[category]=games';

export default class GameProduct extends Component {
  componentDidMount() {
    fetch(URL, {
      method: 'GET',
      headers: {
        'Authorization': KEY
      }
    }).then(response => response.json())
      .then(data => {
        console.log(data);
      })
  }

  render() {
    return (
      <div>
        <p>
          This is from game products
        </p>
      </div>
    );
  }
}