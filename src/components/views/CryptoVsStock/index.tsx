import { useEffect, useState } from 'react';
import * as S from './styles';
import {
  castDecimals,
  checkResultIsGainOrLoss,
  convertPriceStringToFloat,
  convertToPercentage,
} from '@/helpers/general';
import {
  calculateNominalResult,
  calculateResultBetweenAssets,
  calculateTotalAllocatedAmount,
  getResult,
  processPrices,
} from '@/helpers/monthlyPrices';
import { getPricesInfo } from '@/services/api';
import Button from '@/components/shared/Button';
import { useRouter, useSearchParams } from 'next/navigation';

export default function CryptoVsStockView() {
  const router = useRouter();

  const searchParams = useSearchParams();

  const searchCryptoName = searchParams.get('cryptoName');
  const searchCryptoSymbol = searchParams.get('cryptoSymbol');
  const searchStockName = searchParams.get('stockName');
  const searchStockSymbol = searchParams.get('stockSymbol');
  const searchMonths = searchParams.get('months');
  const searchInvestment = searchParams.get('investment');

  const [cryptoLastPrice, setCryptoLastPrice] = useState('');
  const [cryptoAveragePrice, setCryptoAveragePrice] = useState('');
  const [stockLastPrice, setStockLastPrice] = useState('');
  const [StockAveragePrice, setStockAveragePrice] = useState('');

  const [cryptoResult, setCryptoResult] = useState<string>('');
  const [stockResult, setStockResult] = useState<string>('');

  let numberOfMonths = Number(searchMonths) || 0;
  let monthlyInvestment = Number(searchInvestment) || 0;

  useEffect(() => {
    const getCryptoData = async () => {
      const result = await getPricesInfo(searchCryptoSymbol || '');

      if (result) {
        const cryptoPrice = convertPriceStringToFloat(result[0]);
        const cryptoAverage = processPrices(result, numberOfMonths);

        setCryptoLastPrice(castDecimals(cryptoPrice));
        setCryptoAveragePrice(castDecimals(cryptoAverage));

        setCryptoResult(
          castDecimals(
            convertToPercentage(getResult(cryptoPrice, cryptoAverage))
          )
        );
      }
    };

    const getStockData = async () => {
      const result = await getPricesInfo(searchStockSymbol || '');

      if (result) {
        const stockPrice = convertPriceStringToFloat(result[0]);
        const stockAverage = processPrices(result, numberOfMonths);

        setStockLastPrice(castDecimals(stockPrice));
        setStockAveragePrice(castDecimals(stockAverage));

        setStockResult(
          castDecimals(convertToPercentage(getResult(stockPrice, stockAverage)))
        );
      }
    };

    getCryptoData();
    getStockData();
  }, []);

  const handleComeback = async () => {
    router.push(`/`);
  };

  return (
    <S.Wrapper>
      <S.ResultSection>
        <div>
          <S.AssetTitle>
            {searchCryptoName}
            <S.AssetSymbol> ({searchCryptoSymbol})</S.AssetSymbol>
          </S.AssetTitle>
          <div>
            <br />
            <div>Preço atual: ${cryptoLastPrice}</div>
            <div>Preço médio: ${cryptoAveragePrice}</div>
            <br />
            <div>
              Valor total alocado: $
              {calculateTotalAllocatedAmount(numberOfMonths, monthlyInvestment)}
            </div>
            <div>
              Resultado nominal: $
              {calculateNominalResult(
                convertPriceStringToFloat(
                  calculateTotalAllocatedAmount(
                    numberOfMonths,
                    monthlyInvestment
                  )
                ),
                getResult(
                  convertPriceStringToFloat(cryptoLastPrice),
                  convertPriceStringToFloat(cryptoAveragePrice)
                )
              )}
            </div>
            <br />
            <div>
              Resultado:{' '}
              <S.AssetResult
                AssetResult={checkResultIsGainOrLoss(cryptoResult)}
              >
                {cryptoResult}%
              </S.AssetResult>
            </div>
          </div>
        </div>

        <div>
          <S.AssetTitle>
            {searchStockName}
            <S.AssetSymbol> ({searchStockSymbol})</S.AssetSymbol>
          </S.AssetTitle>
          <div>
            <br />
            <div>Preço atual: ${stockLastPrice}</div>
            <div>Preço médio: ${StockAveragePrice}</div>
            <br />

            <div>
              Valor total alocado: $
              {calculateTotalAllocatedAmount(numberOfMonths, monthlyInvestment)}
            </div>
            <div>
              Resultado nominal: $
              {calculateNominalResult(
                convertPriceStringToFloat(
                  calculateTotalAllocatedAmount(
                    numberOfMonths,
                    monthlyInvestment
                  )
                ),
                getResult(
                  convertPriceStringToFloat(stockLastPrice),
                  convertPriceStringToFloat(StockAveragePrice)
                )
              )}
            </div>
            <br />
            <div>
              Resultado:{' '}
              <S.AssetResult AssetResult={checkResultIsGainOrLoss(stockResult)}>
                {stockResult}%
              </S.AssetResult>
            </div>
          </div>
        </div>
      </S.ResultSection>
      <S.FinalResult>
        Vencedor: {" "}
        <span>
          {calculateResultBetweenAssets(
            searchCryptoName ? searchCryptoName : '',
            cryptoResult,
            searchStockName ? searchStockName : '',
            stockResult
          )}
        </span>
      </S.FinalResult>
      <S.ButtonSection>
        <Button
          label="Voltar"
          width="130"
          onClick={handleComeback}
          submit={true}
        />
      </S.ButtonSection>
    </S.Wrapper>
  );
}
