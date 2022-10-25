import useAxios from "../hooks/useAxios"
import CoinTrending from "./CoinTrending"


const Trending = () => {
    const {response}=useAxios("/search/trending")
    // console.log(response)
  return (
    <div className="mt-8">
        <h1 className="text-2xl mb-2">Trending</h1>
        {
            response&&response.coins.map(coin=>(
            <CoinTrending key={coin.item.coin_id} coin={coin.item}/>
            ))
        }

    </div>
  )
}

export default Trending