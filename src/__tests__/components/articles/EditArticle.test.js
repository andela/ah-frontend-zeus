import Enzyme from 'enzyme';
import { Provider } from 'react-redux';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { create } from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { EditArticle } from '../../../components/articles/EditArticle';
import { editArticle } from '../../../actions/ArticlesActions';
import thunk from 'redux-thunk';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('EditArticle component rendering correctly', () => {
  const initialState = {};
  const push = jest.fn();
  const props = {
    article: {},
    handleEditor: jest.fn(),
    onSubmit: jest.fn(),
    onChange: jest.fn(),
    notify: jest.fn(),
    editArticle: jest.fn(),
    getSingleArticle: jest.fn(),
    history: { push }
  };
  const wrapper = shallow(<EditArticle {...props} />);

  it('tests handle submit', () => {
    wrapper.instance().onSubmit({ preventDefault() {} });
    expect(wrapper.state('images')).toEqual('');
  });
  it('tests the handle change', () => {
    wrapper.instance().onChange({ target: name });
    expect(wrapper.state('images')).toEqual('');
  });
  it('tests the handle editor', () => {
    wrapper.instance().handleEditor({ body: name });
    expect(wrapper.state('images')).toEqual('');
  });
  it('tests the notify', () => {
    wrapper.instance().notify({ body: name });
    expect(wrapper.state('images')).toEqual('');
  });
});
