import React from 'react'
import { shallow, configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Item from './Item'
import { items } from '../App'

configure({ adapter: new Adapter() });

const setup = () => {
  const wrapper = shallow(<Item item={items[0]} />)
  return { wrapper }
}

describe('Item Test Suite', () => {
  it('renders', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true)
  })

  it('renders an img', () => {
    const { wrapper } = setup();
    const image = wrapper.find('img')
    expect(image.exists()).toBe(true)
  })

  it('renders an img', () => {
    const { wrapper } = setup();
    const image = wrapper.find('img')
    expect(image.exists()).toBe(true)
  })

  it("should render title text as 'Caramel'", () => {
    const { wrapper } = setup()
    const title = wrapper.find('h2')
    expect(title.text()).toBe('Caramel')
  })

  it("should render button text as 'Buy $2.50'", () => {
    const { wrapper } = setup()
    const button = wrapper.find('button')
    expect(button.text()).toBe('Buy $2.50')
  })
})