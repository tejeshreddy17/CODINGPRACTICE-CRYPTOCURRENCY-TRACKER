// Write your code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {currencyData: [], isLoading: true}

  componentDidMount = () => {
    this.timerId = setInterval(this.gettingCurrencyValue(), 1000)
  }

  gettingCurrencyValue = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formattedData = data.map(eachdata => ({
      currencyName: eachdata.currency_name,
      usdValue: eachdata.usd_value,
      euroValue: eachdata.euro_value,
      id: eachdata.id,
      currencyLogo: eachdata.currency_logo,
    }))
    this.setState({currencyData: formattedData, isLoading: false})
  }

  render() {
    const {currencyData, isLoading} = this.state
    return (
      <div className="background-card">
        <h1 className="heading-style">Cryptocurrency Tracker</h1>
        <img
          className="image-style"
          alt="cryptocurrency"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        />
        {isLoading ? (
          <div testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <table>
            <tr>
              <th className="column-style">Coin Type</th>
              <th>USD</th>
              <th>Euro</th>
            </tr>

            {currencyData.map(eachdata => (
              <CryptocurrencyItem eachData={eachdata} key={eachdata.id} />
            ))}
          </table>
        )}
        <li> </li>
        <li> </li>
      </div>
    )
  }
}

export default CryptocurrencyTracker
