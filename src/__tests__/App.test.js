import React from 'react';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import store from '../store';
import APP from '../App';
import { App } from '../App';
import ReactDOM from 'react-dom';
import Landing from '../components/layout/Landing';
import Login from '../components/auth/Login';
import PasswordReset from '../components/auth/PasswordReset';
import Editprofile from '../components/userprofile/editprofile';
import SearchResults from '../components/search/SearchResults';
import Register from '../components/auth/Register';
import UserProfiles from '../components/profiles/UserProfiles';

Enzyme.configure({ adapter: new EnzymeAdapter() });

function setup(path) {
  const wrapper = (
    <MemoryRouter initialEntries={path}>
      <Provider store={store}>
        <APP />
      </Provider>
    </MemoryRouter>
  );
  return wrapper;
}

describe('<APP />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <APP />
      </Provider>,
      div
    );
  });
});

describe('<App />', () => {
  let app;
  beforeEach(() => {
    const props = {
      isRequesting: false,
      isLoggedIn: true
    };
    app = <App {...props} />;
  });

  it('redirects to Landing for /', () => {
    const wrapper = shallow(app);
    expect(
      wrapper
        .find('Route[exact=true][path="/"]')
        .first()
        .prop('component')
    ).toBe(Landing);
  });

  it('redirects to ArticleView for /article/post', () => {
    const wrapper = shallow(app);
    expect(
      wrapper
        .find('Route[exact=true][path="/article/post"]')
        .first()
        .prop('render')()
    ).toExist;
  });

  it('redirects to EditArticle for /article/edit', () => {
    const wrapper = shallow(app);
    expect(
      wrapper
        .find('Route[exact=true][path="/article/edit"]')
        .first()
        .prop('render')()
    ).toExist;
  });

  it('routes /article/:slug to Article', () => {
    const wrapper = shallow(app);
    const matchProps = { match: { params: { username: 'user' } } };
    expect(
      wrapper
        .find('Route[exact=true][path="/article/:slug"]')
        .first()
        .prop('render')(matchProps)
    ).toExist;
  });

  it('routes /articles to ArticlesFeed', () => {
    const wrapper = shallow(app);
    expect(
      wrapper
        .find('Route[exact=true][path="/articles"]')
        .first()
        .prop('render')()
    ).toExist;
  });

  it('routes /login to Login', () => {
    const wrapper = shallow(app);
    expect(
      wrapper
        .find('Route[exact=true][path="/login"]')
        .first()
        .prop('component')
    ).toBe(Login);
  });

  it('routes /passwordreset to PasswordReset', () => {
    const wrapper = shallow(app);
    expect(
      wrapper
        .find('Route[exact=true][path="/passwordreset"]')
        .first()
        .prop('component')
    ).toBe(PasswordReset);
  });

  it('routes /profile to Userprofile', () => {
    const wrapper = shallow(app);
    expect(
      wrapper
        .find('Route[exact=true][path="/profile"]')
        .first()
        .prop('render')()
    ).toExist;
  });

  it('routes /editprofile to UserProfiles', () => {
    const wrapper = shallow(app);
    expect(
      wrapper
        .find('Route[exact=true][path="/editprofile"]')
        .first()
        .prop('component')
    ).toBe(Editprofile);
  });

  it('routes /searchresults/:type/:searchData to SearchResults', () => {
    const wrapper = shallow(app);
    expect(
      wrapper
        .find('Route[path="/searchresults/:type/:searchData"]')
        .first()
        .prop('component')
    ).toBe(SearchResults);
  });

  it('routes /register to Register', () => {
    const wrapper = shallow(app);
    expect(
      wrapper
        .find('Route[exact=true][path="/register"]')
        .first()
        .prop('component')
    ).toBe(Register);
  });

  it('routes /userprofiles to UserProfiles', () => {
    const wrapper = shallow(app);
    expect(
      wrapper
        .find('Route[exact=true][path="/userprofiles"]')
        .first()
        .prop('component')
    ).toBe(UserProfiles);
  });

  it('routes /followings to UserProfiles', () => {
    const wrapper = shallow(app);
    expect(
      wrapper
        .find('Route[exact=true][path="/followings"]')
        .first()
        .prop('render')()
    ).toExist;
  });

  it('routes /followers to UserProfiles', () => {
    const wrapper = shallow(app);
    expect(
      wrapper
        .find('Route[exact=true][path="/followers"]')
        .first()
        .prop('render')()
    ).toExist;
  });

  it('routes /:username/followings to UserProfiles', () => {
    const wrapper = shallow(app);
    const matchProps = { match: { params: { username: 'user' } } };
    expect(
      wrapper
        .find('Route[exact=true][path="/:username/followings"]')
        .first()
        .prop('render')(matchProps)
    ).toExist;
  });

  it('routes /:username/followers to UserProfiles', () => {
    const matchProps = { match: { params: { username: 'user' } } };
    const wrapper = shallow(app);
    expect(
      wrapper
        .find('Route[exact=true][path="/:username/followers"]')
        .first()
        .prop('render')(matchProps)
    ).toExist;
  });
});
