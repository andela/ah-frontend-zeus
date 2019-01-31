import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import './App.scss';
import { Switch } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import PasswordReset from './components/auth/PasswordReset';
import UserProfiles from './components/profiles/UserProfiles';
import Loader from './components/profiles/Loader';
import ArticleView from './components/articles/ArticleView';
import Article from './components/articles/SingleArticle';
import ArticlesFeed from './components/articles/ArticlesFeed';
import EditArticle from './components/articles/EditArticle';
import ReportArticle from './components/articles/ReportArticle';
import Userprofile from './components/userprofile/userprofile';
import Editprofile from './components/userprofile/editprofile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchResults from './components/search/SearchResults';

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="App d-flex flex-column">
          <NavBar />
          <ToastContainer />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route
              path="/article/post"
              render={props =>
                this.props.isLoggedIn ? (
                  <ArticleView {...props} />
                ) : (
                  <Redirect to="/login" />
                )
              }
              exact
            />
            <Route
              path="/article/edit"
              render={props =>
                this.props.isLoggedIn ? (
                  <EditArticle {...props} />
                ) : (
                  <Redirect to="/login" />
                )
              }
              exact
            />
            <Route
              path="/articles/:slug"
              render={props =>
                this.props.isLoggedIn ? (
                  <Article {...props} slug={props.match.params.slug} />
                ) : (
                  <Redirect to="/login" />
                )
              }
              exact
            />
            <Route
              path="/articles"
              render={props =>
                this.props.isLoggedIn ? (
                  <ArticlesFeed {...props} />
                ) : (
                  <Redirect to="/login" />
                )
              }
              exact
            />
            <Route exact path="/article/report/" component={ReportArticle} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/passwordreset" component={PasswordReset} />
            <Route
              exact
              path="/profile"
              render={props =>
                this.props.isLoggedIn ? (
                  <Userprofile {...props} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route exact path="/editprofile" component={Editprofile} />
            <Route
              path="/searchresults/:type/:searchData"
              component={SearchResults}
            />
            <Route exact path="/register" component={Register} />
            <Route exact path="/userprofiles" component={UserProfiles} />
            <Route
              exact
              path="/followings"
              render={props => (
                <UserProfiles {...props} followsFor="_LoggedInUser_" />
              )}
            />
            <Route
              exact
              path="/followers"
              render={props => (
                <UserProfiles {...props} followersFor="_LoggedInUser_" />
              )}
            />
            <Route
              exact
              path="/:username/followings"
              render={props => (
                <UserProfiles
                  followsFor={props.match.params.username}
                  key={props.match.params.username}
                />
              )}
            />
            <Route
              exact
              path="/:username/followers"
              render={props => (
                <UserProfiles
                  followersFor={props.match.params.username}
                  key={props.match.params.username}
                />
              )}
            />
            <Route exact path="/login" component={Login} />
            <Route exact path="/passwordreset" component={PasswordReset} />
          </Switch>
          <Footer />
          <Loader display={this.props.isRequesting ? 'block' : 'none'} />
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    isRequesting: state.isRequesting,
    isLoggedIn: state.currentUser.username
  };
}

export default connect(
  mapStateToProps,
  null
)(hot(module)(App));
