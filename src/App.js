import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import './App.scss';
import { Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import PasswordReset from './components/auth/PasswordReset';
import ArticleView from './components/articles/ArticleView';
import Article from './components/articles/SingleArticle';
import ArticlesFeed from './components/articles/ArticlesFeed';
import EditArticle from './components/articles/EditArticle';
import Userprofile from './components/userprofile/userprofile';
import Editprofile from './components/userprofile/editprofile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchResults from "./components/search/SearchResults";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="App d-flex flex-column">
            <Navbar />
            <ToastContainer />
            <Switch>
              <Route path="/article/post" component={ArticleView} exact />
              <Route path="/article/edit" component={EditArticle} exact />
              <Route path="/article/:slug" component={Article} exact />
              <Route path="/articles" component={ArticlesFeed} exact />
              <Route exact path="/" component={Landing} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/passwordreset" component={PasswordReset} />
              <Route exact path="/profile" component={Userprofile} />
              <Route exact path="/editprofile" component={Editprofile} />
              <Route path="/searchresults/:type/:searchData" component={SearchResults}/>
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
