import React, { Component } from 'react';
 import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import './App.scss';
import { Provider } from 'react-redux';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import index from './store/index';



class App extends Component {
  render() {
    return (
      <Provider store={ index }>
      <Router>
      <div className="App">
        <Navbar/>
        
        <Route exact path="/" component={ Landing }/> 
        <div className="container">
         <Route exact path="/register" component={Register} />
         
        </div> 
        <Footer/>
      </div>
      </Router>
    </Provider>
      
    );
  }
}

export default hot(module)(App);
