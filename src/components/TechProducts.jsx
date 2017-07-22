import React, { Component } from 'react';
import 'whatwg-fetch';

const KEY = 'Bearer 4bf782db360dd58f4411996195a4c3173e058cd5f14e169dfb31387c4701fe48';
const URL = 'https://api.producthunt.com/v1/categories/tech/posts';

export default class TechProduct extends Component {
  componentDidMount() {
    fetch(URL, {
      method: 'GET',
      headers: {
        'Authorization': KEY
      }
    }).then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <p>Text from tech products</p>
      </div>
    );
  }
}