import React from 'react'
import './Item.css'

const Item = (props) => {
  const { name, image, price } = props.item
  const { insertedAmount, item, handlePurchase } = props
  return (
    <div className="item">
      <img src={require(`../assets/${image}`)} alt="" />
      <h2>{name}</h2>
      <button
        disabled={price > insertedAmount}
        onClick={() => handlePurchase(item)}
      >
        {`Buy $${Number.parseFloat(price / 100).toFixed(2)}`}
      </button>
    </div>
  )
}

export default Item
