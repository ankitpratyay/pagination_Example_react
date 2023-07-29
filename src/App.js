import "./App.css";
import Coingecko from "./Coingecko";
import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";

export default function App() {
  const [coinsData, setCoinsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const postPerPage = 8
  const getData = async () => {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    setCoinsData(response.data);
  };
  useEffect(() => {
    getData();
  }, []);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex- postPerPage;
  const currentPost = coinsData.slice(firstPostIndex, lastPostIndex)
  return (
    <div className="App">
      <Coingecko coinsData={currentPost} />
      <Pagination 
      postPerPage={postPerPage}
      totalPost= {coinsData.length}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      />
    </div>
  );
}
