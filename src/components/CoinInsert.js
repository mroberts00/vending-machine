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
        <div className="coinSlot">
          <span>$</span>
          <input
            type="text"
            maxLength='1'
            value={dollars}
            onChange={e => setDollars(e.target.value)}
            placeholder='0'
          />
          <span>.</span>
          <input
            type="text"
            maxLength='2'
            value={cents > 0 ? cents : dollars ? '00' : ''}
            onChange={e => parseInt(e.target.value) && setCents(e.target.value)}
            placeholder='00'
          />
          <button
            onClick={handleSubmit}
            disabled={!dollars && !cents}
          >
            Insert
          </button>
        </div>

        <button
          onClick={handleReturn}
          disabled={!insertedAmount}
        >
          Return
        </button>
      </div>
    </div>
  )
}

export default CoinInsert