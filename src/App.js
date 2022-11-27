import './App.css';
import { useEffect, useState } from "react";
import Axios from 'axios';
import Coin from "./Coin";

function App() {

  const [listOfCoins, setListOfCoins] = useState([])
  const [searchWord, setSearchWord] = useState("")

  useEffect(() => {

    const fetchCoinData = async () => {
      const response = await Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=99")

      setListOfCoins(response.data.coins)
      console.log(response.data.coins[0])
    }

    fetchCoinData()

  }, [])

  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase())
  })

  return (
    <div className="App">
      <div className="cryptoHeader">
        <input type="text" placeholder='Search...' onChange={(e) => setSearchWord(e.target.value)} onFocus={(e) => e.target.placeholder=""} onBlur={(e) => e.target.placeholder="Search..."} />
      </div>
      <div className="cryptoDisplay">
        {filteredCoins.map((coin) => <Coin key={coin.id} coinData={coin} />)}
      </div>
    </div>
  );
}

export default App;
