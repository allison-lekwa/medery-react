
import { Switch, Route} from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';

import Header from './components/header/header.component';
import Navbar from './components/header/Navbar';
import HomePage from './pages/homepage/homepage.component';
import AboutPage from './pages/aboutpage/aboutpage.component';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false //This is where I am having problems
    };

    this.updatePredicate = this.updatePredicate.bind(this);
  }
  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth >= 760 });
  }

  render (){
    const isDesktop = this.state.isDesktop;
    return (
      <div>      
        {isDesktop ? (<Header/>) : (<Navbar />) }
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={AboutPage}/>
        </Switch>
       
      </div>
    );
  }
  
}

export default App;
