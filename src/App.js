import React, { Component } from 'react';
import './App.css';
import CoinInsert from './components/CoinInsert'
import Display from './components/Display'
import Shop from './components/Shop'
import { validateCoins, validatePurchase } from './utils/validate'

const items = [
  {
    name: "Caramel",
    price: 250,
    image: 'caramel.jpg'
  },
  {
    name: "Hazelnut",
    price: 310,
    image: 'hazelnut.jpg'
  },
  {
    name: "Organic Raw",
    price: 200,
    image: 'raw.jpg'
  }
]

class App extends Component {
  state = {
    message: '',
    change: 0,
    insertedAmount: 0,
    error: ''
  }

  setInsertedAmount = async (inserted) => {
    validateCoins(inserted, this.setAppState) && await this.setState({
      insertedAmount: this.state.insertedAmount + inserted
    })
    // Once insertedAmount in update, update message to show it
    await this.setState({
      message: `$${(this.state.insertedAmount / 100).toFixed(2)}`,
      change: 0
    })
    // Prompt user for selection once over $3.10
    if (this.state.insertedAmount >= 310) {
      this.setState({
        message: this.state.message + ` - Please make a selection`
      })
    }
  }

  handlePurchase = async (item) => {
    validatePurchase(item.price, this.state.insertedAmount, this.setAppState) &&
      // Set message after 3s and clear after 10s to restart process
      await this.setState({ error: '', message: `Enjoy your vegan ${item.name} bar`, insertedAmount: 0 })
    setTimeout(() => {
      // Ensure message not cleared if new selection is started
      this.state.insertedAmount === 0 && this.setState({ message: '' })
    }, 8000)
  }

  setAppState = (state, value) => {
    this.setState({ [state]: value })
    state === 'change' && setTimeout(() => {
      // Ensure message not cleared if new selection is started
      this.state.insertedAmount === 0 && this.setState({
        message: `Please take your change of $${(value / 100).toFixed(2)}`,
        insertedAmount: 0
      })
    }, 4000);
  }

  handleReturn = () => {
    this.setState({ message: `Please take your coins`, insertedAmount: 0, error: '' })
    // Ensure message not cleared if new selection is started
    setTimeout(() => {
      this.state.insertedAmount === 0 && this.setState({ message: '' })
    }, 5000);

  }

  render() {
    return (
      <div className="app">
        <h1>Mat's Vegan Treats</h1>
        <Display
          message={this.state.message}
          error={this.state.error}
        />
        <CoinInsert
          insertedAmount={this.state.insertedAmount}
          setInsertedAmount={this.setInsertedAmount}
          handleReturn={this.handleReturn}
        />
        <Shop
          insertedAmount={this.state.insertedAmount}
          handlePurchase={this.handlePurchase}
          items={items} />
      </div>
    )
  }
}

export default App;
