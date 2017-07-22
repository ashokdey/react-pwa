import React, {Component} from 'react';
import 'whatwg-fetch';
import {Spinner, Card, CardTitle, CardText, CardActions, Button, Snackbar} from 'react-mdl';

const KEY = 'Bearer 5528a9b19b4549f1b1dd20b55014971b6fa45770eeeb38550f44dccb260c0bec';
const URL = 'https://api.producthunt.com/v1/posts/all?search[category]=games';

const spinnerStyle = {
	margin : 'auto',
	top : 0,
	left : 0,
	bottom : 0,
	right : 0,
	position : 'fixed'
}

export default class GameProduct extends Component {

  // set isOffline to false when nework is available
  // and shows onine  notification    
  _hideIndicator() {
    this.setState({
      isOffline: false,
      isSnackbarActive: false      
    });
  }

  // set isOffline to true when nework is no available
  // and shows offline  notification  
  _showIndicator() {
    this.setState({
      isOffline: true,
      // isSnackbarActive: true
    });
  }

  _handleTimeoutSnackbar() {
    // this.setState({ 
    //   isSnackbarActive: false 
    // });
  }

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isLoaded: false,
      isOffline: false,
      isSnackbarActive: false
    }

    this._showIndicator = this._showIndicator.bind(this);
    this._hideIndicator = this._hideIndicator.bind(this);
    this._handleTimeoutSnackbar = this._handleTimeoutSnackbar.bind(this);
  }

  componentDidMount() {
    window.addEventListener('offline', this._showIndicator);

    fetch(URL, {
      method: 'GET',
      headers: {
        'Authorization': KEY
      }
    }).then(response => response.json())
      .then(data => {
        // set the data in the state
        this.setState({
          posts: data.posts,
          isLoaded: true,
          isOffline: false
        });

        // save the latest data in the localStorage
        localStorage['gameposts-adpwa'] = JSON.stringify(data.posts);
        console.log(data);
      }).catch( err => {
        // set state from the latest posts stored in the localStorage
        this.setState({
          posts: JSON.parse(localStorage['gameposts-adpwa']),
          isOffline: true
        });
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
                <CardTitle style={{color: '#fff', fontWeight: 'bolder', height: '176px', background: `url(${post.thumbnail.image_url}) center / cover`}}>
                  {post.tagline}
                </CardTitle>
                <CardText>
                  Posted  by {post.user.username}
                </CardText>
                <CardActions>
                  <Button raised colored> Show {post.comments_count} Comments </Button> 
                </CardActions>
              </Card>
            )
          })
        }
      <Snackbar active={this.state.isOffline} action="undo" onTimeout={this._handleTimeoutSnackbar}>
        You're offline, but app will still work!
      </Snackbar>
      </div>
    );
  }
}