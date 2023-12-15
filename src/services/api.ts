import { Axios } from './axios';

import { exportOnlyPriceValue } from '../helpers/monthlyPrices';
import {
  ALL_SYMBOLS_TIME_SERIES_MONTHLY,
} from '../data/monthly_prices';
import { SYMBOL_SEARCH, TIME_SERIES_MONTHLY } from '../constants/general';
import { ALL_SYMBOL_SEARCH } from '@/data/ticker_search';

export async function getPricesInfo(symbol: string) {
  try {
    // const {data} = await Axios.get(`query?function=${TIME_SERIES_MONTHLY}&symbol=${symbol}&apikey=${process.env.ALPHA_ADVANTAGE_API_KEY}`);

    // return exportOnlyPriceValue(data["Monthly Time Series"]);

    var data: any = '';

    ALL_SYMBOLS_TIME_SERIES_MONTHLY.map((ticket) => {
      if (symbol == ticket.symbol) {
        data = ticket['Monthly Time Series'];
      }
    });

    return exportOnlyPriceValue(data);
  } catch (error) {
    return null;
  }
}

export async function getSearchBarSymbols(keyword: string) {
  try {
    // const {data} = await Axios.get(`query?function=${SYMBOL_SEARCH}&keywords=${keyword}&apikey=${process.env.ALPHA_ADVANTAGE_API_KEY}`);

    // return data.bestMatches;

    var data = ALL_SYMBOL_SEARCH.bestMatches;

    return data;
  } catch (error) {
    return null;
  }
}
