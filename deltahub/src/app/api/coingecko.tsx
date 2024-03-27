import axios from "axios";
import { crypto_watchlist, currencies } from "./constants";

const coingeckoApi = "https://api.coingecko.com/api/v3";

// Endpoints
export const endpoints = {
  ping: `${coingeckoApi}/ping`,
  global: `${coingeckoApi}/global`,
  coins: {
    id: "/coins/{id}", // get current data for a coin.
    id_list: "/coins/list", // list all supported coins id
    market: "/coins/markets", // obtain all the coins market data (price, market cap, volume)
    market_chart: "/coins/{id}/market_chart", // get historical market data include price, market cap, and 24h volume
  },
};

export const axiosInstance = axios.create({
  baseURL: coingeckoApi,
});

// Check API status
export const pingCoingecko = async () => {
  try {
    // const response = await axios.get(`${urlBuilder(endpoints.ping)}`);
    const response = await axiosInstance.get(`${endpoints.ping}`);

    console.log(`CoinGecko APIs: `, response.data);

    return response.data;
  } catch (errors) {
    console.error(errors);
  }
};

// Set up market cap, market cap persentage change
export const marketData = async () => {
  try {
    const response = await axiosInstance.get(`${endpoints.global}`);
    // console.log(response.data.data);

    const market_cap_usd = response.data.data.total_market_cap.usd;
    const market_cap_change_percentage_24h_usd =
      response.data.data.market_cap_change_percentage_24h_usd;

    console.log(
      `market cap: $
  ${(market_cap_usd / 1e12).toFixed(2)}T`
    );
    console.log(
      `market cap change: ${market_cap_change_percentage_24h_usd.toFixed(2)}%`
    );
  } catch (errors) {
    console.log(errors);
  }
};

type CoinData = {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  last_updated: string;
  public_notice: string;
};

// Set up coin data
export const fetchCoinData = async () => {
  try {
    const response = await axiosInstance.get(`${coingeckoApi}/coins/ripple`);
    // console.log(response.data);

    const coin: CoinData = {
      id: response.data.id,
      name: response.data.name,
      symbol: response.data.symbol,
      image: response.data.image.large,
      current_price: response.data.market_data.current_price.usd,
      price_change_percentage_24h:
        response.data.market_data.price_change_percentage_24h,
      last_updated: new Date(response.data.last_updated).toLocaleString(),
      public_notice: response.data.public_notice,
    };

    console.log("coin", coin);
  } catch (error) {
    console.log(error);
  }
};
