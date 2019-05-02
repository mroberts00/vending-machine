export const validateCoins = (insertedAmount, setAppState) => {
  const whiteList = [10, 20, 50, 100, 200]
  if (insertedAmount === 0) {
    return false
  }
  if (insertedAmount === 5) {
    setAppState('error', '5c coins are not accepted')
    return false
  }
  if (!whiteList.includes(insertedAmount)) {
    setAppState('error', "Please insert a valid coin")
    return false
  }
  setAppState('error', '')
  return true
}

export const validatePurchase = (cost, insertedAmount, setAppState) => {
  if (cost > insertedAmount) {
    setAppState('error', "Please insert more coins")
    return false
  }
  if (cost < insertedAmount) {
    let changeAmount = insertedAmount - cost
    setAppState('change', changeAmount)
  }
  return true
}
