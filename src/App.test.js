import React from 'react'
import { shallow, configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import CoinInsert from './components/CoinInsert'
import Display from './components/Display'
import Shop from './components/Shop'
import App, { items } from './App';

configure({ adapter: new Adapter() });

const setup = () => {
  const wrapper = shallow(<App />)
  return { wrapper }
}

describe('App Test Suite', () => {
  it('renders', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true)
  })

  it('renders one CoinInsert components', () => {
    const { wrapper } = setup();
    expect(wrapper.children(CoinInsert).length).toEqual(1)
  })

  it('renders one Display components', () => {
    const { wrapper } = setup();
    expect(wrapper.children(Display).length).toEqual(1)
  })

  it('renders one Shop components', () => {
    const { wrapper } = setup();
    expect(wrapper.children(Shop).length).toEqual(1)
  })

  it('should update insertedAmount, message state when setInsertedAmount is fired', () => {
    const { wrapper } = setup();
    wrapper.instance().setInsertedAmount(200)
    expect(wrapper.state('insertedAmount')).toEqual(200)
  })

  it('should update state with setAppState', () => {
    const { wrapper } = setup()
    wrapper.instance().setAppState('message', 'Hello')
    expect(wrapper.state('message')).toBe("Hello")
  })

  it('should update message state on purchase', () => {
    const { wrapper } = setup()
    wrapper.setState({ insertedAmount: 400 })
    wrapper.instance().handlePurchase(items[0])
    expect(wrapper.state('message')).toBe("Enjoy your vegan Caramel bar")
  })

  it('should set insertedAmount to 0 on return', () => {
    const { wrapper } = setup()
    wrapper.setState({ insertedAmount: 400 })
    wrapper.instance().handleReturn()
    expect(wrapper.state('insertedAmount')).toEqual(0)
  })




})