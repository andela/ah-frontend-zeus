import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { EditArticle } from '../../../components/articles/EditArticle';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('EditArticle component rendering correctly', () => {
  const push = jest.fn();
  const props = {
    article: {},
    handleEditor: jest.fn(),
    onSubmit: jest.fn(),
    onChange: jest.fn(),
    notify: jest.fn(),
    editArticle: jest.fn(),
    getSingleArticle: jest.fn(),
    componentWillReceiveProps: jest.fn(),
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
  it('tests that components will receive props', () => {
    const body = '';
    const title = 'title';
    const description = '';
    const images = '';
    const values = {
      articles: {
        article: {
          title: title,
          description: description,
          body: body,
          images: images
        }
      }
    };
    wrapper.setProps(values.articles);
    expect(wrapper.state('title')).toEqual('title');
  });
});
