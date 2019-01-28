import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { ArticleView } from '../../../components/articles/ArticleView';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('ArticleView component rendering correctly', () => {
  const initialState = { articles: { article: {} } };
  const props = {
    article: {},
    handleEditor: jest.fn(),
    handleSubmit: jest.fn(),
    handleChange: jest.fn(),
    notify: jest.fn(),
    addArticle: jest.fn(),
    componentWillReceiveProps: jest.fn()
  };
  const wrapper = shallow(<ArticleView {...props} />);

  it('tests handle submit', () => {
    wrapper.instance().handleSubmit({ preventDefault() {} });
    expect(wrapper.state('author')).toEqual({});
  });
  it('tests the handle change', () => {
    wrapper.instance().handleChange({ target: name });
    expect(wrapper.state('author')).toEqual({});
  });
  it('tests the handle editor', () => {
    wrapper.instance().handleEditor({ body: name });
    expect(wrapper.state('author')).toEqual({});
  });
  it('tests the notify', () => {
    wrapper.instance().notify({ body: name });
    expect(wrapper.state('author')).toEqual({});
  });
  it('tests that components will receive props', () => {
    wrapper.instance().componentWillReceiveProps({ body: name });
    expect(wrapper.state('author')).toEqual({});

  });
  it('tests that components will receive props', () => {
    wrapper.setProps({errors: {error: 'error'}});
    expect(wrapper.state('errors')['error']).toEqual('error')
  });
});
