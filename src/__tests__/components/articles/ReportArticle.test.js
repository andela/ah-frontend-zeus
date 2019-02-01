import React from 'react';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import REPORTARTICLE from '../../../components/articles/ReportArticle';
import { ReportArticle } from '../../../components/articles/ReportArticle';
import { Link } from 'react-router-dom';

Enzyme.configure({ adapter: new EnzymeAdapter() });

function setup() {
  const props = {
    reportArticle: jest.fn(),
    getSingleArticle: jest.fn(),
    history: {push: jest.fn()}
  };

  const wrapper = shallow(<ReportArticle {...props} />);
  return { props, wrapper };
}

describe('<REPORTARTICLE/>', () => {
  it('should render  elements', () => {
    const wrapper = shallow(<REPORTARTICLE />);
    expect(wrapper.find(Link)).toHaveLength(0);
  });

  it('testing  using snapshot', () => {
    const wrapper = shallow(<REPORTARTICLE />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<ReportArticle />', () => {
  it('calls methods on mount', () => {
    const { props } = setup();
    expect(props.getSingleArticle).toHaveBeenCalled();
  });

  it('reports an article when submitted', () => {
    const { props, wrapper } = setup();
    wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });
    expect(props.reportArticle).toHaveBeenCalled();
  });
});
