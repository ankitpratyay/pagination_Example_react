import CryptoCard from "./CryptoCard";


import "./App.css";
const Coingecko = ({ coinsData }) => {
  return (
    <div className="crypto_List">
      {coinsData.map((coin, index) => {
        return (
          <CryptoCard
            key={index}
            image={coin.image}
            name={coin.name}
            price={coin.current_price}
          />
        );
      })}
    </div>
  );
};
export default Coingecko;
