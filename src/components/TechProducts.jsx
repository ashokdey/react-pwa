import React, { Component } from 'react';
import 'whatwg-fetch';
import {Spinner} from 'react-mdl';

const KEY = 'Bearer 4bf782db360dd58f4411996195a4c3173e058cd5f14e169dfb31387c4701fe48';
const URL = 'https://api.producthunt.com/v1/categories/tech/posts';

const spinnerStyle = {
	margin : 'auto',
	top : 0,
	left : 0,
	bottom : 0,
	right : 0,
	position : 'fixed'
}

export default class TechProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isLoaded:  false
    }
  }

  componentDidMount() {
    fetch(URL, {
      method: 'GET',
      headers: {
        'Authorization': KEY
      }
    }).then(response => response.json())
      .then(data =>{
        this.setState({
          posts: data.posts,
          isLoaded: true
        }); 
        console.log(data)
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div style={{marginTop: '5%'}}>
        {
          !this.state.isLoaded && <Spinner style={spinnerStyle}/>
        }
        {
          this.state.posts.map((post) => {
            return (
              <div key={post.id}>
                {post.tagline} by {post.user.username}
              </div>
            )
          })
        }
      </div>
    );
  }
}