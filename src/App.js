import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Layout, Header, Content, Navigation, Drawer} from 'react-mdl';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function closeDrawer() {
  document.querySelector('.mdl-layout').MaterialLayout.toggleDrawer();
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
            <Layout fixedHeader>
              <Header title="ProductHuntPWA">
                <Navigation className="hide-on-sm">
                  <Link to="tech">Tech Products</Link>
                  <Link to="games">Game Products</Link>
                </Navigation>
              </Header>
              <Drawer title="ProductHunt">
                <Navigation>
                  <Link to="tech" onClick={closeDrawer}>Tech Products</Link>
                  <Link to="games" onClick={closeDrawer}>Game Products</Link>
                </Navigation>
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
