import React from 'react';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import {shallow } from 'enzyme';
import Navbar from '../../../components/layout/Navbar';
import { Link } from 'react-router-dom';


Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<Navbar/>', () => {
  it('should render three <Navbar/> elements', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find(Link)).toHaveLength(3);
  
  });
  
});

it('testing Nav bar using snapshot', () => {
  const wrapper = shallow(<Navbar />);
  expect(wrapper).toMatchSnapshot();

});




