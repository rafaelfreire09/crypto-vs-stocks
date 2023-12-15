import { ChangeEvent, useEffect, useState } from 'react';
import * as S from './styles';
import Button from '@/components/shared/Button';
import { useRouter } from 'next/navigation';
import SearchBar from '@/components/shared/SearchBar';
import { AssetInfo } from '@/types/general';

export default function HomeView() {
  const [chooseCrypto, setChooseCrypto] = useState<AssetInfo>({});
  const [chooseStock, setChooseStock] = useState<AssetInfo>({});
  const [chooseAmountMonths, setChooseAmountMonths] = useState('');
  const [chooseMonthlyInvestment, setChooseMonthlyInvestment] = useState('');

  const router = useRouter();

  const handleCrypto = (event: ChangeEvent<HTMLInputElement>) => {
    setChooseCrypto({
      name: event.target.value,
    });
  };

  const handleStock = (event: ChangeEvent<HTMLInputElement>) => {
    setChooseStock({
      name: event.target.value,
    });
  };

  const handleAmountMonths = (event: ChangeEvent<HTMLInputElement>) => {
    setChooseAmountMonths(event.target.value);
  };

  const handleMonthlyInvestment = (event: ChangeEvent<HTMLInputElement>) => {
    setChooseMonthlyInvestment(event.target.value);
  };

  const handleSubmit = async () => {
    if (
      chooseCrypto &&
      chooseStock &&
      chooseAmountMonths &&
      chooseMonthlyInvestment
    ) {
      try {
        router.push(
          `/cryptostocks?cryptoName=${chooseCrypto.name}&cryptoSymbol=${chooseCrypto.symbol}&stockName=${chooseStock.name}&stockSymbol=${chooseStock.symbol}&months=${chooseAmountMonths}&investment=${chooseMonthlyInvestment}`
        );
      } catch (error) {
        console.log('Erro!!');
      }
    } else {
      // showMessage('Todos os campos são obrigatórios');
    }
  };

  return (
    <S.Wrapper>
      <S.ChooseSections>
        <SearchBar input={chooseCrypto} setInput={setChooseCrypto} />
        <SearchBar input={chooseStock} setInput={setChooseStock} />
      </S.ChooseSections>
      <S.InputsSections>
        <S.Input
          type="input"
          placeholder="Quantidade de meses"
          value={chooseAmountMonths}
          onChange={handleAmountMonths}
        />
        <S.Input
          type="input"
          placeholder="Aporte mensal"
          value={chooseMonthlyInvestment}
          onChange={handleMonthlyInvestment}
        />
      </S.InputsSections>
      <S.ButtonSection>
        <Button
          label="Calcular"
          width="130"
          onClick={handleSubmit}
          submit={true}
          colorType="green"
        />
      </S.ButtonSection>
    </S.Wrapper>
  );
}
