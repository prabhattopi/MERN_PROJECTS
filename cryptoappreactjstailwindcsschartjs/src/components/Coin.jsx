import { currencyFormat } from "../utils"


const Coin = ({coin}) => {
  return (
    <>
    <div className="grid grid-cols-3 md:grid-cols-4 font-light p-2 rounded border-gray-200 border-b hover:bg-gray-200" >
        <div className="flex items-center gap-1 w-full">
            <img className="w-6" src={coin.image} alt={coin.name} />
            <p>{coin.name}</p>
        </div>
        <span>{currencyFormat(coin.current_price)}</span>
    </div>
    </>
  )
}

export default Coin