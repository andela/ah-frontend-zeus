import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from '../App';
import { configure, shallow } from 'enzyme';
import Navbar from '../components/layout/Navbar';
import { Link } from 'react-router-dom';
Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('<Navbar/>', () => {
  it('should render three <Navbar/> elements', () =>{
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find(Link)).toHaveLength(3);
  });
});
