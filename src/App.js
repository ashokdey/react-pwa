import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Layout, Header, Content, Navigation, Drawer} from 'react-mdl';
import {HashRouter as Router, Link, Route} from 'react-router-dom';
import TechProducts from './components/TechProducts';
import GameProducts from './components/GameProducts';
import Main from './components/Main';

function closeDrawer() {
  document.querySelector('.mdl-layout').MaterialLayout.toggleDrawer();
}

class App extends Component {
  render() {
  return (
    <div className="App">
    <Router>
      <Layout fixedHeader>
        <Header title="ReactPWA">
        <Navigation className="hide-on-sm">
          <Link to="/">Home</Link>                  
          <Link to="tech">Tech Products</Link>
          <Link to="games">Game Products</Link>
        </Navigation>
        </Header>
        <Drawer title="ReactPWA">
        <Navigation>
          <Link to="/" onClick={closeDrawer}>Home</Link>                  
          <Link to="tech" onClick={closeDrawer}>Tech Products</Link>
          <Link to="games" onClick={closeDrawer}>Game Products</Link>
        </Navigation>
        </Drawer>          
        <Content>
        <Route exact path="/" component={Main}/>
        <Route exact path="/tech" component={TechProducts}/>
        <Route exact path="/games" component={GameProducts}/>
        </Content>
      </Layout>
    </Router>
    </div>
  );
  }
}

export default App;
