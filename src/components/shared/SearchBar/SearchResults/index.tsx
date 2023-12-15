import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import * as S from './styles';
import { AssetInfo, SearchBarResults } from '@/types/general';

type SearchResultsProps = {
  allResults: SearchBarResults[];
  setAllResults: Dispatch<SetStateAction<SearchBarResults[]>>;
  setSelected: Dispatch<SetStateAction<AssetInfo>>;
};

export default function SearchResults({
  allResults,
  setAllResults,
  setSelected,
}: SearchResultsProps) {
  return (
    <S.Wrapper>
      {allResults &&
        allResults.map((result, id) => {
          return (
            <S.ItemWrapper
              onClick={(e) => {
                setSelected({
                  name: result['2. name']
                    ? result['2. name']
                    : result['1. symbol'],
                  symbol: result['1. symbol'],
                });
                setAllResults([]);
              }}
            >
              <S.ItemSymbol>{result['1. symbol']}</S.ItemSymbol>
              <S.ItemName>{result['2. name']}</S.ItemName>
            </S.ItemWrapper>
          );
        })}
    </S.Wrapper>
  );
}
