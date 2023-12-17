import { MarketPrices } from '../constants/general';
import {
  castDecimals,
  castObjectToArray,
  convertPriceStringToFloat,
} from './general';

export function processPrices(prices: string[], numberOfMonths: number) {
  let result2 = filterLastPrices(prices, numberOfMonths);

  return calculateAveragePrice(result2);
}

export function getResult(actualPrice: number, averagePrice: number) {
  return actualPrice / averagePrice;
}

export function calculateAveragePrice(previousPrices: string[]) {
  let sumPreciousPriceAux = 0;

  for (let i = 0; i < previousPrices.length; i++) {
    sumPreciousPriceAux += convertPriceStringToFloat(previousPrices[i]);
  }

  return sumPreciousPriceAux / previousPrices.length;
}

export function filterLastPrices(
  previousPrices: string[],
  numberOfMonths: number
) {
  let newArrayOfPrices: string[] = [];

  for (let i = 0; i < numberOfMonths; i++) {
    if (previousPrices[i]) {
      newArrayOfPrices.push(previousPrices[i]);
    }
  }

  return newArrayOfPrices;
}

export function exportOnlyPriceValue(data: any) {
  let newArrayOfPrices: string[] = [];

  let newArrayPrices = castObjectToArray(data);

  for (let i = 0; i < newArrayPrices.length; i++) {
    newArrayOfPrices.push(newArrayPrices[i][MarketPrices.CLOSE]);
  }

  return newArrayOfPrices;
}

export function calculateTotalAllocatedAmount(
  months: number,
  monthlyValue: number
) {
  return castDecimals(months * monthlyValue);
}

export function calculateNominalResult(
  totalAllocatedAmount: number,
  resultInPercentage: number
) {
  return castDecimals(totalAllocatedAmount * resultInPercentage);
}

export function calculateResultBetweenAssets(
  assetName1: string,
  assetResult1: string,
  assetName2: string,
  assetResult2: string,
) {
  const assetResult1AsNumber = Number(assetResult1)
  const assetResult2AsNumber = Number(assetResult2)

  if (assetResult1AsNumber > assetResult2AsNumber) {
    return assetName1
  }

  if (assetResult1AsNumber < assetResult2AsNumber) {
    return assetName2
  }

  return "Empate";
}