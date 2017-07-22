import React, { Component } from 'react';
import 'whatwg-fetch';
import {Spinner, Card, CardTitle, CardText, CardActions, Button, Snackbar} from 'react-mdl';

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
  // set isOffline to false when nework is available
  // and shows onine  notification    
  _hideIndicator() {
    this.setState({
      isOffline: false
    });
  }

  // set isOffline to true when nework is no available
  // and shows offline  notification  
  _showIndicator() {
    this.setState({
      isOffline: true
    });
  }
  
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isLoaded:  false
    }

    this._hideIndicator = this._hideIndicator.bind(this);
    this._showIndicator = this._showIndicator.bind(this);
  }

  componentDidMount() {
    window.addEventListener('offline', this._showIndicator);

    fetch(URL, {
      method: 'GET',
      headers: {
        'Authorization': KEY
      }
    }).then(response => response.json())
      .then(data =>{
        // set the data in the state
        this.setState({
          posts: data.posts,
          isLoaded: true,
          isOffline: false
        }); 

        // store the data in the localstorage so that it can be used in offline mode
        localStorage['techposts-adpwa'] = JSON.stringify(data.posts);
        console.log(data)
      })
      .catch(err => {
        this.setState({
          posts: JSON.parse(localStorage['techposts-adpwa']),
          isLoaded: true
        });
        console.log(err)
      });
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
              <Card key={post.id} shadow={0} style={{width: '512px', margin: 'auto', marginBottom: '1%'}}>
                <CardTitle style={{color: '#800000', fontWeight: 'bolder', height: '176px', background: `url(${post.thumbnail.image_url}) center / cover`}}>
                  {post.tagline}
                </CardTitle>
                <CardText>
                  Posted  by {post.user.username}
                </CardText>
                <CardActions>
                  <Button colored> Show {post.comments_count} Comments </Button> 
                </CardActions>
              </Card>
            )
          })
        }
      <Snackbar active={this.state.isOffline} action="undo">
        You're offline, but app will still work!
      </Snackbar>
      </div>
    );
  }
}