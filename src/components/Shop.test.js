import React from 'react'
import { shallow, configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Shop from './Shop'
import Item from './Item'
import { items } from '../App'

configure({ adapter: new Adapter() });

const setup = () => {
  const wrapper = shallow(<Shop items={items} />)
  return { wrapper }
}

describe('Shop Test Suite', () => {
  it('renders', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true)
  })

  it('renders three item components', () => {
    const { wrapper } = setup();
    expect(wrapper.children(Item).length).toEqual(3)
  })

})