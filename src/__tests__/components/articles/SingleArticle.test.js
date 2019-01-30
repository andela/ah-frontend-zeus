import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow } from 'enzyme';
import { Article } from '../../../components/articles/SingleArticle';

Enzyme.configure({ adapter: new EnzymeAdapter() });
describe('<Article/>', () => {
  const editor = shallow(
    <Article getSingleArticle={jest.fn()} fetchPosts={jest.fn()} />
  );

  it('should render without crashing', () => {
    expect(editor).toMatchSnapshot();
  });

  const props = {
    postComments: postData => jest.fn(),

    comment: {}
  };

  it('test get comments component onchange', () => {
    const wrapper = shallow(
      <Article
        getSingleArticle={jest.fn()}
        {...props}
        fetchPosts={jest.fn()}
        createPost={jest.fn()}
      />
    );
    const instance = wrapper.instance();
    instance.onChange({ target: { name: 'name', value: 'value' } });
    instance.postComments({ comment_body: 'comment_body' });
    instance.getComments();
    instance.notify('SUCCESS', 'some sample message');

    const e = { preventDefault: () => {} };
    instance.onSubmit(e);
  });
  it('tests that the component receives new props', () => {
    const wrapper = shallow(
      <Article getSingleArticle={jest.fn()} fetchPosts={jest.fn()} {...props} />
    );
    const data = '';

    wrapper.setProps({
      article: { mockData: 'mock article data' },
      newpost: { mockComment: 'mock new post data' },
      posts: [
        { id: 1, data: 'mocked' },
        { id: 2, data: 'mocked' },
        { id: 3, data: 'mocked' }
      ]
    });
    expect(wrapper.instance().state.article).toEqual({
      mockData: 'mock article data'
    });

    wrapper.instance().componentWillReceiveProps(data);
    expect(wrapper.instance().state.body).toEqual('');
  });
});
