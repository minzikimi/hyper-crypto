import "./WatchList.css";
import { Link } from "react-router-dom";
import { useCoins } from "../../components/CoinContext/CoinContext";
import deleteIcon from "../../assets/delete_icon.svg";
import pepe from "../../assets/pepe-pepe-logo.svg";

function WatchList() {
  const { watchlist, removeFromWatchlist } = useCoins();

  return (
    <div>
      <h1>👀 Your Crypto Watchlist</h1>
     { watchlist.length === 0 ? (
      <h2 className="add-coin-text">
        Your watchlist is empty. Please add coins.
      </h2>
      ): (
      <div className="table-container">
        <table className="coin-table">
          <thead>
            <tr>
              <th>Ranking</th>
              <th>Name</th>
              <th>Price</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {watchlist
            .slice()
            .sort((a,b) => (a.rank - b.rank))
            .map((coin) => (
              <tr key={coin.id}>
                <td>{coin.rank}</td>
                <td>
                  <Link
                    to={`/detail/${coin.id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <img
                      src={`https://static.coinpaprika.com/coin/${coin.id}/logo.png`}
                      alt={`${coin.name} icon`}
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "10px",
                      }}
                    />
                    {coin.name} ({coin.symbol})
                  </Link>
                </td>
                <td>${parseFloat(coin.quotes.USD.price).toFixed(2)}</td>
                <td>
                  {" "}
                  <button
                    className="remove-watchlist-btn"
                    onClick={() => removeFromWatchlist(coin.id)}
                  >
                    <img className="delete-icon" src={deleteIcon} alt="deleteIcon" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      )}
    </div>
  );
}

export default WatchList;
