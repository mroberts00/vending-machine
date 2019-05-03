import React from 'react'
import { shallow, configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import CoinInsert from './CoinInsert'

configure({ adapter: new Adapter() });

const setup = () => {
  const handleReturnSpy = jest.fn()
  const setInsertedAmountSpy = jest.fn();
  const wrapper = mount(<CoinInsert insertedAmount='200' handleReturn={handleReturnSpy} setInsertedAmount={setInsertedAmountSpy} />)
  return { wrapper }
}

describe('CoinInsert Test Suite', () => {
  it('Inserted amount should be 200', () => {
    const { wrapper } = setup();
    expect(wrapper.props().insertedAmount).toBe('200');
  })

  it('should accept number as input', () => {
    const { wrapper } = setup()
    const input = wrapper.find('#dollars');
    input.simulate('change', { target: { value: '2' } });
    expect(wrapper.find("#dollars").props().value).toEqual('2')
  })

  it('should not accept letter as input', () => {
    const { wrapper } = setup()
    const input = wrapper.find('#dollars');
    input.simulate('change', { target: { value: 'f' } });
    expect(wrapper.find("#dollars").props().value).toEqual('')
  })

  it('should cancel the event on form submit', () => {
    const { wrapper } = setup()
    let prevented = false
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {
        prevented = true
      }
    })
    expect(prevented).toBe(true)
  })

  it('calls setInsertedAmount function when form is submitted', () => {
    const { wrapper } = setup()
    const input = wrapper.find('#dollars');
    input.value = '2'
    const form = wrapper.find('form').simulate('submit')
    expect(wrapper.props().setInsertedAmount).toHaveBeenCalled();
  })

  it('calls handleReturn function when return button is clicked', () => {
    const { wrapper } = setup()
    const button = wrapper.find('#return');
    const input = wrapper.find('#dollars');
    input.value = '2'
    button.simulate('click')
    expect(wrapper.props().handleReturn).toHaveBeenCalledTimes(1);
  })
})