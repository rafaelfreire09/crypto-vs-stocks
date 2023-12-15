import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import * as S from './styles';
import { FaSearch } from 'react-icons/fa';
import { getSearchBarSymbols } from '@/services/api';
import { AssetInfo, SearchBarResults } from '@/types/general';
import SearchResults from './SearchResults';
import { SearchValues } from '@/constants/general';

type SearchBarProps = {
  input: AssetInfo;
  setInput: Dispatch<SetStateAction<AssetInfo>>;
};

export default function SearchBar({ input, setInput }: SearchBarProps) {
  const [results, setResults] = useState<SearchBarResults[]>([]);

  const fetchData = async (value: string) => {
    const data = await getSearchBarSymbols(value);

    let results: any = [];

    if (data) {
      results = data.filter((user: any) => {
        return (
          (value &&
            user &&
            // user[SearchValues.SYMBOL] ||
            user[SearchValues.SYMBOL]
              .toLowerCase()
              .includes(value.toLowerCase())) ||
          // user[SearchValues.NAME] ||
          user[SearchValues.NAME].toLowerCase().includes(value.toLowerCase())
        );
      });
    }

    setResults(results);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput({
      name: event.target.value,
      symbol: event.target.value,
    });

    fetchData(event.target.value);
  };

  return (
    <div>
      <S.Wrapper>
        <S.IconSection>
          <FaSearch id="search-icon" />
        </S.IconSection>
        <S.Input
          placeholder="Digite para buscar..."
          value={input.name}
          onChange={handleChange}
        />
      </S.Wrapper>
      {results && results.length > 0 && (
        <SearchResults
          allResults={results}
          setAllResults={setResults}
          setSelected={setInput}
        />
      )}
    </div>
  );
}
