import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Articles } from '../../../components/articles/ArticlesFeed';
import { Article } from '../../../components/articles/SingleArticle';
import { NewArticle } from '../../../components/articles/NewArticle';

Enzyme.configure({ adapter: new EnzymeAdapter() });

it('test rendering all articles', () => {
  const props = {
    getArticles: () => jest.fn(),
    articles: []
  };
  const wrapper = shallow(<articles {...props} />);
  expect(wrapper).toMatchSnapshot();
});

describe('<NewArticle>', () => {
  const props = {};
  const shallowWrapper = shallow(<Article getSingleArticle={jest.fn()} fetchPosts={jest.fn()} />);

  it('should render a single article without crushing', () => {
    expect(shallowWrapper).toMatchSnapshot();
  });
});

describe('<NewArticle >', () => {
  const value = shallow(<NewArticle fetchPosts={jest.fn()} />);

  it('should render a single article without crushing', () => {
    expect(value).toMatchSnapshot();
  });
});

describe('Articles component', () => {
  it('it tests showing a list of all articles created', async () => {
    const props = {
      map: jest.fn(),
      getArticles: jest.fn(),
      fetchPosts: jest.fn(),
      articles: { articles: [{ title: 'h', description: 'eeee' }] }
    };
    const component = mount(
      <Router>
        <Articles {...props} />
      </Router>
    );
  });

  it('should fetch and display next articles (pagination)', () => {
    const props = {
      getArticles: jest.fn(),
      articles: {articles: [], article: {}, nextPage: '', previousPage: ''},
      nextPage: '',
      previousPage: '',
      article: {}
    };
    const wrapper = mount(<Articles {...props} />);
    const spy = jest.spyOn(wrapper.instance().props, 'getArticles');
    wrapper.find('#nextPage').simulate('click');
  });

  it('should fetch and display previous articles (pagination)', () => {
    const props = {
      getArticles: jest.fn(),
      articles: {articles: [], article: {}, nextPage: '', previousPage: ''},
      nextPage: '',
      previousPage: '',
      article: {}
    };
    const wrapper = mount(<Articles {...props} />);
    const spy = jest.spyOn(wrapper.instance().props, 'getArticles');
    wrapper.find('#previousPage').simulate('click');
  });
  it('tests that the component receives new props', () => {
    const props = {
      newPost: {},
      articles:{articles:[]},
      getArticles: jest.fn(),
    };
    const nextProps = {
      newPost: {},
      articles:{articles:['author:happy, body:always glad']},
      getArticles: jest.fn(),
    };
    const wrapper = shallow(<Articles {...props} />);
    wrapper.instance().componentWillReceiveProps(nextProps);
    expect(wrapper.instance().props).toEqual(props);

  });

});

describe('Single Article component', () => {
  const initialState = { articles: { article: {} } };
  const handleDelete = jest.fn();
  const deleteArticle = jest.fn();
  const push = jest.fn();
  const isEmpty = jest.fn();
  const props = {
    article: '',
    articles: { articles: { title: 'h', description: 'eeee' } },
    handleDelete,
    isEmpty,
    getSingleArticle: jest.fn(),
    deleteArticle: jest.fn(),
    fetchPosts: jest.fn(),
    history: { push }
  };
  const wrapper = shallow(<Article {...props} />);

  it('tests handle delete', () => {
    console.log(wrapper.instance());

    wrapper.instance().handleDelete({ preventDefault() {} });
    expect(wrapper.state('article')).toEqual({});
  });
  it('tests that components will receive props', () => {
    const props = {
      slug: ''
    };
    wrapper.setProps(props);
    expect(wrapper.state('article')).toEqual({});
  });
});
