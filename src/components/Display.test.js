import React from 'react'
import { shallow, configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Display from './Display'

configure({ adapter: new Adapter() });

describe('Display Test Suite', () => {
  it('renders', () => {
    const wrapper = shallow(<Display />)
    expect(wrapper.exists()).toBe(true)
  })

  it("should render text 'Hello' when no error is provided", () => {
    const wrapper = shallow(<Display message="Hello" />)
    const text = wrapper.find('p')
    expect(text.text()).toBe('Hello')
  })

  it("should render text 'error' when error is provided", () => {
    const wrapper = shallow(<Display message="Hello" error="error" />)
    const text = wrapper.find('p')
    expect(text.text()).toBe('error')
  })

  it("should render text 'Hi, please insert coins one at a time.' when no message or error is provided", () => {
    const wrapper = shallow(<Display />)
    const text = wrapper.find('p')
    expect(text.text()).toBe('Hi, please insert coins one at a time.')
  })

})