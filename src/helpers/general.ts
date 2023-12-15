export function castObjectToArray(object: any) {
  let array: any = [];

  for (var j in object) array.push(object[j]);

  return array;
}

export function convertPriceStringToFloat(valueString: string) {
  return parseFloat(valueString);
}

export function castDecimals(value: number) {
  return value.toFixed(2);
}

export function convertToPercentage(value: number) {
  return value * 100 - 100;
}

export function checkResultIsGainOrLoss(value: string) {
  const valueNumber = Number(value);

  if (valueNumber == 0.0) {
    return 'breakeven';
  }

  if (valueNumber > 0.0) {
    return 'gain';
  }

  return 'loss';
}
