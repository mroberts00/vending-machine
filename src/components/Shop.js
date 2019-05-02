import React from 'react'
import './Shop.css'
import Item from './Item'

const Shop = (props) => {
  const { items, insertedAmount, handlePurchase } = props
  return (
    <div className="shop">
      {
        items.map((item, index) => {
          return < Item
            key={index}
            item={item}
            handlePurchase={handlePurchase}
            insertedAmount={insertedAmount}
          />
        })
      }
    </div>
  )
}

export default Shop
