import React, { useState } from 'react'
import './CoinInsert.css'

const CoinInsert = (props) => {
  const { insertedAmount, setInsertedAmount, handleReturn } = props
  const [dollars, setDollars] = useState('')
  const [cents, setCents] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = Number.parseFloat(dollars * 100 + cents)
    setInsertedAmount(amount)
    setDollars('')
    setCents('')
  }

  const setReturn = () => {
    handleReturn()
    setDollars('')
    setCents('')
  }

  const isNumber = value => {
    return parseInt(value) || value === ''
  }

  return (
    <div className="insert">
      <h3>Accepted Coins</h3>
      <ul>
        <li>10c</li>
        <li>20c</li>
        <li>50c</li>
        <li className="gold">$1</li>
        <li className="gold">$2</li>
      </ul>
      <div className="input">
        <form className="coinSlot" onSubmit={e => handleSubmit(e)}>
          <span>$</span>
          <input
            id="dollars"
            type="text"
            maxLength='1'
            value={dollars}
            onChange={e => isNumber(e.target.value) && setDollars(e.target.value)}
            placeholder='0'
          />
          <span>.</span>
          <input
            id="cents"
            type="text"
            maxLength='2'
            value={cents > 0 ? cents : dollars ? '00' : ''}
            onChange={e => isNumber(e.target.value) && setCents(e.target.value)}
            placeholder='00'
          />
          <button
            id="submit"
            type="submit"
            disabled={!dollars && !cents}
          >
            Insert
          </button>
        </form>

        <button
          id="return"
          onClick={setReturn}
          disabled={!insertedAmount}
        >
          Return
        </button>
      </div>
    </div>
  )
}

export default CoinInsert