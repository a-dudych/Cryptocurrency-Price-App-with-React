import React from 'react'

const Coin = ({ coinData }) => {

    const { name, icon, price, symbol, priceChange1d, priceChange1w, marketCap } = coinData

  return (
    <div className='coin'>
        <h1 className='coin-name'>{name}</h1>
        <span className='symbol'>{symbol}</span>
        <img src={icon} alt="icon" />
        <h1>${price > 1 ? price.toFixed(2) : price > 0.1 ? price.toFixed(4) : price.toFixed(8)}</h1>
        <p>Market Cap: {marketCap.toLocaleString("us")}</p>
        <span>1d: <span style={priceChange1d > 0 ? greenText : redText}>{priceChange1d}%</span> 7d: <span style={priceChange1w > 0 ? greenText : redText}>{priceChange1w}%</span></span>
    </div>
  )
}

const greenText = {
    color: "green",
}

const redText = {
    color: "red",
}

export default Coin