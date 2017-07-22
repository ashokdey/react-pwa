import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Layout, Header, Content, Navigation, Drawer} from 'react-mdl';
import { BrowserRouter as Router, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
            <Layout fixedHeader>
              <Header title="ProductHuntPWA">
                <Navigation className="hide-on-sm">
                  <Link to="tech">Tech products</Link>
                  <Link to="games">Game products</Link>
                </Navigation>
              </Header>
              <Drawer title="ProductHunt">
                <Navigation></Navigation>
              </Drawer>          
              <Content>
                Dynamic  content here 
              </Content>
            </Layout>
        </Router>
      </div>
    );
  }
}

export default App;
