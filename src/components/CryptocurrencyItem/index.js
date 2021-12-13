// Write your JS code here
import {Component} from 'react'

import './index.css'

const CryptocurrencyItem = props => {
  const {eachData} = props
  const {currencyName, usdValue, euroValue, id, currencyLogo} = eachData
  return (
    <>
      <tr>
        <td className="currency-name-style">
          <img alt={currencyName} className="logo-style" src={currencyLogo} />
          <p>{currencyName}</p>
        </td>
        <td>
          <p>{usdValue}</p>
        </td>
        <td>
          <p>{euroValue}</p>
        </td>
      </tr>
    </>
  )
}

export default CryptocurrencyItem
